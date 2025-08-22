# THE PROJECT BRIEF #

# Project Name #
personalized-career-coach-agent-system

# Product Description / Presentation #



TalentFlux — Intelligent HR Recruitment Platform
Tagline: Find, match, and hire top talent 3× faster—with auditable AI you can trust.
________________________________________
1) Product Description / Presentation
Executive Summary
TalentFlux is an end to end, AI native recruitment OS that automates sourcing, screening, matching, interview scheduling, and offer orchestration. It blends RAG-grounded candidate intelligence, structured skills graphs, and agentic workflows to deliver explainable shortlists, bias aware decisions, and hands off coordination across ATS, calendars, email, and chat. Built on Next.js 14 + FastAPI + PostgreSQL/pgvector with LangGraph orchestrated agents using OpenAI + Claude, it achieves enterprise grade reliability and sub 2s perceived latency with streaming.
Business Outcomes
•	Reduce time to hire by 50–70%.
•	Increase qualified pipeline by 2–3× via multi channel sourcing.
•	Cut recruiter admin time by >60% through automation.
•	Improve quality of hire with skills/role fit scores and evidence linked recommendations.
________________________________________
Core Capabilities
•	AI Sourcing Copilot: Multi channel talent discovery (job boards, LinkedIn exports, resumes, referrals). De duplication, enrichment, and GDPR aware consent tracking.
•	Adaptive Screening: Dynamic question sets per role. Extracts entities (skills, tenure, education) from resumes and free text answers; aligns to a Skills & Role Ontology.
•	Explainable Matching: Hybrid ranker (BM25 + embeddings + structured rules) yields FitScore with traceable evidence (citations to resume bullets, interview notes, portfolio links).
•	Interview OS: Auto scheduling across time zones, interviewer load balancing, prep packs, structured feedback forms, panel debrief summaries with disagreement detection.
•	Offer & Approval Flow: Compensation bands validation, equity ranges, approver routing, redline assistance, background check hooks.
•	Talent CRM & Nurture: Segments, campaigns, and drip flows with performance tracking and unsubscribe/compliance controls.
•	Diversity & Bias Controls: Masked review modes, adverse impact monitoring, calibrated scorecards.
•	Compliance & Auditability: Data retention policies, consent ledger, decision logs, and exportable audit trails.
•	Admin & Observability: SLAs, usage metering, cost controls, model gating, and feature flags.
________________________________________
Functional Modules (User Journeys)
1.	Intake → Requisition Builder: JD composer with templated competencies and interview plan.
2.	Sourcing → Pipeline: Bulk import, enrichment, dedupe, tagging, GDPR capture.
3.	Screening → Shortlist: Auto screen + knockout/qualifiers, recruiter triage, FitScore explanations.
4.	Interview → Decision: Scheduling, structured feedback, debrief notes, decision registry with rationale.
5.	Offer → Hire: Compensation checks, approvals, e sign, background checks.
6.	Nurture → Talent Pools: Campaigns, re engagement, silver medalist resurfacing.
________________________________________
Non Functional Requirements
•	Performance: P95 API < 300ms (cache hit), chat streaming TTFB < 500ms.
•	Scale: 10,000+ concurrent HR users, millions of candidate profiles.
•	Reliability: 99.9% uptime; graceful degradation to search only mode if LLMs unavailable.
•	Security: SSO (SAML/OIDC), RBAC, row level security, encryption at rest/in transit, secrets vault.
•	Accessibility: WCAG 2.1 AA; keyboard first flows; reduced motion.
________________________________________
Frontend (Next.js 14 + React 18 + TypeScript + Tailwind)
•	App Router with server actions; route groups for Org/Workspace/Role.
•	Design System: Tailwind tokens, dark/light themes, HR friendly neutral palette with accent options.
•	Key Screens:
o	Talent Pipeline board (Kanban + powerful filters, saved views).
o	Candidate 360 (resume, transcripts, artifacts, timeline, consent).
o	Requisition workspace (JD, competencies, interview plan builder).
o	Interview OS (calendar grid, load/band checks, structured scorecards).
o	Reports & DEI dashboards (adverse impact, funnel conversion, SLAs).
o	Admin: model policies, feature flags, retention windows.
•	State & Data: React Query for server cache; Zustand/Context for UI state.
•	Realtime UX: WebSocket updates for pipeline moves, scheduling, chat streaming.
•	Error UX: Retry toasts, offline banner, optimistic updates with rollbacks.
________________________________________
Backend (FastAPI + Python 3.11 + Async SQLAlchemy 2.0)
•	Auth & Multi Tenancy: JWT (access/refresh), SSO (SAML/OIDC), org/workspace scoping, RBAC (owner/admin/recruiter/hiring manager/interviewer/analyst).
•	Data Services:
o	Candidate store (profiles, resumes, artifacts, consent).
o	Requisitions, stages, interviews, scorecards, offers, approvals.
o	Events bus (webhooks into ATS/boards/calendars/Slack/Teams).
•	Integrations (adapters pattern): Greenhouse/Lever/Workday (ATS), Google/Microsoft Calendar, SendGrid/SES, Cloud storage (S3/GCS), background check vendors.
•	Realtime: WebSockets for job status, scheduling, and chat tokens.
•	Observability: OpenTelemetry traces, Prometheus metrics, structured logs.
________________________________________
AI Orchestration & Retrieval
•	Chosen Stack: LangGraph for deterministic, inspectable stateful workflows (screen → match → schedule → notify), with LangChain tools/connectors and a RAG layer over HR knowledge and candidate corpora.
•	Models: OpenAI (GPT 4o family) for synthesis/structured extraction; Claude for long context reasoning and safety critical summaries. Failover + cost caps.
•	RAG Sources: Resumes, interviews, emails (opt in), JD library, competency frameworks, policy docs.
•	Indexing: pgvector (cosine), hybrid retrieval (BM25 + dense), reranker optional. Entity/skill graph maintained in Postgres tables.
•	Guardrails: Retrieval required for decisions; cite or refuse; PII scrubbing; explicit bias checks with counterfactual prompts.
Skills & Role Ontology
•	Entities: Skill(name, level, evidence), Competency, Certification, RoleProfile, Location, CompensationBand.
•	FitScore = weighted blend of: skill coverage, years depth, recency, industry match, must have qualifiers, location/salary feasibility, interview sentiment.
________________________________________
Data Model (selected tables)
•	organizations, workspaces, users
•	candidates(id, pii_ref, headline, location, status)
•	resumes(candidate_id, text, vector, parsed_json)
•	requisitions(id, role_profile_id, hiring_manager_id, stages[])
•	applications(candidate_id, requisition_id, stage, fit_score, evidence[])
•	interviews(id, application_id, panel[], schedule, feedback_json)
•	offers(id, application_id, comp_json, approvals[])
•	events(type, payload_json, created_at)
•	consents(subject_id, purpose, scope, expires_at)
________________________________________
API Surface (sample)
REST
•	POST /auth/login, POST /auth/refresh
•	POST /requisitions, GET /requisitions/{id}
•	POST /candidates/import, GET /candidates/{id}
•	POST /match/{requisition_id} → shortlist + explanations
•	POST /interviews/schedule, POST /interviews/{id}/feedback
•	POST /offers, POST /offers/{id}/approve
•	GET /reports/funnel, GET /reports/diversity
WebSockets
•	/ws/pipeline/{workspace} (stage changes)
•	/ws/chat/{workspace} (RAG streaming)
________________________________________
Security, Privacy & Compliance
•	PII Vault with tokenization; least privilege access; audit logs for every read of PII.
•	Compliance: GDPR/CCPA support (consent, right to be forgotten), EEOC logging, data residency controls.
•	Secret Hygiene: runtime secrets only; rotation/expiry; per tenant model policy gates.
•	Abuse/Bias Controls: masked review mode, adverse impact analytics, calibration prompts.
________________________________________
Deployment & Sizing
•	Frontend: Vercel (ISR, edge cache).
•	Backend: Render autoscaling + worker pool for ingestion and embeddings.
•	DB: Managed Postgres w/ pgvector; PITR; nightly backups.
•	Cache/Queue: Redis (rate limiting, sessions, jobs).
Env Vars (excerpt)
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
SMTP_URL=
STORAGE_BUCKET=
ALLOWED_ORIGINS=
GOOGLE_CAL_CLIENT_ID= / MSFT_GRAPH_CLIENT_ID=
ATS_PROVIDER=greenhouse|lever|workday
________________________________________
Success Metrics
•	Time to qualified shortlist < 10 min per req.
•	Scheduling latency (request→confirmed slot) < 2 hrs median.
•	Conversion uplift: stage to stage + 20% within 90 days.
•	Adverse impact deltas monitored; automated alerts on thresholds.
•	Lighthouse ≥ 95; uptime 99.9%; test coverage >90%.
________________________________________
2) Framework Choice (Why LangGraph + RAG)
LangGraph is selected for agentic workflow reliability (explicit states, edges, and retries) across multi step HR processes (screen → match → schedule → offer). LangChain supplies mature tools (retrievers, loaders, output parsers). RAG ensures grounded, auditable answers and fit explanations anchored to candidate evidence and job requirements. This combo balances transparency, control, and speed at enterprise scale.
________________________________________
3) Dev Team Brief
Goals
Deliver an enterprise ready recruitment platform that automates sourcing→hire while preserving auditability, fairness, and reliability. MVP must ship production deployable with the deliverables listed below.
Deliverables (exact)
1.	Next.js 14 frontend (TS + Tailwind) with dark/light mode.
2.	FastAPI backend (async SQLAlchemy 2.0) with JWT + SSO stubs.
3.	Postgres schema with pgvector; Redis cache/queue.
4.	LangGraph orchestration + LangChain RAG.
5.	Realtime WebSockets.
6.	Cloud file upload (S3/GCS) + email (SES/SendGrid).
7.	CI/CD, tests (unit/integration/e2e), OpenAPI docs.
8.	Vercel + Render deploy configs.
Milestones
•	M1 (Week 1–2): Repo scaffolds, auth, org/tenant model, base screens.
•	M2 (Week 3–4): Candidate import/parsing, RAG index, FitScore v1, shortlist UI.
•	M3 (Week 5–6): Interview OS (scheduling + scorecards), notifications, DEI dashboards v1.
•	M4 (Week 7–8): Offers/approvals, audits/consents, load testing, hardening, GA.
Definition of Done
•	API covered by OpenAPI + 90% tests; P95 latencies met; SLO dashboards; security checks (OWASP, headers, rate limits).
•	RAG outputs show citations; decisions logged with rationale and evidence IDs.
•	A11y checks pass; error budgets defined; on call docs ready.
Coding Standards
•	Type safe endpoints (pydantic/ts interfaces); ruff/black/mypy + eslint/prettier.
•	Pre commit hooks; conventional commits; feature flags for risky features.
Repository Structure (high level)
/apps
  /web (Next.js 14)
  /api (FastAPI)
