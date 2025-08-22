# TalentFlux Backend API

The backend API for TalentFlux - an intelligent HR recruitment platform built with FastAPI, SQLAlchemy, and Python 3.11+.

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- PostgreSQL 14+
- Redis 6+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personalized-career-coach-agent-system_optimized
   ```

2. **Navigate to backend directory**
   ```bash
   cd apps/api
   ```

3. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install dependencies**
   ```bash
   pip install -e .
   ```

5. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

6. **Set up database**
   ```bash
   # Create database
   createdb talentflux
   
   # Run migrations
   alembic upgrade head
   ```

7. **Start the development server**
   ```bash
   uvicorn talentflux_api.main:app --reload --host 0.0.0.0 --port 8000
   ```

8. **Access the API**
   - API: [http://localhost:8000](http://localhost:8000)
   - Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)
   - Health check: [http://localhost:8000/health](http://localhost:8000/health)

## 📁 Project Structure

```
apps/api/
├── talentflux_api/           # Main application package
│   ├── __init__.py
│   ├── main.py              # FastAPI application entry point
│   ├── api/                 # API routes and endpoints
│   │   └── v1/             # API version 1
│   │       ├── auth.py     # Authentication endpoints
│   │       ├── candidates.py # Candidate management
│   │       ├── requisitions.py # Requisition management
│   │       ├── interviews.py # Interview management
│   │       ├── offers.py    # Offer management
│   │       └── reports.py   # Analytics and reports
│   ├── core/               # Core application modules
│   │   ├── config.py       # Application configuration
│   │   ├── database.py     # Database setup and models
│   │   ├── security.py     # Authentication and authorization
│   │   └── logging.py      # Logging configuration
│   ├── models/             # SQLAlchemy models
│   │   ├── user.py         # User model
│   │   ├── candidate.py    # Candidate model
│   │   ├── requisition.py  # Requisition model
│   │   └── interview.py    # Interview model
│   ├── schemas/            # Pydantic schemas
│   │   ├── auth.py         # Authentication schemas
│   │   ├── candidate.py    # Candidate schemas
│   │   └── requisition.py  # Requisition schemas
│   ├── services/           # Business logic services
│   │   ├── auth_service.py # Authentication service
│   │   ├── candidate_service.py # Candidate service
│   │   └── ai_service.py   # AI integration service
│   ├── ai/                 # AI and ML services
│   │   ├── langgraph/      # LangGraph workflows
│   │   ├── rag/            # RAG implementation
│   │   └── embeddings/     # Vector embeddings
│   └── utils/              # Utility functions
├── alembic/                # Database migrations
├── tests/                  # Backend tests
└── scripts/                # Backend scripts
```

## 🛠️ Available Scripts

- `uvicorn talentflux_api.main:app --reload` - Start development server
- `pytest` - Run tests
- `pytest --cov=talentflux_api` - Run tests with coverage
- `alembic upgrade head` - Apply database migrations
- `alembic revision --autogenerate -m "description"` - Create new migration
- `black .` - Format code with Black
- `isort .` - Sort imports
- `flake8` - Lint code
- `mypy talentflux_api` - Type checking

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
# Application
ENVIRONMENT=development
DEBUG=true
SECRET_KEY=your-super-secret-key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/talentflux

# Redis
REDIS_URL=redis://localhost:6379

# AI Models
OPENAI_API_KEY=your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-api-key

# File Storage
STORAGE_BUCKET=talentflux-storage
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
```

### Database Setup

1. **Install PostgreSQL**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   
   # macOS
   brew install postgresql
   
   # Windows
   # Download from https://www.postgresql.org/download/windows/
   ```

2. **Create database**
   ```bash
   createdb talentflux
   ```

3. **Install pgvector extension**
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ```

4. **Run migrations**
   ```bash
   alembic upgrade head
   ```

### Redis Setup

