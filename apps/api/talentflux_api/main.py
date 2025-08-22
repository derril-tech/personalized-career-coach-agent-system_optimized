"""
TalentFlux API - Main Application Entry Point

This module contains the main FastAPI application with all middleware,
routers, and configurations for the intelligent HR recruitment platform.
"""

import logging
from contextlib import asynccontextmanager
from typing import Any

from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
import structlog
from opentelemetry import trace
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor

from talentflux_api.core.config import settings
from talentflux_api.core.database import init_db, close_db
from talentflux_api.core.logging import setup_logging
from talentflux_api.api.v1.api import api_router
from talentflux_api.core.middleware import (
    RequestLoggingMiddleware,
    ResponseTimeMiddleware,
    SecurityHeadersMiddleware,
)

# Setup structured logging
setup_logging()
logger = structlog.get_logger(__name__)

# Setup OpenTelemetry tracing
tracer = trace.get_tracer(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> Any:
    """
    Application lifespan manager for startup and shutdown events.
    
    Handles:
    - Database initialization
    - Redis connection setup
    - AI model loading
    - Graceful shutdown
    """
    # Startup
    logger.info("Starting TalentFlux API", version=settings.VERSION)
    
    try:
        # Initialize database connections
        await init_db()
        logger.info("Database connections initialized")
        
        # TODO: Initialize Redis connections
        # TODO: Load AI models and embeddings
        # TODO: Setup background tasks
        
        logger.info("TalentFlux API startup completed")
        yield
        
    except Exception as e:
        logger.error("Failed to start TalentFlux API", error=str(e))
        raise
    finally:
        # Shutdown
        logger.info("Shutting down TalentFlux API")
        
        try:
            # Close database connections
            await close_db()
            logger.info("Database connections closed")
            
            # TODO: Close Redis connections
            # TODO: Cleanup AI model resources
            # TODO: Cancel background tasks
            
        except Exception as e:
            logger.error("Error during shutdown", error=str(e))


def create_application() -> FastAPI:
    """
    Create and configure the FastAPI application.
    
    Returns:
        FastAPI: Configured application instance
    """
    app = FastAPI(
        title="TalentFlux API",
        description="Intelligent HR Recruitment Platform API",
        version=settings.VERSION,
        docs_url="/docs" if settings.ENVIRONMENT != "production" else None,
        redoc_url="/redoc" if settings.ENVIRONMENT != "production" else None,
        openapi_url="/openapi.json" if settings.ENVIRONMENT != "production" else None,
        lifespan=lifespan,
    )
    
    # Add CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allow_headers=["*"],
    )
    
    # Add security middleware
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.ALLOWED_HOSTS)
    app.add_middleware(SecurityHeadersMiddleware)
    app.add_middleware(RequestLoggingMiddleware)
    app.add_middleware(ResponseTimeMiddleware)
    
    # Setup OpenTelemetry instrumentation
    if settings.ENABLE_TRACING:
        FastAPIInstrumentor.instrument_app(app)
    
    # Include API routers
    app.include_router(api_router, prefix="/api/v1")
    
    # Health check endpoint
    @app.get("/health", tags=["Health"])
    async def health_check() -> dict[str, Any]:
        """Health check endpoint for monitoring and load balancers."""
        return {
            "status": "healthy",
            "version": settings.VERSION,
            "environment": settings.ENVIRONMENT,
            "timestamp": settings.get_current_timestamp(),
        }
    
    # Root endpoint
    @app.get("/", tags=["Root"])
    async def root() -> dict[str, Any]:
        """Root endpoint with API information."""
        return {
            "message": "Welcome to TalentFlux API",
            "version": settings.VERSION,
            "description": "Intelligent HR Recruitment Platform",
            "docs": "/docs" if settings.ENVIRONMENT != "production" else None,
        }
    
    # Exception handlers
    @app.exception_handler(StarletteHTTPException)
    async def http_exception_handler(request: Request, exc: StarletteHTTPException) -> JSONResponse:
        """Handle HTTP exceptions with structured logging."""
        logger.warning(
            "HTTP exception",
            status_code=exc.status_code,
            detail=exc.detail,
            path=request.url.path,
            method=request.method,
        )
        
        return JSONResponse(
            status_code=exc.status_code,
            content={
                "error": {
                    "type": "http_exception",
                    "message": exc.detail,
                    "status_code": exc.status_code,
                }
            },
        )
    
    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError) -> JSONResponse:
        """Handle validation errors with detailed feedback."""
        logger.warning(
            "Validation error",
            errors=exc.errors(),
            path=request.url.path,
            method=request.method,
        )
        
        return JSONResponse(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            content={
                "error": {
                    "type": "validation_error",
                    "message": "Request validation failed",
                    "details": exc.errors(),
                }
            },
        )
    
    @app.exception_handler(Exception)
    async def general_exception_handler(request: Request, exc: Exception) -> JSONResponse:
        """Handle unexpected exceptions with error logging."""
        logger.error(
            "Unexpected error",
            error=str(exc),
            error_type=type(exc).__name__,
            path=request.url.path,
            method=request.method,
            exc_info=True,
        )
        
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={
                "error": {
                    "type": "internal_error",
                    "message": "An unexpected error occurred",
                    "status_code": 500,
                }
            },
        )
    
    return app


# Create the application instance
app = create_application()

# Export for ASGI servers
__all__ = ["app"]