/packages
  /ui (tailwind components)
  /lib (shared types, clients)
/infra (IaC, deploy configs)
/tests (backend, frontend, e2e)
________________________________________
Critical Prompts for Claude (Tailored for HR)
Prompt 1 — Project Setup & Architecture
"Create the complete project structure and architecture for TalentFlux. Set up Next.js 14 + TypeScript + Tailwind, FastAPI with async SQLAlchemy + JWT and SSO stubs, PostgreSQL schema with pgvector for candidate/doc embeddings, Redis for cache/queues, and deployment for Vercel (frontend) and Render (backend). Include config files, environment templates, CI workflows, and LangGraph/LangChain scaffolding for HR RAG."
Prompt 2 — Core Backend Implementation
"Implement the FastAPI backend for intelligent recruitment: org/tenant model, candidates/requisitions/applications/interviews/offers tables, JWT auth + RBAC, ATS/calendar/email/storage adapters, resume ingestion/parsing, embeddings into pgvector, hybrid retrieval (BM25+dense), FitScore endpoint with explainable evidence, WebSocket streaming, and robust logging/error handling with OpenTelemetry."
Prompt 3 — Frontend Components & UI
"Build the Next.js UI: Pipeline board, Candidate 360, Requisition builder, Interview OS with scheduling and structured scorecards, Reports/DEI dashboards, Admin (models, retention, flags), theming and WCAG 2.1 AA. Add streaming chat for explainable matching and citations."
Prompt 4 — AI Integration & Features
"Wire OpenAI + Claude via LangGraph: workflow nodes for Screen → Match → Schedule → Notify; RAG over resumes/JDs/policies; skill extraction; FitScore with weighted policy; bias checks; masked review mode; summary writers for debriefs and offers. Enforce cite or refuse and PII scrubbing."
Prompt 5 — Deployment & Optimization
"Prepare for production: Vercel + Render configs, pgvector tuning, Redis rate limits, tracing/metrics dashboards, e2e tests (Playwright), load tests, OpenAPI docs, error budgets, and SLOs for p95 latency and recruitment funnel KPIs. Implement backups, PITR, and runbooks."
________________________________________
Roadmap (90 Days)
•	Day 30: GA for single ATS + Google Calendar; shortlist with explainable FitScore; interview scheduling; basic DEI reports.
•	Day 60: Multi ATS connectors; masked review mode; offer workflows; nurture campaigns; BI export.
•	Day 90: On prem indexer option; enterprise SSO/SAML; advanced fairness analytics; skills graph auto learning from outcomes.
________________________________________
One Slide Pitch
What: An AI native recruitment OS delivering explainable shortlists and automated interviews/offers.
Why now: Hiring speed and fairness are board level metrics; legacy ATS is not AI first.
Moat: LangGraph orchestrated, auditable workflows + grounded RAG with evidence linked decisions.
CTA: “Point TalentFlux at your pipeline. Hire better, faster—today.”




