"""
TalentFlux API Configuration

This module contains all configuration settings for the TalentFlux API,
including environment variables, database settings, AI model configurations,
and security settings.
"""

import os
from datetime import datetime, timezone
from typing import List, Optional
from pydantic import BaseSettings, Field, validator


class Settings(BaseSettings):
    """Application settings with environment variable support."""
    
    # Application metadata
    APP_NAME: str = "TalentFlux API"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "Intelligent HR Recruitment Platform API"
    
    # Environment
    ENVIRONMENT: str = Field(default="development", env="ENVIRONMENT")
    DEBUG: bool = Field(default=False, env="DEBUG")
    
    # Server settings
    HOST: str = Field(default="0.0.0.0", env="HOST")
    PORT: int = Field(default=8000, env="PORT")
    WORKERS: int = Field(default=1, env="WORKERS")
    
    # Security
    SECRET_KEY: str = Field(..., env="SECRET_KEY")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(default=30, env="ACCESS_TOKEN_EXPIRE_MINUTES")
    REFRESH_TOKEN_EXPIRE_DAYS: int = Field(default=7, env="REFRESH_TOKEN_EXPIRE_DAYS")
    
    # CORS settings
    ALLOWED_ORIGINS: List[str] = Field(
        default=["http://localhost:3000", "https://app.talentflux.com"],
        env="ALLOWED_ORIGINS"
    )
    ALLOWED_HOSTS: List[str] = Field(
        default=["localhost", "127.0.0.1", "app.talentflux.com"],
        env="ALLOWED_HOSTS"
    )
    
    # Database settings
    DATABASE_URL: str = Field(..., env="DATABASE_URL")
    DATABASE_POOL_SIZE: int = Field(default=20, env="DATABASE_POOL_SIZE")
    DATABASE_MAX_OVERFLOW: int = Field(default=30, env="DATABASE_MAX_OVERFLOW")
    DATABASE_POOL_TIMEOUT: int = Field(default=30, env="DATABASE_POOL_TIMEOUT")
    
    # Redis settings
    REDIS_URL: str = Field(default="redis://localhost:6379", env="REDIS_URL")
    REDIS_POOL_SIZE: int = Field(default=10, env="REDIS_POOL_SIZE")
    
    # AI Model settings
    OPENAI_API_KEY: Optional[str] = Field(default=None, env="OPENAI_API_KEY")
    ANTHROPIC_API_KEY: Optional[str] = Field(default=None, env="ANTHROPIC_API_KEY")
    OPENAI_MODEL: str = Field(default="gpt-4o", env="OPENAI_MODEL")
    CLAUDE_MODEL: str = Field(default="claude-3-sonnet-20240229", env="CLAUDE_MODEL")
    EMBEDDING_MODEL: str = Field(default="text-embedding-3-small", env="EMBEDDING_MODEL")
    
    # AI Configuration
    AI_ENABLED: bool = Field(default=True, env="AI_ENABLED")
    RAG_ENABLED: bool = Field(default=True, env="RAG_ENABLED")
    MAX_TOKENS: int = Field(default=4000, env="MAX_TOKENS")
    TEMPERATURE: float = Field(default=0.1, env="TEMPERATURE")
    
    # File storage
    STORAGE_BUCKET: str = Field(default="talentflux-storage", env="STORAGE_BUCKET")
    STORAGE_REGION: str = Field(default="us-east-1", env="STORAGE_REGION")
    AWS_ACCESS_KEY_ID: Optional[str] = Field(default=None, env="AWS_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY: Optional[str] = Field(default=None, env="AWS_SECRET_ACCESS_KEY")
    
    # Email settings
    SMTP_HOST: Optional[str] = Field(default=None, env="SMTP_HOST")
    SMTP_PORT: int = Field(default=587, env="SMTP_PORT")
    SMTP_USERNAME: Optional[str] = Field(default=None, env="SMTP_USERNAME")
    SMTP_PASSWORD: Optional[str] = Field(default=None, env="SMTP_PASSWORD")
    SMTP_TLS: bool = Field(default=True, env="SMTP_TLS")
    FROM_EMAIL: str = Field(default="noreply@talentflux.com", env="FROM_EMAIL")
    
    # Monitoring and logging
    LOG_LEVEL: str = Field(default="INFO", env="LOG_LEVEL")
    ENABLE_TRACING: bool = Field(default=False, env="ENABLE_TRACING")
    METRICS_ENABLED: bool = Field(default=True, env="METRICS_ENABLED")
    
    # Rate limiting
    RATE_LIMIT_PER_MINUTE: int = Field(default=100, env="RATE_LIMIT_PER_MINUTE")
    RATE_LIMIT_AUTH_PER_MINUTE: int = Field(default=5, env="RATE_LIMIT_AUTH_PER_MINUTE")
    
    # Pagination
    DEFAULT_PAGE_SIZE: int = Field(default=20, env="DEFAULT_PAGE_SIZE")
    MAX_PAGE_SIZE: int = Field(default=100, env="MAX_PAGE_SIZE")
    
    # File upload limits
    MAX_FILE_SIZE: int = Field(default=10 * 1024 * 1024, env="MAX_FILE_SIZE")  # 10MB
    ALLOWED_FILE_TYPES: List[str] = Field(
        default=[".pdf", ".doc", ".docx", ".txt"],
        env="ALLOWED_FILE_TYPES"
    )
    
    # GDPR and compliance
    DATA_RETENTION_DAYS: int = Field(default=2555, env="DATA_RETENTION_DAYS")  # 7 years
    CONSENT_EXPIRY_DAYS: int = Field(default=365, env="CONSENT_EXPIRY_DAYS")
    
    # Feature flags
    FEATURE_AI_MATCHING: bool = Field(default=True, env="FEATURE_AI_MATCHING")
    FEATURE_AI_SCREENING: bool = Field(default=True, env="FEATURE_AI_SCREENING")
    FEATURE_MASKED_REVIEW: bool = Field(default=True, env="FEATURE_MASKED_REVIEW")
    FEATURE_DEI_ANALYTICS: bool = Field(default=True, env="FEATURE_DEI_ANALYTICS")
    
    @validator("ALLOWED_ORIGINS", pre=True)
    def parse_allowed_origins(cls, v):
        """Parse ALLOWED_ORIGINS from comma-separated string."""
        if isinstance(v, str):
            return [origin.strip() for origin in v.split(",")]
        return v
    
    @validator("ALLOWED_HOSTS", pre=True)
    def parse_allowed_hosts(cls, v):
        """Parse ALLOWED_HOSTS from comma-separated string."""
        if isinstance(v, str):
            return [host.strip() for host in v.split(",")]
        return v
    
    @validator("ALLOWED_FILE_TYPES", pre=True)
    def parse_allowed_file_types(cls, v):
        """Parse ALLOWED_FILE_TYPES from comma-separated string."""
        if isinstance(v, str):
            return [file_type.strip() for file_type in v.split(",")]
        return v
    
    @property
    def is_development(self) -> bool:
        """Check if running in development environment."""
        return self.ENVIRONMENT.lower() in ["development", "dev"]
    
    @property
    def is_production(self) -> bool:
        """Check if running in production environment."""
        return self.ENVIRONMENT.lower() in ["production", "prod"]
    
    @property
    def is_testing(self) -> bool:
        """Check if running in testing environment."""
        return self.ENVIRONMENT.lower() in ["testing", "test"]
    
    def get_current_timestamp(self) -> str:
        """Get current timestamp in ISO format."""
        return datetime.now(timezone.utc).isoformat()
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


# Create global settings instance
settings = Settings()

# Export for use throughout the application
__all__ = ["settings", "Settings"]
