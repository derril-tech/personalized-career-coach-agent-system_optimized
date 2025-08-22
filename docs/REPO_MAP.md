# Repository Map - TalentFlux Platform

This document provides a comprehensive overview of the TalentFlux repository structure, explaining the purpose and organization of each folder and file.

## 📁 Root Structure

```
personalized-career-coach-agent-system_optimized/
├── apps/                    # Application packages
│   ├── web/                # Next.js 14 Frontend Application
│   └── api/                # FastAPI Backend Application
├── packages/               # Shared packages and libraries
│   ├── ui/                 # Shared UI components
│   └── lib/                # Shared utilities and types
├── docs/                   # Documentation
├── infra/                  # Infrastructure and deployment
├── tests/                  # End-to-end tests
└── scripts/                # Development and deployment scripts
```

## 🎯 Apps Directory

### `/apps/web/` - Frontend Application (Next.js 14)

**Purpose**: The main frontend application built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

**Key Files**:
- `package.json` - Frontend dependencies and scripts
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

**Directory Structure**:
```
apps/web/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── (auth)/         # Authentication routes
│   │   ├── (dashboard)/    # Dashboard routes
│   │   ├── api/            # API routes (if needed)
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/             # Base UI components
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components
│   │   └── features/       # Feature-specific components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and configurations
│   ├── stores/             # State management (Zustand)
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── tests/                  # Frontend tests
```

**TODO Markers**:
- `CLAUDE_TASK: Implement authentication pages`
- `CLAUDE_TASK: Build pipeline board component`
- `CLAUDE_TASK: Create candidate profile views`
- `CLAUDE_TASK: Add interview scheduling interface`

### `/apps/api/` - Backend Application (FastAPI)

**Purpose**: The main backend API built with FastAPI, SQLAlchemy, and Python 3.11+.

**Key Files**:
- `pyproject.toml` - Python project configuration
- `alembic.ini` - Database migration configuration
- `requirements.txt` - Python dependencies

**Directory Structure**:
```
apps/api/
├── talentflux_api/         # Main application package
│   ├── __init__.py
│   ├── main.py            # FastAPI application entry point
│   ├── api/               # API routes and endpoints
│   │   └── v1/            # API version 1
│   ├── core/              # Core application modules
│   │   ├── config.py      # Application configuration
│   │   ├── database.py    # Database setup and models
│   │   ├── security.py    # Authentication and authorization
│   │   └── logging.py     # Logging configuration
│   ├── models/            # SQLAlchemy models
│   ├── schemas/           # Pydantic schemas
│   ├── services/          # Business logic services
│   ├── ai/                # AI and ML services
│   │   ├── langgraph/     # LangGraph workflows
│   │   ├── rag/           # RAG implementation
│   │   └── embeddings/    # Vector embeddings
│   └── utils/             # Utility functions
├── alembic/               # Database migrations
├── tests/                 # Backend tests
└── scripts/               # Backend scripts
```

**TODO Markers**:
- `CLAUDE_TASK: Implement authentication endpoints`
- `CLAUDE_TASK: Create candidate CRUD operations`
- `CLAUDE_TASK: Build AI matching algorithms`
- `CLAUDE_TASK: Add interview scheduling logic`

## 📦 Packages Directory

### `/packages/ui/` - Shared UI Components

**Purpose**: Reusable UI components that can be shared between frontend applications.

**Structure**:
```
packages/ui/
├── package.json           # UI package configuration
├── src/
│   ├── components/        # Shared components
│   ├── hooks/             # Shared hooks
│   └── utils/             # UI utilities
└── dist/                  # Built components
```

**TODO Markers**:
- `CLAUDE_TASK: Create design system components`
- `CLAUDE_TASK: Build form components`
- `CLAUDE_TASK: Add data visualization components`

### `/packages/lib/` - Shared Libraries

**Purpose**: Shared utilities, types, and configurations used across the monorepo.

**Structure**:
```
packages/lib/
├── package.json           # Library configuration
├── src/
│   ├── types/             # Shared TypeScript types
│   ├── utils/             # Shared utilities
│   └── constants/         # Shared constants
└── dist/                  # Built library
```