FOLLOW THIS 8 STEP PLAN TO PREPARE THE INFRASTRUCTURE
-----------------------------------------------------

# 🚀 Claude Fullstack Repo Prep – Optimized 8 Step Plan

  
The goal: build an extensive frontend + backend scaffold so Claude Code only has to finish ~20% of the work.  
Each step must be **completed ** before advancing  (this is important).
IMPORTANT: YOU ARE BUILDING ONLY THE INFRASTRUCTURE OF THE APPLICATION NOT THE APPLICATION ITSELF !!!. FOLLOW THE STEPS IN NUMERICAL ORDER !!! starting from step 1.
You are doing the groundwork for the application, including setting up the folder structure, configuration files, and any necessary boilerplate code.
IMPORTANT: the checklist in each step has to be checked off 100% before moving to the next step. And always provide comments to your code blocks so that even a non-tech person can understand what you have done.

---

## STEP 1 — Build the Rich Infrastructure
Create a **deep scaffold** for both frontend and backend so Claude code can recognize the architecture immediately.

- Build a **frontend app shell** with routing, placeholder pages, components, and styling setup.  
- Build a **backend app shell** with API structure, health endpoint, and config in place.  
- Include `REPO_MAP.md`, `API_SPEC.md`, and a draft `CLAUDE.md` in the `docs/` folder.  (create the docs folder if it does not  already exist)
- Add **TODO markers and folder-level `_INSTRUCTIONS.md`** files so Claude knows exactly where to add logic.

