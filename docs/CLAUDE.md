# CLAUDE.md - AI Collaboration Guidelines

## 🎯 Project Overview

**TalentFlux** is an intelligent HR recruitment platform that automates the entire hiring process from sourcing to offer. Built with Next.js 14 + FastAPI + PostgreSQL/pgvector with LangGraph orchestrated agents using OpenAI + Claude.

**Mission**: Find, match, and hire top talent 3× faster—with auditable AI you can trust.

**Target Users**: HR professionals, recruiters, hiring managers, and talent acquisition teams at companies of all sizes.

## 📁 Repository Structure & File Boundaries

### ✅ Editable Files (Claude can modify)
- `apps/web/src/app/` - Next.js pages and routes
- `apps/web/src/components/` - React components
- `apps/web/src/hooks/` - Custom React hooks
- `apps/web/src/lib/` - Utilities and configurations
- `apps/web/src/stores/` - Zustand state management
- `apps/web/src/types/` - TypeScript type definitions
- `apps/api/talentflux_api/api/` - FastAPI endpoints
- `apps/api/talentflux_api/services/` - Business logic services
- `apps/api/talentflux_api/models/` - SQLAlchemy models
- `apps/api/talentflux_api/schemas/` - Pydantic schemas
- `apps/api/talentflux_api/ai/` - AI and ML services
- `packages/ui/src/` - Shared UI components
- `packages/lib/src/` - Shared utilities and types

### 🔒 Do-Not-Touch Files (Claude cannot modify)
- `package.json` (root) - Monorepo configuration
- `apps/web/package.json` - Frontend dependencies
- `apps/api/pyproject.toml` - Backend dependencies
- `apps/web/next.config.js` - Next.js configuration
- `apps/web/tailwind.config.js` - Tailwind configuration
- `apps/api/talentflux_api/core/config.py` - Application settings
- `docs/` - Documentation files (except TODO updates)
- `.env*` files - Environment variables
- `infra/` - Infrastructure and deployment configs

### 📝 TODO Files (Claude should add TODO markers)
- All component files with `CLAUDE_TASK:` comments
- Service files with implementation tasks
- Model files with database schema tasks
- Test files with testing requirements

## 🔧 Coding Conventions & Standards

### Frontend (TypeScript/React)
```typescript
// Use functional components with TypeScript interfaces
interface ComponentProps {
  title: string;
  onAction?: () => void;
  children?: React.ReactNode;
}

export function Component({ title, onAction, children }: ComponentProps) {
  return (
    <div className="component">
      <h1>{title}</h1>
      {onAction && <button onClick={onAction}>Action</button>}
      {children}
    </div>
  );
}

// Use proper error handling
const { data, error, isLoading } = useQuery({
  queryKey: ['candidates'],
  queryFn: fetchCandidates,
  onError: (error) => {
    toast.error('Failed to load candidates');
    console.error('Query error:', error);
  },
});

// Add comprehensive comments
/**
 * Fetches candidates with filtering and pagination
 * @param filters - Search and filter criteria
 * @param page - Page number for pagination
 * @returns Promise with candidate data and pagination info
 */
```

### Backend (Python/FastAPI)
```python
# Use type hints and docstrings
from typing import List, Optional
from pydantic import BaseModel

class CandidateCreate(BaseModel):
    """Schema for creating a new candidate."""
    first_name: str
    last_name: str
    email: str
    location: str
    headline: str

async def create_candidate(
    candidate_data: CandidateCreate,
    current_user: User
) -> Candidate:
    """
    Create a new candidate with proper validation and error handling.
    
    Args:
        candidate_data: Validated candidate information
        current_user: Authenticated user creating the candidate
        
    Returns:
        Created candidate object
        
    Raises:
        ValidationError: If candidate data is invalid
        DuplicateError: If candidate already exists
    """
    try:
        # Implementation here
        pass
    except Exception as e:
        logger.error(f"Failed to create candidate: {e}")
        raise
```

