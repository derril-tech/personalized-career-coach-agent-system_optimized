# API Specification - TalentFlux Platform

This document provides comprehensive API documentation for the TalentFlux recruitment platform, including endpoints, request/response schemas, authentication, and error handling.

## 🔐 Authentication

### JWT Token Authentication

All API endpoints require authentication via JWT tokens, except for public endpoints.

**Headers Required**:
```
Authorization: Bearer <access_token>
Content-Type: application/json
```

**Token Refresh**:
```
POST /api/v1/auth/refresh
Authorization: Bearer <refresh_token>
```

## 📋 API Endpoints

### Authentication Endpoints

#### `POST /api/v1/auth/login`
**Purpose**: Authenticate user and return access/refresh tokens

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

**Response**:
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "recruiter",
    "organization_id": "org_456"
  }
}
```

#### `POST /api/v1/auth/refresh`
**Purpose**: Refresh access token using refresh token

**Request Body**:
```json
{
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

#### `POST /api/v1/auth/logout`
**Purpose**: Invalidate refresh token

**Request Body**:
```json
{
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

### Organization Management

#### `GET /api/v1/organizations`
**Purpose**: Get user's organizations

**Response**:
```json
{
  "organizations": [
    {
      "id": "org_123",
      "name": "TechCorp Inc",
      "domain": "techcorp.com",
      "plan": "enterprise",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### `POST /api/v1/organizations`
**Purpose**: Create new organization

**Request Body**:
```json
{
  "name": "New Company",
  "domain": "newcompany.com",
  "plan": "pro"
}
```

### Workspace Management

#### `GET /api/v1/workspaces`
**Purpose**: Get workspaces for organization

**Response**:
```json
{
  "workspaces": [
    {
      "id": "ws_123",
      "name": "Engineering Team",
      "organization_id": "org_456",
      "settings": {
        "default_stages": ["new", "screening", "interview", "offer"],
        "ai_enabled": true
      }
    }
  ]
}
```

### Candidate Management

#### `GET /api/v1/candidates`
**Purpose**: Get candidates with filtering and pagination

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)
- `search`: Search term for name, email, or skills
- `status`: Filter by status (new, screening, interview, offer, hired, rejected)
- `location`: Filter by location
- `skills`: Filter by skills (comma-separated)
- `experience_min`: Minimum years of experience
- `experience_max`: Maximum years of experience

**Response**:
```json
{
  "candidates": [
    {
      "id": "candidate_123",
      "pii_ref": "pii_456",
      "headline": "Senior Software Engineer",
      "location": "San Francisco, CA",
      "status": "screening",
      "fit_score": 85.5,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-16T14:20:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

#### `POST /api/v1/candidates`
**Purpose**: Create new candidate

**Request Body**:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123",
  "location": "San Francisco, CA",
  "headline": "Senior Software Engineer",
  "resume": "base64_encoded_resume_content",
  "resume_filename": "john_doe_resume.pdf",
  "skills": ["Python", "React", "AWS"],
  "experience_years": 5,
  "consent_given": true
}
```

#### `GET /api/v1/candidates/{candidate_id}`
**Purpose**: Get detailed candidate information

**Response**:
```json
{
  "id": "candidate_123",
  "pii_ref": "pii_456",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123",
  "location": "San Francisco, CA",
  "headline": "Senior Software Engineer",
  "status": "screening",
  "fit_score": 85.5,
  "skills": [
    {
      "name": "Python",
      "level": "expert",
      "years": 5
    }
  ],
  "resume": {
    "id": "resume_789",
    "filename": "john_doe_resume.pdf",
    "uploaded_at": "2024-01-15T10:30:00Z",
    "parsed_data": {
      "education": [...],
      "experience": [...],
      "skills": [...]
    }
  },
  "applications": [
    {
      "id": "app_123",
      "requisition_id": "req_456",
      "stage": "screening",
      "fit_score": 85.5,
      "evidence": [
        {
          "type": "skill_match",
          "description": "Strong Python experience (5 years)",
          "confidence": 0.95
        }
      ]
    }
  ],
  "consent": {
    "given": true,
    "given_at": "2024-01-15T10:30:00Z",
    "purposes": ["recruitment", "matching"],
    "expires_at": "2025-01-15T10:30:00Z"
  },
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-16T14:20:00Z"
}
```

#### `PUT /api/v1/candidates/{candidate_id}`
**Purpose**: Update candidate information

#### `DELETE /api/v1/candidates/{candidate_id}`
**Purpose**: Delete candidate (soft delete)

### Requisition Management

#### `GET /api/v1/requisitions`
**Purpose**: Get requisitions with filtering

**Query Parameters**:
- `page`: Page number
- `limit`: Items per page
- `status`: Filter by status (draft, active, closed, filled)
- `department`: Filter by department
- `location`: Filter by location

**Response**:
```json
{
  "requisitions": [
    {
      "id": "req_123",
      "title": "Senior Software Engineer",
      "department": "Engineering",
      "location": "San Francisco, CA",
      "status": "active",
      "hiring_manager_id": "user_456",
      "candidate_count": 25,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}
```

#### `POST /api/v1/requisitions`
**Purpose**: Create new requisition

**Request Body**:
```json
{
  "title": "Senior Software Engineer",
  "department": "Engineering",
  "location": "San Francisco, CA",
  "description": "We are looking for a senior software engineer...",
  "requirements": [
    "5+ years of software development experience",
    "Strong knowledge of Python and React",
    "Experience with cloud platforms (AWS/GCP)"
  ],
  "skills": ["Python", "React", "AWS", "Docker"],
  "compensation_range": {
    "min": 120000,
    "max": 180000,
    "currency": "USD"
  },
  "hiring_manager_id": "user_456",
  "stages": ["new", "screening", "interview", "offer"]
}
```

#### `GET /api/v1/requisitions/{requisition_id}`
**Purpose**: Get detailed requisition information

#### `PUT /api/v1/requisitions/{requisition_id}`
**Purpose**: Update requisition

#### `DELETE /api/v1/requisitions/{requisition_id}`
**Purpose**: Delete requisition

### AI Matching and Screening

#### `POST /api/v1/match/{requisition_id}`
**Purpose**: Get AI-powered candidate matches for a requisition

**Request Body**:
```json
{
  "candidate_ids": ["candidate_123", "candidate_456"],
  "include_evidence": true,
  "min_score": 70.0
}
```

**Response**:
```json
{
  "matches": [
    {
      "candidate_id": "candidate_123",
      "fit_score": 85.5,
      "evidence": [
        {
          "type": "skill_match",
          "description": "Strong Python experience (5 years)",
          "confidence": 0.95,
          "source": "resume"
        },
        {
          "type": "experience_match",
          "description": "Relevant industry experience in fintech",
          "confidence": 0.87,
          "source": "resume"
        }
      ],
      "recommendations": [
        "Schedule technical interview",
        "Ask about cloud architecture experience"
      ]
    }
  ],
  "metadata": {
    "total_candidates": 25,
    "matched_candidates": 8,
    "processing_time_ms": 1250
  }
}
```

#### `POST /api/v1/screen/{candidate_id}`
**Purpose**: Screen candidate with AI

**Request Body**:
```json
{
  "requisition_id": "req_123",
  "screening_questions": [
    "What is your experience with Python?",
    "Describe a challenging project you worked on"
  ]
}
```

**Response**:
```json
{
  "screening_id": "screen_123",
  "candidate_id": "candidate_456",
  "requisition_id": "req_123",
  "status": "completed",
  "score": 82.5,
  "answers": [
    {
      "question": "What is your experience with Python?",
      "answer": "I have 5 years of experience...",
      "ai_analysis": {
        "sentiment": "positive",
        "confidence": 0.92,
        "key_points": ["5 years experience", "multiple projects"]
      }
    }
  ],
  "recommendation": "proceed_to_interview",
  "created_at": "2024-01-15T10:30:00Z"
}
```

### Interview Management

#### `GET /api/v1/interviews`
**Purpose**: Get interviews with filtering

**Query Parameters**:
- `candidate_id`: Filter by candidate
- `requisition_id`: Filter by requisition
- `status`: Filter by status (scheduled, completed, cancelled)
- `date_from`: Filter by date range
- `date_to`: Filter by date range

#### `POST /api/v1/interviews/schedule`
**Purpose**: Schedule interview

**Request Body**:
```json
{
  "candidate_id": "candidate_123",
  "requisition_id": "req_456",
  "interviewers": ["user_789", "user_101"],
  "scheduled_at": "2024-01-20T14:00:00Z",
  "duration_minutes": 60,
  "type": "technical",
  "location": "Zoom Meeting",
  "notes": "Focus on system design and coding"
}
```

#### `POST /api/v1/interviews/{interview_id}/feedback`
**Purpose**: Submit interview feedback

**Request Body**:
```json
{
  "interviewer_id": "user_789",
  "overall_score": 8.5,
  "technical_score": 9.0,
  "communication_score": 8.0,
  "culture_fit_score": 8.5,
  "strengths": ["Strong technical skills", "Good problem solving"],
  "weaknesses": ["Could improve communication"],
  "recommendation": "hire",
  "detailed_feedback": "Candidate demonstrated excellent...",
  "questions_asked": [
    {
      "question": "Design a scalable system",
      "answer_quality": "excellent",
      "notes": "Provided comprehensive solution"
    }
  ]
}
```

### Offer Management

#### `GET /api/v1/offers`
**Purpose**: Get offers with filtering

#### `POST /api/v1/offers`
**Purpose**: Create offer

**Request Body**:
```json
{
  "candidate_id": "candidate_123",
  "requisition_id": "req_456",
  "compensation": {
    "base_salary": 150000,
    "currency": "USD",
    "equity": 10000,
    "bonus_percentage": 15
  },
  "start_date": "2024-03-01",
  "benefits": ["health_insurance", "401k", "unlimited_pto"],
  "notes": "Welcome to the team!"
}
```

#### `POST /api/v1/offers/{offer_id}/approve`
**Purpose**: Approve offer

#### `POST /api/v1/offers/{offer_id}/reject`
**Purpose**: Reject offer

### Reports and Analytics

#### `GET /api/v1/reports/funnel`
**Purpose**: Get recruitment funnel analytics

**Query Parameters**:
- `requisition_id`: Filter by requisition
- `date_from`: Start date
- `date_to`: End date

**Response**:
```json
{
  "funnel": {
    "total_candidates": 150,
    "screening": 120,
    "interview": 45,
    "offer": 12,
    "hired": 8
  },
  "conversion_rates": {
    "screening_to_interview": 37.5,
    "interview_to_offer": 26.7,
    "offer_to_hire": 66.7
  },
  "time_to_hire": {
    "average_days": 28.5,
    "median_days": 24
  }
}
```

#### `GET /api/v1/reports/diversity`
**Purpose**: Get diversity and inclusion analytics

**Response**:
```json
{
  "diversity_metrics": {
    "gender_distribution": {
      "male": 45.2,
      "female": 42.1,
      "non_binary": 2.3,
      "prefer_not_to_say": 10.4
    },
    "ethnicity_distribution": {
      "white": 35.2,
      "asian": 28.1,
      "hispanic": 15.3,
      "black": 12.4,
      "other": 9.0
    }
  },
  "adverse_impact": {
    "gender": 0.85,
    "ethnicity": 0.92
  }
}
```

## 🔄 WebSocket Endpoints

### `/ws/pipeline/{workspace_id}`
**Purpose**: Real-time pipeline updates

**Events**:
- `candidate_moved`: When candidate moves between stages
- `new_candidate`: When new candidate is added
- `interview_scheduled`: When interview is scheduled
- `offer_sent`: When offer is sent

### `/ws/chat/{workspace_id}`
**Purpose**: Real-time chat for AI assistance

**Events**:
- `message`: Chat message
- `typing`: Typing indicator
- `response`: AI response

## 📊 Data Models

### Candidate Model
```typescript
interface Candidate {
  id: string;
  pii_ref: string; // Reference to PII vault
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location: string;
  headline: string;
  status: CandidateStatus;
  fit_score?: number;
  skills: Skill[];
  resume?: Resume;
  applications: Application[];
  consent: Consent;
  created_at: string;
  updated_at: string;
}

enum CandidateStatus {
  NEW = "new",
  SCREENING = "screening",
  INTERVIEW = "interview",
  OFFER = "offer",
  HIRED = "hired",
  REJECTED = "rejected"
}
```

### Requisition Model
```typescript
interface Requisition {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
  skills: string[];
  compensation_range: CompensationRange;
  hiring_manager_id: string;
  stages: string[];
  status: RequisitionStatus;
  created_at: string;
  updated_at: string;
}

enum RequisitionStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  CLOSED = "closed",
  FILLED = "filled"
}
```

### Application Model
```typescript
interface Application {
  id: string;
  candidate_id: string;
  requisition_id: string;
  stage: string;
  fit_score: number;
  evidence: Evidence[];
  created_at: string;
  updated_at: string;
}

interface Evidence {
  type: string;
  description: string;
  confidence: number;
  source: string;
}
```

## ⚠️ Error Handling

### Error Response Format
```json
{
  "error": {
    "type": "validation_error",
    "message": "Request validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ],
    "status_code": 422
  }
}
```

### Common Error Types
- `validation_error`: Request validation failed
- `authentication_error`: Invalid or missing authentication
- `authorization_error`: Insufficient permissions
- `not_found_error`: Resource not found
- `conflict_error`: Resource conflict
- `rate_limit_error`: Too many requests
- `internal_error`: Server error

### HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `409`: Conflict
- `422`: Unprocessable Entity
- `429`: Too Many Requests
- `500`: Internal Server Error

## 🔒 Security

### Rate Limiting
- Authentication endpoints: 5 requests per minute
- API endpoints: 100 requests per minute per user
- File uploads: 10 requests per minute per user

### CORS Configuration
```javascript
{
  "allow_origins": ["https://app.talentflux.com", "http://localhost:3000"],
  "allow_credentials": true,
  "allow_methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  "allow_headers": ["*"]
}
```

### Security Headers
- `X-Frame-Options`: DENY
- `X-Content-Type-Options`: nosniff
- `X-XSS-Protection`: 1; mode=block
- `Strict-Transport-Security`: max-age=31536000; includeSubDomains
- `Content-Security-Policy`: default-src 'self'

## 📈 Performance

### Response Time Targets
- Health check: < 100ms
- Simple CRUD operations: < 200ms
- Search operations: < 500ms
- AI matching: < 2000ms
- File uploads: < 5000ms

### Caching Strategy
- GET requests: 5 minutes (Redis)
- Search results: 2 minutes (Redis)
- User sessions: 24 hours (Redis)
- Static assets: 1 hour (CDN)

This API specification provides a comprehensive foundation for building the TalentFlux recruitment platform with proper authentication, data models, error handling, and performance considerations.
