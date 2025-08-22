# Frontend App Directory Instructions

This directory contains the Next.js 14 application with App Router structure.

## 📁 Directory Structure

```
src/app/
├── (auth)/              # Authentication route group
│   ├── login/           # Login page
│   ├── register/        # Registration page
│   └── forgot-password/ # Password reset page
├── (dashboard)/         # Dashboard route group
│   ├── dashboard/       # Main dashboard
│   ├── pipeline/        # Pipeline management
│   ├── candidates/      # Candidate management
│   ├── requisitions/    # Requisition management
│   ├── interviews/      # Interview management
│   ├── offers/          # Offer management
│   └── reports/         # Analytics and reports
├── api/                 # API routes (if needed)
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Home page
```

## 🎯 TODO Tasks

### Authentication Pages
- [ ] Implement login page with form validation
- [ ] Create registration page with organization setup
- [ ] Add password reset functionality
- [ ] Implement OAuth providers (Google, Microsoft)
- [ ] Add email verification flow

### Dashboard Pages
- [ ] Build main dashboard with real-time metrics
- [ ] Create pipeline board with drag-and-drop
- [ ] Implement candidate list with filtering
- [ ] Add requisition management interface
- [ ] Build interview scheduling calendar
- [ ] Create offer management workflow
- [ ] Develop analytics and reporting dashboards

### Components Needed
- [ ] Form components with validation
- [ ] Data tables with sorting and pagination
- [ ] Modal dialogs for quick actions
- [ ] File upload components
- [ ] Rich text editor for job descriptions
- [ ] Calendar and scheduling components
- [ ] Charts and data visualization
- [ ] Notification system

### Features to Implement
- [ ] Real-time updates with WebSocket
- [ ] AI chat interface for assistance
- [ ] Bulk operations for candidates
- [ ] Advanced search and filtering
- [ ] Export functionality for reports
- [ ] Dark mode toggle
- [ ] Responsive design for mobile

## 🔧 Technical Requirements

### State Management
- Use Zustand for global state
- React Query for server state
- Local state with useState/useReducer

### Data Fetching
- Implement API client with error handling
- Add request/response interceptors
- Handle loading and error states
- Implement optimistic updates

### Performance
- Use React.memo for expensive components
- Implement virtual scrolling for large lists
- Add lazy loading for images
- Optimize bundle size with code splitting

### Accessibility
- Follow WCAG 2.1 AA guidelines
- Add proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers

## 📝 Coding Standards

### File Naming
- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions

### Component Structure
```tsx
// Component with proper TypeScript types
interface ComponentProps {
  title: string;
  onAction?: () => void;
}

export function Component({ title, onAction }: ComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      {onAction && <button onClick={onAction}>Action</button>}
    </div>
  );
}
```

### Error Handling
- Use error boundaries for component errors
- Implement proper error states in UI
- Add error logging and monitoring
- Provide user-friendly error messages

### Testing
- Write unit tests for components
- Add integration tests for user flows
- Implement E2E tests for critical paths
- Maintain good test coverage

## 🚀 Next Steps

1. Set up authentication flow
2. Implement core CRUD operations
3. Add AI features integration
4. Build reporting and analytics
5. Add real-time features
6. Optimize performance
7. Add comprehensive testing
8. Deploy to production

## 📚 Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [React 18 Features](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