**TODO Markers**:
- `CLAUDE_TASK: Define shared API types`
- `CLAUDE_TASK: Create utility functions`
- `CLAUDE_TASK: Add validation schemas`

## 📚 Documentation Directory

### `/docs/` - Project Documentation

**Purpose**: Comprehensive documentation for the TalentFlux platform.

**Files**:
- `PROJECT_BRIEF.md` - Project requirements and specifications
- `REPO_MAP.md` - This file (repository structure guide)
- `API_SPEC.md` - API documentation and specifications
- `CLAUDE.md` - AI collaboration guidelines and rules
- `PROMPT_DECLARATION.md` - Detailed prompt for AI development

## 🏗️ Infrastructure Directory

### `/infra/` - Infrastructure and Deployment

**Purpose**: Infrastructure as Code, deployment configurations, and environment setup.

**Structure**:
```
infra/
├── docker/                # Docker configurations
├── kubernetes/            # Kubernetes manifests
├── terraform/             # Terraform configurations
├── scripts/               # Deployment scripts
└── environments/          # Environment-specific configs
```

**TODO Markers**:
- `CLAUDE_TASK: Create Docker configurations`
- `CLAUDE_TASK: Set up CI/CD pipelines`
- `CLAUDE_TASK: Configure monitoring`

## 🧪 Tests Directory

### `/tests/` - End-to-End Tests

**Purpose**: Comprehensive testing suite for the entire application.

**Structure**:
```
tests/
├── e2e/                   # End-to-end tests (Playwright)
├── integration/           # Integration tests
├── performance/           # Performance tests
└── fixtures/              # Test data and fixtures
```

**TODO Markers**:
- `CLAUDE_TASK: Write E2E test scenarios`
- `CLAUDE_TASK: Create integration tests`
- `CLAUDE_TASK: Add performance benchmarks`

## 🔧 Scripts Directory

### `/scripts/` - Development and Deployment Scripts

**Purpose**: Automation scripts for development, testing, and deployment.

**Files**:
- `dev.sh` - Development environment setup
- `build.sh` - Build all applications
- `deploy.sh` - Deployment automation
- `test.sh` - Run all tests

## 📋 TODO Markers and Instructions

Throughout the repository, you'll find `CLAUDE_TASK:` markers that indicate specific tasks for AI development. These markers are placed in:

1. **Component files** - Where specific UI components need to be implemented
2. **Service files** - Where business logic needs to be added
3. **Configuration files** - Where settings need to be configured
4. **Documentation files** - Where additional documentation is needed

### Example TODO Markers:

```typescript
// CLAUDE_TASK: Implement candidate search functionality
// - Add search filters (skills, experience, location)
// - Implement real-time search with debouncing
// - Add search result highlighting
```

```python
# CLAUDE_TASK: Implement AI candidate matching
# - Create embedding generation for resumes
# - Build similarity scoring algorithm
# - Add explainable matching with evidence
```

## 🎯 Development Workflow

1. **Frontend Development**: Work in `/apps/web/` for UI components and pages
2. **Backend Development**: Work in `/apps/api/` for API endpoints and services
3. **Shared Components**: Create reusable components in `/packages/ui/`
4. **Shared Logic**: Add utilities and types in `/packages/lib/`
5. **Testing**: Write tests in respective `/tests/` directories
6. **Documentation**: Update docs in `/docs/` directory

## 🔒 Security and Compliance

- **Authentication**: JWT-based auth with refresh tokens
- **Authorization**: Role-based access control (RBAC)
- **Data Protection**: PII encryption and GDPR compliance
- **API Security**: Rate limiting, CORS, and input validation
- **Monitoring**: Structured logging and error tracking

## 🚀 Deployment

- **Frontend**: Vercel deployment with edge caching
- **Backend**: Render autoscaling with worker pools
- **Database**: Managed PostgreSQL with pgvector
- **Cache**: Redis for sessions and job queues
- **Storage**: S3/GCS for file uploads

This repository structure provides a scalable, maintainable foundation for the TalentFlux platform, with clear separation of concerns and comprehensive documentation for AI-assisted development.