**Deliverables**
- Frontend app shell with routing, placeholder pages, components, and styling setup  
- Backend app shell with API structure, health endpoint, and config  
- `docs/REPO_MAP.md`, `docs/API_SPEC.md` (stub), and draft `docs/CLAUDE.md`  
- TODO markers + folder-level `_INSTRUCTIONS.md` files  

**Checklist**
- [ ] Frontend scaffold built  
- [ ] Backend scaffold built 
- [ ] Docs folder created with drafts (`REPO_MAP.md`, `API_SPEC.md`, `CLAUDE.md`)  
- [ ] TODO markers and `_INSTRUCTIONS.md` stubs in place  

---

## STEP 2 — Enrich the Scaffold
If the repo looks shallow, enrich it so Claude needs fewer leaps of imagination.  

Add:
- Sample frontend routes and components (`/`, `/about`, `/dashboard`)  
- Domain model stubs and types/interfaces  
- Mock data + fixtures for UI flows  
- README files with quick run instructions for both frontend and backend  
- Instructions embedded in folders (e.g. `CLAUDE_TASK: …`)

**Deliverables**
- Sample routes and pages (`/`, `/about`, `/dashboard`)  
- Domain model stubs and type definitions  
- Mock data and fixtures for UI flows  
- README files for frontend and backend with run instructions  
- Folder-level instructions (`_INSTRUCTIONS.md`)  

