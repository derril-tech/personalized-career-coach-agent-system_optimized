// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organization_id: string;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export enum UserRole {
  OWNER = "owner",
  ADMIN = "admin",
  RECRUITER = "recruiter",
  HIRING_MANAGER = "hiring_manager",
  INTERVIEWER = "interviewer",
  ANALYST = "analyst",
}

// Organization and Workspace Types
export interface Organization {
  id: string;
  name: string;
  domain: string;
  plan: PlanType;
  created_at: string;
  updated_at: string;
}

export enum PlanType {
  FREE = "free",
  PRO = "pro",
  ENTERPRISE = "enterprise",
}

export interface Workspace {
  id: string;
  name: string;
  organization_id: string;
  settings: WorkspaceSettings;
  created_at: string;
  updated_at: string;
}

export interface WorkspaceSettings {
  default_stages: string[];
  ai_enabled: boolean;
  features: Record<string, boolean>;
}

// Candidate Types
export interface Candidate {
  id: string;
  pii_ref: string;
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

export enum CandidateStatus {
  NEW = "new",
  SCREENING = "screening",
  INTERVIEW = "interview",
  OFFER = "offer",
  HIRED = "hired",
  REJECTED = "rejected",
}

export interface Skill {
  name: string;
  level: SkillLevel;
  years: number;
}

export enum SkillLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  EXPERT = "expert",
}

export interface Resume {
  id: string;
  filename: string;
  uploaded_at: string;
  parsed_data: ResumeData;
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date?: string;
}

export interface Experience {
  company: string;
  title: string;
  start_date: string;
  end_date?: string;
  description: string;
}

// Requisition Types
export interface Requisition {
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

export enum RequisitionStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  CLOSED = "closed",
  FILLED = "filled",
}

export interface CompensationRange {
  min: number;
  max: number;
  currency: string;
}

// Application Types
export interface Application {
  id: string;
  candidate_id: string;
  requisition_id: string;
  stage: string;
  fit_score: number;
  evidence: Evidence[];
  created_at: string;
  updated_at: string;
}

export interface Evidence {
  type: string;
  description: string;
  confidence: number;
  source: string;
}

// Interview Types
export interface Interview {
  id: string;
  candidate_id: string;
  requisition_id: string;
  interviewers: string[];
  scheduled_at: string;
  duration_minutes: number;
  type: InterviewType;
  location: string;
  notes?: string;
  status: InterviewStatus;
  feedback?: InterviewFeedback[];
  created_at: string;
  updated_at: string;
}

export enum InterviewType {
  PHONE = "phone",
  VIDEO = "video",
  ONSITE = "onsite",
  TECHNICAL = "technical",
  BEHAVIORAL = "behavioral",
}

export enum InterviewStatus {
  SCHEDULED = "scheduled",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  NO_SHOW = "no_show",
}

export interface InterviewFeedback {
  interviewer_id: string;
  overall_score: number;
  technical_score: number;
  communication_score: number;
  culture_fit_score: number;
  strengths: string[];
  weaknesses: string[];
  recommendation: Recommendation;
  detailed_feedback: string;
  questions_asked: QuestionFeedback[];
}

export enum Recommendation {
  HIRE = "hire",
  NO_HIRE = "no_hire",
  MAYBE = "maybe",
}

export interface QuestionFeedback {
  question: string;
  answer_quality: string;
  notes: string;
}

// Offer Types
export interface Offer {
  id: string;
  candidate_id: string;
  requisition_id: string;
  compensation: Compensation;
  start_date: string;
  benefits: string[];
  notes?: string;
  status: OfferStatus;
  approvals: Approval[];
  created_at: string;
  updated_at: string;
}

export interface Compensation {
  base_salary: number;
  currency: string;
  equity?: number;
  bonus_percentage?: number;
}

export enum OfferStatus {
  DRAFT = "draft",
  PENDING_APPROVAL = "pending_approval",
  APPROVED = "approved",
  SENT = "sent",
  ACCEPTED = "accepted",
  DECLINED = "declined",
  EXPIRED = "expired",
}

export interface Approval {
  approver_id: string;
  status: ApprovalStatus;
  comments?: string;
  approved_at?: string;
}

export enum ApprovalStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

// Consent and Compliance Types
export interface Consent {
  given: boolean;
  given_at?: string;
  purposes: string[];
  expires_at?: string;
}

// AI and Matching Types
export interface AIMatch {
  candidate_id: string;
  fit_score: number;
  evidence: Evidence[];
  recommendations: string[];
}

export interface ScreeningResult {
  screening_id: string;
  candidate_id: string;
  requisition_id: string;
  status: ScreeningStatus;
  score: number;
  answers: ScreeningAnswer[];
  recommendation: string;
  created_at: string;
}

export enum ScreeningStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  FAILED = "failed",
}

export interface ScreeningAnswer {
  question: string;
  answer: string;
  ai_analysis: AIAnalysis;
}

export interface AIAnalysis {
  sentiment: string;
  confidence: number;
  key_points: string[];
}

// Analytics and Reporting Types
export interface FunnelAnalytics {
  funnel: {
    total_candidates: number;
    screening: number;
    interview: number;
    offer: number;
    hired: number;
  };
  conversion_rates: {
    screening_to_interview: number;
    interview_to_offer: number;
    offer_to_hire: number;
  };
  time_to_hire: {
    average_days: number;
    median_days: number;
  };
}

export interface DiversityAnalytics {
  diversity_metrics: {
    gender_distribution: Record<string, number>;
    ethnicity_distribution: Record<string, number>;
  };
  adverse_impact: {
    gender: number;
    ethnicity: number;
  };
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: "success" | "error";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ApiError {
  type: string;
  message: string;
  details?: any;
  status_code: number;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  name: string;
  organization_name: string;
  organization_domain: string;
}

export interface CandidateForm {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location: string;
  headline: string;
  resume?: File;
  skills: string[];
  experience_years: number;
  consent_given: boolean;
}

export interface RequisitionForm {
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
  skills: string[];
  compensation_min: number;
  compensation_max: number;
  hiring_manager_id: string;
}

// UI State Types
export interface UIState {
  sidebarOpen: boolean;
  theme: "light" | "dark";
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// WebSocket Types
export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: string;
}

export interface PipelineUpdate {
  candidate_id: string;
  old_stage: string;
  new_stage: string;
  updated_by: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
  citations?: string[];
}