1. **Install Redis**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install redis-server
   
   # macOS
   brew install redis
   
   # Windows
   # Download from https://redis.io/download
   ```

2. **Start Redis**
   ```bash
   redis-server
   ```

## 📊 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - User logout

### Organizations
- `GET /api/v1/organizations` - Get user organizations
- `POST /api/v1/organizations` - Create organization

### Candidates
- `GET /api/v1/candidates` - List candidates
- `POST /api/v1/candidates` - Create candidate
- `GET /api/v1/candidates/{id}` - Get candidate details
- `PUT /api/v1/candidates/{id}` - Update candidate
- `DELETE /api/v1/candidates/{id}` - Delete candidate

### Requisitions
- `GET /api/v1/requisitions` - List requisitions
- `POST /api/v1/requisitions` - Create requisition
- `GET /api/v1/requisitions/{id}` - Get requisition details
- `PUT /api/v1/requisitions/{id}` - Update requisition

### AI Matching
- `POST /api/v1/match/{requisition_id}` - AI candidate matching
- `POST /api/v1/screen/{candidate_id}` - AI candidate screening

### Interviews
- `GET /api/v1/interviews` - List interviews
- `POST /api/v1/interviews/schedule` - Schedule interview
- `POST /api/v1/interviews/{id}/feedback` - Submit feedback

### Reports
- `GET /api/v1/reports/funnel` - Recruitment funnel analytics
- `GET /api/v1/reports/diversity` - Diversity analytics

## 🤖 AI Features

### LangGraph Workflows
- **Screening Workflow**: Automated candidate screening
- **Matching Workflow**: Intelligent candidate-job matching
- **Scheduling Workflow**: Automated interview scheduling

### RAG Implementation
- Resume parsing and analysis
- Job description analysis
- Skills extraction and matching
- Evidence-based recommendations

### Vector Embeddings
- pgvector for similarity search
- OpenAI embeddings for text analysis
- Hybrid search (BM25 + dense vectors)

## 🔒 Security

### Authentication
- JWT-based authentication
- Access and refresh tokens
- Token rotation and expiration
- Secure password hashing with bcrypt

### Authorization
- Role-based access control (RBAC)
- Organization and workspace scoping
- Resource-level permissions
- Audit logging

### Data Protection
- PII encryption and tokenization
- GDPR compliance features
- Data retention policies
- Consent management

### API Security
- Rate limiting
- CORS configuration
- Input validation and sanitization
- SQL injection prevention
- XSS protection

## 📈 Monitoring

### Logging
- Structured logging with structlog
- Request/response logging
- Error tracking and alerting
- Performance monitoring

### Metrics
- Prometheus metrics
- Custom business metrics
- Performance dashboards
- Health checks

### Tracing
- OpenTelemetry integration
- Distributed tracing
- Performance profiling
- Error correlation

## 🧪 Testing

### Unit Tests
```bash
pytest tests/unit/
```

### Integration Tests
```bash
pytest tests/integration/
```

### API Tests
```bash
pytest tests/api/
```

### Test Coverage
```bash
pytest --cov=talentflux_api --cov-report=html
```

## 🚀 Deployment

### Docker
```bash
# Build image
docker build -t talentflux-api .

# Run container
docker run -p 8000:8000 talentflux-api
```

### Production
```bash
# Install production dependencies
pip install -e .[production]

# Start with Gunicorn
gunicorn talentflux_api.main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Environment Variables for Production
```bash
ENVIRONMENT=production
DEBUG=false
DATABASE_URL=postgresql://user:password@host:5432/talentflux
REDIS_URL=redis://host:6379
SECRET_KEY=your-production-secret-key
```

## 🔧 Development

### Code Quality
- **Black**: Code formatting
- **isort**: Import sorting
- **flake8**: Linting
- **mypy**: Type checking
- **pre-commit**: Git hooks

### Pre-commit Setup
```bash
pip install pre-commit
pre-commit install
```

### Database Migrations
```bash
# Create new migration
alembic revision --autogenerate -m "Add new table"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```

## 📚 Documentation

- **API Documentation**: Available at `/docs` (Swagger UI)
- **ReDoc**: Available at `/redoc`
- **OpenAPI Schema**: Available at `/openapi.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run linting and type checking
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation in `/docs`
- Open an issue on GitHub
- Contact the development team

---

**TalentFlux** - Find, match, and hire top talent 3× faster—with auditable AI you can trust.