**Checklist**
- [ ] At least 2–3 sample routes/pages exist  
- [ ] Domain types/interfaces stubbed out  
- [ ] Mock data + fixtures included  
- [ ] README_FRONTEND.md and README_BACKEND.md added  
- [ ] Each folder has `_INSTRUCTIONS.md` where relevant 

---

## STEP 3 — Audit for Alignment
Check that the scaffold actually matches the product brief, tech specs, and UX /UI goals.
Add additional UI/UX elements (if needed) to make the application visually appealing (and update the design requirements after that)

- Do navigation and pages reflect the product’s main flows?  
- Do API endpoints match the UI needs?  
- Is the chosen tech stack consistent (no unused or conflicting libraries)?  
- Is the UX direction reflected (design tokens, layout, component stubs)?

**Deliverables**
- Alignment review across Product ↔ UI/UX ↔ Tech  
- Identify any missing flows, mismatched libraries, or conflicting instructions  

**Checklist**
- [ ] Navigation structure matches product journeys  
- [ ] Components/pages map to required features  
- [ ] API endpoints cover MVP needs  
- [ ] No contradictory or unused technologies  

---

## STEP 4 — Document the Architecture
Now make the docs **Claude-ready**:

- **REPO_MAP.md**: Full repo breakdown with roles of each folder  
- **API_SPEC.md**: Endpoints, payloads, error handling  
- **CLAUDE.md**: Editing rules, coding conventions, AI collaboration guidelines  

These three files are the **context backbone** Claude will use to understand the repo.

**Deliverables**
- `REPO_MAP.md`: full repo breakdown with folder purposes  
- `API_SPEC.md`: endpoints, models, error conventions  
- `CLAUDE.md`: collaboration rules, editing boundaries  

**Checklist**
- [ ] REPO_MAP.md fully describes structure  
- [ ] API_SPEC.md covers all MVP endpoints and schemas  
- [ ] CLAUDE.md includes project overview, editing rules, examples  

---

## STEP 5 — Improve the Prompt
Enhance the prompt (in `docs/PROMPT_DECLARATION.md`) with details Claude needs:

- FE/BE boundaries and data contracts  
- UX guidelines (states, accessibility, interaction patterns)  
- Performance budgets (bundle size, API latency)  
- Security constraints (auth, rate limits, PII handling)  
- Testing expectations (unit, integration, end-to-end)

**Deliverables**
- FE/BE boundaries and contracts  
- UX guidelines (states, accessibility, patterns)  
- Performance budgets (bundle size, latency targets)  
- Security constraints (auth, PII, rate limits)  
- Testing expectations  

**Checklist**
- [ ] Prompt includes FE/BE division of responsibility  
- [ ] UX principles and design tokens specified  
- [ ] Performance/security/testing requirements added  
- [ ] Prompt is concrete and actionable for Claude  