### AI Integration (LangGraph/LangChain)
```python
# Use structured workflows with proper error handling
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated

class WorkflowState(TypedDict):
    """State for the screening workflow."""
    candidate_id: str
    requisition_id: str
    screening_questions: List[str]
    answers: List[str]
    ai_analysis: Optional[dict]
    recommendation: Optional[str]

def screening_workflow() -> StateGraph:
    """Create the candidate screening workflow."""
    workflow = StateGraph(WorkflowState)
    
    # Add nodes with proper error handling
    workflow.add_node("extract_skills", extract_skills_node)
    workflow.add_node("generate_questions", generate_questions_node)
    workflow.add_node("analyze_answers", analyze_answers_node)
    
    # Define edges with conditional logic
    workflow.add_edge("extract_skills", "generate_questions")
    workflow.add_edge("generate_questions", "analyze_answers")
    workflow.add_edge("analyze_answers", END)
    
    return workflow.compile()
```

## 🎨 Design System & UX Guidelines

### Color Usage
- **Primary Blue (#0ea5e9)**: Main actions, buttons, links
- **Success Green (#22c55e)**: Positive actions, success states
- **Warning Yellow (#f59e0b)**: Warnings, attention states
- **Error Red (#ef4444)**: Errors, destructive actions
- **Neutral Grays**: Backgrounds, text, borders

### Component Patterns
```typescript
// Use consistent component structure
export function Card({ title, children, actions }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">
        {children}
      </div>
      {actions && (
        <div className="card-footer">
          {actions}
        </div>
      )}
    </div>
  );
}

// Use proper loading states
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className={`spinner spinner-${size}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

### Accessibility Requirements
- All interactive elements must be keyboard accessible
- Use proper ARIA labels and roles
- Maintain color contrast ratios (4.5:1 minimum)
- Support screen readers with semantic HTML
- Provide alternative text for images

## 🔒 Security & Compliance Requirements

### Data Protection
- All PII must be encrypted at rest and in transit
- Use tokenization for sensitive data display
- Implement proper consent management
- Add audit logging for all data access
- Follow GDPR/CCPA compliance requirements

### Authentication & Authorization
```typescript
// Use proper authentication checks
export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  
  if (isLoading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
  if (requiredRole && user.role !== requiredRole) {
    return <AccessDenied />;
  }
  
  return <>{children}</>;
}
```

### Input Validation
```python
# Use Pydantic for comprehensive validation
from pydantic import BaseModel, EmailStr, validator
from typing import List

class CandidateCreate(BaseModel):
    email: EmailStr
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    skills: List[str] = Field(default_factory=list, max_items=50)
    
    @validator('first_name', 'last_name')
    def validate_name(cls, v):
        if not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()
```

## 📊 Performance & Scalability Guidelines

### Frontend Performance
- Use React.memo for expensive components
- Implement virtual scrolling for large lists
- Lazy load images and components
- Optimize bundle size with code splitting
- Use React Query for efficient data fetching

### Backend Performance
- Use async/await for all I/O operations
- Implement proper database indexing
- Use Redis caching for frequently accessed data
- Add database connection pooling
- Implement rate limiting on all endpoints

### AI Performance
- Cache embedding results
- Use streaming responses for long operations
- Implement proper error handling and retries
- Monitor model performance and costs
- Use batch processing for large datasets

## 🧪 Testing Requirements

### Frontend Testing
```typescript
// Unit tests for components
import { render, screen, fireEvent } from '@testing-library/react';
import { CandidateCard } from './CandidateCard';

describe('CandidateCard', () => {
  it('displays candidate information correctly', () => {
    const candidate = mockCandidate();
    render(<CandidateCard candidate={candidate} />);
    
    expect(screen.getByText(candidate.name)).toBeInTheDocument();
    expect(screen.getByText(candidate.headline)).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const onSelect = jest.fn();
    render(<CandidateCard candidate={mockCandidate()} onSelect={onSelect} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalled();
  });
});
```

### Backend Testing
```python
# Integration tests for API endpoints
import pytest
from fastapi.testclient import TestClient
from talentflux_api.main import app

client = TestClient(app)

def test_create_candidate():
    """Test candidate creation endpoint."""
    candidate_data = {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "location": "San Francisco, CA",
        "headline": "Senior Software Engineer"
    }
    
    response = client.post("/api/v1/candidates", json=candidate_data)
    assert response.status_code == 201
    assert response.json()["first_name"] == "John"
```

## 🔄 AI Collaboration Rules

### Response Format
- Use **markdown** for all responses
- Include **code blocks** with proper syntax highlighting
- Add **comments** explaining complex logic
- Provide **examples** for implementation guidance
- Include **TODO markers** for future improvements

### Code Quality Standards
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

## 📋 Development Workflow

### Git Workflow
- Create feature branches for all development
- Use conventional commits (feat:, fix:, docs:, etc.)
- Submit pull requests with comprehensive descriptions
- Ensure all tests pass before merging
- Update documentation as needed

### Code Review Process
- Review for security vulnerabilities
- Check for performance implications
- Verify accessibility compliance
- Ensure proper error handling
- Validate test coverage

### Deployment Process
- Frontend: Automatic deployment to Vercel
- Backend: Manual deployment to Render
- Database: Alembic migrations with rollback capability
- Environment: Separate configs for dev/staging/prod

## 🎯 Success Criteria

### Technical Metrics
- **P95 API latency** < 300ms
- **99.9% uptime** with graceful degradation
- **>90% test coverage** for critical paths
- **Lighthouse score** ≥ 95 for performance
- **Zero security** vulnerabilities in production

### Business Metrics
- **50-70% reduction** in time to hire
- **2-3x increase** in qualified pipeline
- **>60% reduction** in recruiter admin time
- **Improved quality** of hire with evidence-based decisions

### User Experience Metrics
- **< 10 minutes** to qualified shortlist per requisition
- **< 2 hours** median scheduling latency
- **+20% conversion** improvement within 90 days
- **>95% user satisfaction** score

## 🆘 Getting Help

### Documentation Resources
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Common Patterns
- Check existing components for similar implementations
- Follow established naming conventions
- Use the design system components
- Implement proper error boundaries
- Add comprehensive logging

### When to Ask for Help
- Security concerns or compliance questions
- Performance optimization challenges
- Complex AI workflow design
- Architecture decisions
- Integration issues between frontend and backend

## ✅ Project Completion Status

### Infrastructure (100% Complete)
- ✅ Monorepo architecture with workspace configuration
- ✅ Frontend: Next.js 14 + TypeScript + Tailwind CSS
- ✅ Backend: FastAPI + SQLAlchemy + PostgreSQL + Redis
- ✅ AI Integration: LangGraph + LangChain + OpenAI + Claude
- ✅ Development Environment: Cross-platform scripts
- ✅ Documentation: Comprehensive guides and specifications

### Ready for Implementation (80% Foundation Complete)
- 🎯 **Frontend Components**: Basic structure ready, needs feature implementation
- 🎯 **Backend Services**: Core setup complete, needs business logic
- 🎯 **AI Workflows**: Framework ready, needs specific agent implementations
- 🎯 **Database Models**: Schema defined, needs implementation
- 🎯 **API Endpoints**: Structure ready, needs endpoint implementation

### Next Development Phase
The infrastructure is now **production-ready** and optimized for AI-assisted development. The remaining 20% consists of:

1. **Feature Implementation**: Building out specific components and services
2. **AI Agent Development**: Creating specialized LangGraph workflows
3. **Integration Testing**: End-to-end testing of all systems
4. **Performance Optimization**: Fine-tuning for production scale
5. **Security Hardening**: Final security audits and compliance checks

---

**🎉 PROJECT STATUS: INFRASTRUCTURE COMPLETE - READY FOR FEATURE DEVELOPMENT**

**Remember**: This is an enterprise-grade recruitment platform that must be reliable, secure, and compliant. Every feature should prioritize user experience, data protection, and business value while maintaining the highest standards of code quality and performance.

The foundation is solid, well-documented, and ready for efficient AI-assisted development! 🚀




