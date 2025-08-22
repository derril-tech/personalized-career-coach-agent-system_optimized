# PROMPT DECLARATION - TalentFlux Platform

## 🎯 Project Overview

**TalentFlux** is an intelligent HR recruitment platform that automates sourcing, screening, matching, interview scheduling, and offer orchestration. Built with Next.js 14 + FastAPI + PostgreSQL/pgvector with LangGraph orchestrated agents using OpenAI + Claude.

**Tagline**: Find, match, and hire top talent 3× faster—with auditable AI you can trust.

## 🏗️ Architecture & Tech Stack

### Frontend (Next.js 14 + React 18 + TypeScript + Tailwind)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand for global state, React Query for server state
- **UI Components**: Headless UI, Heroicons, Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Real-time**: Socket.io-client for WebSocket connections
- **Animations**: Framer Motion for smooth interactions

### Backend (FastAPI + Python 3.11 + Async SQLAlchemy 2.0)
- **Framework**: FastAPI with async/await support
- **Language**: Python 3.11+ with type hints
- **Database**: PostgreSQL with pgvector extension
- **ORM**: SQLAlchemy 2.0 with async support
- **Migrations**: Alembic for database migrations
- **Caching**: Redis for sessions and job queues
- **AI Integration**: LangGraph, LangChain, OpenAI, Claude
- **File Storage**: AWS S3 for document storage
- **Email**: FastAPI Mail for notifications
- **Monitoring**: OpenTelemetry, Prometheus, structured logging

### AI & ML Stack
- **Orchestration**: LangGraph for deterministic workflows
- **RAG**: LangChain with pgvector for document retrieval
- **Models**: OpenAI GPT-4o, Claude 3 Sonnet
- **Embeddings**: OpenAI text-embedding-3-small
- **Vector Database**: pgvector for similarity search
- **Workflows**: Screening → Matching → Scheduling → Notify

## 🎨 Design System & UX

