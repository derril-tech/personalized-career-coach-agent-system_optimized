# Backend API Directory Instructions

This directory contains the FastAPI backend application for TalentFlux.

## 📁 Directory Structure

```
talentflux_api/
├── __init__.py
├── main.py                 # FastAPI application entry point
├── api/                    # API routes and endpoints
│   └── v1/                # API version 1
│       ├── __init__.py
│       ├── api.py         # Main API router
│       ├── auth.py        # Authentication endpoints
│       ├── candidates.py  # Candidate management
│       ├── requisitions.py # Requisition management
│       ├── interviews.py  # Interview management
│       ├── offers.py      # Offer management
│       ├── reports.py     # Analytics and reports
│       └── organizations.py # Organization management
├── core/                   # Core application modules
│   ├── __init__.py
│   ├── config.py          # Application configuration
│   ├── database.py        # Database setup and models
│   ├── security.py        # Authentication and authorization
│   ├── logging.py         # Logging configuration
│   └── middleware.py      # Custom middleware
├── models/                 # SQLAlchemy models
│   ├── __init__.py
│   ├── user.py            # User model
│   ├── organization.py    # Organization model
│   ├── workspace.py       # Workspace model
│   ├── candidate.py       # Candidate model
│   ├── requisition.py     # Requisition model
│   ├── application.py     # Application model
│   ├── interview.py       # Interview model
│   ├── offer.py           # Offer model
│   └── consent.py         # Consent model
├── schemas/                # Pydantic schemas
│   ├── __init__.py
│   ├── auth.py            # Authentication schemas
│   ├── user.py            # User schemas
│   ├── candidate.py       # Candidate schemas
│   ├── requisition.py     # Requisition schemas
│   ├── interview.py       # Interview schemas
│   ├── offer.py           # Offer schemas
│   └── common.py          # Common schemas
├── services/               # Business logic services
│   ├── __init__.py
│   ├── auth_service.py    # Authentication service
│   ├── user_service.py    # User service
│   ├── candidate_service.py # Candidate service
│   ├── requisition_service.py # Requisition service
│   ├── interview_service.py # Interview service
│   ├── offer_service.py   # Offer service
│   ├── email_service.py   # Email service
│   └── file_service.py    # File upload service
├── ai/                     # AI and ML services
│   ├── __init__.py
│   ├── langgraph/         # LangGraph workflows
│   │   ├── __init__.py
│   │   ├── screening.py   # Screening workflow
│   │   ├── matching.py    # Matching workflow
│   │   └── scheduling.py  # Scheduling workflow
│   ├── rag/               # RAG implementation
│   │   ├── __init__.py
│   │   ├── retriever.py   # Document retriever
│   │   ├── indexer.py     # Document indexer
│   │   └── processor.py   # Document processor
│   └── embeddings/        # Vector embeddings
│       ├── __init__.py
│       ├── generator.py   # Embedding generator
│       └── matcher.py     # Similarity matcher
└── utils/                  # Utility functions
    ├── __init__.py
    ├── validators.py      # Custom validators
    ├── helpers.py         # Helper functions
    └── constants.py       # Application constants
```

## 🎯 TODO Tasks

### Core Infrastructure
- [ ] Set up database models and relationships
- [ ] Implement authentication and authorization
- [ ] Create database migrations with Alembic
- [ ] Set up Redis for caching and sessions
- [ ] Configure logging and monitoring
- [ ] Add rate limiting and security middleware

### API Endpoints
- [ ] Implement authentication endpoints (login, refresh, logout)
- [ ] Create organization and workspace management
- [ ] Build candidate CRUD operations
- [ ] Add requisition management
- [ ] Implement interview scheduling
- [ ] Create offer management workflow
- [ ] Build analytics and reporting endpoints

### AI Integration
- [ ] Set up LangGraph workflows
- [ ] Implement RAG for document processing
- [ ] Create embedding generation and storage
- [ ] Build candidate matching algorithms
- [ ] Add AI-powered screening
- [ ] Implement explainable AI with evidence

### Business Logic
- [ ] Create candidate import and parsing
- [ ] Implement skill extraction and matching
- [ ] Add interview scheduling logic
- [ ] Build offer generation and approval flow
- [ ] Create analytics and reporting services
- [ ] Implement email notifications

### Security & Compliance
- [ ] Add PII encryption and tokenization
- [ ] Implement GDPR compliance features
- [ ] Create audit logging
- [ ] Add consent management
- [ ] Implement data retention policies
- [ ] Set up bias detection and mitigation

## 🔧 Technical Requirements

### Database Design
- Use PostgreSQL with pgvector extension
- Implement proper indexing for performance
- Add foreign key constraints
- Use UUIDs for primary keys
- Implement soft deletes

### API Design
- Follow RESTful conventions
- Use proper HTTP status codes
- Implement pagination for list endpoints
- Add filtering and sorting capabilities
- Use consistent error response format

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Organization and workspace scoping
- Resource-level permissions
- Token rotation and expiration

### Performance
- Implement database connection pooling
- Add Redis caching for frequently accessed data
- Use async/await for I/O operations
- Implement background tasks for heavy operations
- Add database query optimization

### Testing
- Unit tests for all services
- Integration tests for API endpoints
- Database tests with test fixtures
- Performance and load testing
- Security testing

## 📝 Coding Standards

### Python Code Style
- Follow PEP 8 guidelines
- Use type hints for all functions
- Add docstrings for all classes and methods
- Use Black for code formatting
- Use isort for import sorting

### API Documentation
- Use OpenAPI/Swagger for API documentation
- Add detailed descriptions for all endpoints
- Include request/response examples
- Document error codes and messages
- Keep documentation up to date

### Error Handling
- Use proper exception hierarchy
- Implement global exception handlers
- Add structured error logging
- Provide user-friendly error messages
- Handle edge cases gracefully

### Security Best Practices
- Validate all input data
- Use parameterized queries
- Implement proper CORS configuration
- Add rate limiting
- Use secure headers
- Encrypt sensitive data

## 🚀 Next Steps

1. Set up database models and migrations
2. Implement authentication system
3. Create core CRUD endpoints
4. Add AI integration
5. Implement business logic
6. Add security and compliance features
7. Write comprehensive tests
8. Deploy to production

## 📚 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Pydantic Documentation](https://pydantic-docs.helpmanual.io/)
- [Alembic Documentation](https://alembic.sqlalchemy.org/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