---

## STEP 6 — Expert Audit of the Prompt
Now do a **meticulous audit** of the one-page prompt declaration.

- Add Frontend Architecture, Backend Architecture, Design requirements, Core Integrations, Success Criteria, Implementation Guidelines and Security & Compliance categories from this Project Brief to the prompt declaration.
- Remove inconsistencies, duplicates, or unused technologies  
- Ensure Tech Stack → Product → Scaffold alignment (no mismatches)  
- Add UI/UX details that make the product visually appealing and usable  
- Double-check frontend and backend folders are ready  
- Confirm editing boundaries are clear (what Claude can/can’t touch)  
- Make the declaration **battle-tested and handoff-ready**

**Deliverables**
- Remove inconsistencies/duplicates  
- Ensure stack ↔ product ↔ scaffold alignment  
- Add UI/UX and accessibility details  
- Clarify file boundaries (editable vs do-not-touch)  
- Confirm prompt uses Claude-friendly syntax  

**Checklist**
- [ ] No unused or contradictory tech remains  
- [ ] UI/UX directives are product-specific and sufficient  
- [ ] Editing boundaries explicitly defined  
- [ ] Prompt syntax uses clear, imperative instructions  

---

## STEP 7 — Bird’s-Eye Repo Review
Do a quick top-level scan for missing pieces:

- All folders contain either code or `_INSTRUCTIONS.md`  
- `.env.example` files exist for both frontend and backend  
- CI/CD config is present and not trivially broken  
- Run scripts (`npm run dev`, `uvicorn …`) work end-to-end  
- No orphan TODOs without clear ownership

**Deliverables**
- Verify all core files exist  
- Confirm environment, CI, and scripts work end-to-end  

**Checklist**
- [ ] Every folder has code or `_INSTRUCTIONS.md`  
- [ ] `.env.example` present for both frontend and backend  
- [ ] CI pipeline triggers and passes basic checks  
- [ ] Dev script (`scripts/dev.sh`) runs both FE and BE  

---

## STEP 8 — Finalize CLAUDE.md
This is where Claude gets its **onboarding pack**. Make sure `CLAUDE.md` includes:

- **Project Overview**: one-paragraph purpose, stack, goals, target users  
- **Folder & File Structure**: what’s editable vs do-not-touch  
- **Coding Conventions**: style guides, naming rules, commenting expectations  
- **AI Collaboration Rules**: response format, edit rules, ambiguity handling  
- **Editing Rules**: full-file vs patches, locked files  
- **Dependencies & Setup**: frameworks, services, env vars  
- **Workflow & Tools**: how to run locally, FE/BE boundary, deployment notes  
- **Contextual Knowledge**: product quirks, domain rules, business logic caveats  
- **Examples**: good vs bad AI answer

**Deliverables**
- Project overview (purpose, stack, goals, users)  
- Folder & file structure with editable vs do-not-touch  
- Coding conventions (style, naming, commenting)  
- AI collaboration rules (response style, edit rules, ambiguity handling)  
- Dependencies and setup instructions  
- Workflow, deployment notes, contextual knowledge  
- Good vs bad answer examples  
- Fill out all the missing information in the CLAUDE.md file

**Checklist**
- [ ] Project overview section filled in  
- [ ] File boundaries clearly defined  
- [ ] Coding/style conventions included  
- [ ] AI collaboration & editing rules written  
- [ ] Dependencies & env notes covered  
- [ ] Workflow & deployment info added  
- [ ] Contextual knowledge documented  
- [ ] Good vs bad examples included  
- [ ] CLAUDE.md file does not miss any important information

---

# ✅ Outcome
When this 8-step plan is followed:
- The repo is a **rich, opinionated scaffold** (80% done).  
- Docs give Claude **clear boundaries + context**.  
- The one-page prompt is **battle-tested** and aligned.  
- Claude Code can safely and efficiently generate the missing 20%.  