### Color Palette
- **Primary**: Blue shades (#0ea5e9) for main actions and branding
- **Secondary**: Neutral grays for backgrounds and text
- **Success**: Green (#22c55e) for positive actions
- **Warning**: Yellow (#f59e0b) for attention
- **Error**: Red (#ef4444) for negative actions

### Component Library
- **Buttons**: Primary, secondary, outline, ghost variants
- **Cards**: Headers, content, footers with consistent spacing
- **Forms**: Inputs with validation states and error handling
- **Badges**: Status indicators with semantic colors
- **Tables**: Sortable, paginated with bulk actions
- **Modals**: Confirmation dialogs and forms
- **Loading**: Spinners, skeletons, and progress indicators

### Accessibility
- **WCAG 2.1 AA** compliance
- **Keyboard navigation** for all interactive elements
- **Screen reader** support with proper ARIA labels
- **Color contrast** ratios meeting accessibility standards
- **Reduced motion** support for animations

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions for mobile devices
- **Adaptive layouts** for different screen sizes

## 🔧 Development Guidelines

### Frontend Development
1. **Component Structure**: Use functional components with TypeScript interfaces
2. **State Management**: Zustand for global state, React Query for server state
3. **Error Handling**: Error boundaries and proper error states
4. **Performance**: React.memo, lazy loading, code splitting
5. **Testing**: Jest, React Testing Library, Playwright for E2E

### Backend Development
1. **API Design**: RESTful conventions with proper HTTP status codes
2. **Validation**: Pydantic schemas for request/response validation
3. **Database**: Async SQLAlchemy with proper indexing
4. **Security**: JWT authentication, RBAC, rate limiting
5. **Testing**: pytest with async support and database fixtures

### AI Integration
1. **LangGraph Workflows**: Deterministic, inspectable stateful workflows
2. **RAG Implementation**: Document retrieval with evidence citations
3. **Bias Detection**: Explicit bias checks with counterfactual prompts
4. **Explainable AI**: All decisions must include evidence and rationale
5. **Performance**: Sub-2s perceived latency with streaming responses

## 📊 Core Features & User Journeys

### 1. Authentication & Onboarding
- **JWT-based authentication** with refresh tokens
- **Organization setup** with workspace configuration
- **Role-based access control** (owner, admin, recruiter, hiring manager, interviewer, analyst)
- **SSO integration** (SAML/OIDC) for enterprise customers

### 2. Candidate Management
- **Candidate import** from resumes, job boards, LinkedIn
- **AI-powered parsing** of resumes with skill extraction
- **Deduplication** and enrichment of candidate profiles
- **Consent management** for GDPR compliance
- **PII encryption** and tokenization for data protection

### 3. Requisition Management
- **Job description builder** with AI assistance
- **Competency framework** integration
- **Compensation band** validation
- **Interview plan** generation
- **Approval workflows** for requisition creation

### 4. AI-Powered Matching
- **Intelligent matching** using embeddings and hybrid search
- **FitScore calculation** with explainable evidence
- **Bias detection** and mitigation
- **Skills gap analysis** with recommendations
- **Automated shortlisting** with confidence scores

### 5. Interview Management
- **Automated scheduling** with calendar integration
- **Interviewer load balancing** and availability checking
- **Structured feedback forms** with scoring
- **Panel coordination** and debrief summaries
- **Interview preparation** packs for candidates

### 6. Offer Management
- **Compensation validation** against bands
- **Approval workflows** with routing
- **Electronic signature** integration
- **Background check** hooks
- **Offer tracking** and analytics

### 7. Analytics & Reporting
- **Recruitment funnel** analytics with conversion rates
- **Time-to-hire** tracking and optimization
- **Diversity and inclusion** metrics with adverse impact analysis
- **Cost per hire** calculations
- **Performance dashboards** with real-time updates

## 🔒 Security & Compliance

### Data Protection
- **PII encryption** at rest and in transit
- **Tokenization** for sensitive data
- **Data residency** controls for international compliance
- **Audit logging** for all data access
- **Data retention** policies with automated cleanup

### GDPR/CCPA Compliance
- **Consent management** with granular controls
- **Right to be forgotten** implementation
- **Data portability** features
- **Privacy impact assessments** for AI features
- **Transparency** in AI decision-making

### Security Measures
- **Rate limiting** on all API endpoints
- **CORS configuration** for cross-origin requests
- **Input validation** and sanitization
- **SQL injection** prevention with parameterized queries
- **XSS protection** with Content Security Policy

## 📈 Performance Requirements

### Response Times
- **Health check**: < 100ms
- **Simple CRUD operations**: < 200ms
- **Search operations**: < 500ms
- **AI matching**: < 2000ms
- **File uploads**: < 5000ms

### Scalability
- **10,000+ concurrent users** support
- **Millions of candidate profiles** storage
- **99.9% uptime** with graceful degradation
- **Auto-scaling** based on demand
- **CDN integration** for static assets

### Caching Strategy
- **Redis caching** for frequently accessed data
- **Database query** optimization with proper indexing
- **CDN caching** for static assets and images
- **Browser caching** with appropriate headers
- **API response** caching for read-heavy operations

## 🧪 Testing Strategy

### Frontend Testing
- **Unit tests**: Jest + React Testing Library for components
- **Integration tests**: API integration and user flows
- **E2E tests**: Playwright for critical user journeys
- **Visual regression**: Screenshot testing for UI consistency
- **Accessibility testing**: Automated a11y checks

### Backend Testing
- **Unit tests**: pytest for business logic
- **Integration tests**: Database and external service integration
- **API tests**: FastAPI TestClient for endpoint testing
- **Performance tests**: Load testing with realistic scenarios
- **Security tests**: OWASP compliance and vulnerability scanning

### AI Testing
- **Model accuracy** testing with labeled datasets
- **Bias detection** testing with diverse test cases
- **Performance testing** for response times
- **Explainability testing** for decision transparency
- **A/B testing** for model improvements

## 🚀 Deployment & DevOps

### Frontend Deployment (Vercel)
- **Automatic deployments** on git push
- **Edge caching** for global performance
- **Preview deployments** for pull requests
- **Environment-specific** configurations
- **Performance monitoring** with Core Web Vitals

### Backend Deployment (Render)
- **Auto-scaling** based on CPU and memory usage
- **Health checks** and automatic restarts
- **Database migrations** with zero-downtime
- **Background job** processing
- **Log aggregation** and monitoring

### Infrastructure
- **PostgreSQL** with pgvector for vector search
- **Redis** for caching and job queues
- **AWS S3** for file storage
- **CloudFlare** for CDN and DDoS protection
- **Monitoring** with Prometheus and Grafana

## 📋 Development Workflow

### Git Workflow
- **Feature branches** for all development
- **Pull request reviews** with automated checks
- **Conventional commits** for changelog generation
- **Semantic versioning** for releases
- **Automated testing** on all commits

### Code Quality
- **ESLint** and **Prettier** for frontend code formatting
- **Black** and **isort** for Python code formatting
- **TypeScript** strict mode for type safety
- **MyPy** for Python type checking
- **Pre-commit hooks** for automated quality checks

### Documentation
- **API documentation** with OpenAPI/Swagger
- **Component documentation** with Storybook
- **Architecture documentation** with diagrams
- **User guides** and tutorials
- **Developer onboarding** documentation

## 🎯 Success Metrics

### Business Metrics
- **50-70% reduction** in time to hire
- **2-3x increase** in qualified pipeline
- **>60% reduction** in recruiter admin time
- **Improved quality** of hire with evidence-based decisions

### Technical Metrics
- **P95 API latency** < 300ms
- **99.9% uptime** with graceful degradation
- **>90% test coverage** for critical paths
- **Lighthouse score** ≥ 95 for performance
- **Zero security** vulnerabilities in production

### User Experience Metrics
- **< 10 minutes** to qualified shortlist per requisition
- **< 2 hours** median scheduling latency
- **+20% conversion** improvement within 90 days
- **>95% user satisfaction** score

## 🔄 AI Collaboration Rules

### Response Format
- Use **markdown** for all responses
- Include **code blocks** with proper syntax highlighting
- Add **comments** explaining complex logic
- Provide **examples** for implementation guidance
- Include **TODO markers** for future improvements

### Code Standards
- Follow **established patterns** in the codebase
- Use **TypeScript interfaces** for all data structures
- Implement **proper error handling** with user-friendly messages
- Add **comprehensive tests** for new features
- Maintain **accessibility** standards throughout

### Implementation Guidelines
- **Start with scaffolding** and basic functionality
- **Add AI features** incrementally with proper testing
- **Implement security** measures from the beginning
- **Optimize performance** as features are developed
- **Document decisions** and architectural choices

---

**Remember**: This is an enterprise-grade recruitment platform that must be reliable, secure, and compliant. Every feature should prioritize user experience, data protection, and business value while maintaining the highest standards of code quality and performance.
