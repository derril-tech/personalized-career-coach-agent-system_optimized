# TalentFlux Frontend

The frontend application for TalentFlux - an intelligent HR recruitment platform built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personalized-career-coach-agent-system_optimized
   ```

2. **Install dependencies**
   ```bash
   cd apps/web
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
apps/web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Dashboard routes
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── ui/               # Base UI components
│   │   ├── forms/            # Form components
│   │   ├── layout/           # Layout components
│   │   └── features/         # Feature-specific components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configurations
│   ├── stores/               # State management (Zustand)
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
└── tests/                    # Frontend tests
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run end-to-end tests

## 🎨 Design System

The application uses a comprehensive design system built with Tailwind CSS:

### Colors
- **Primary**: Blue shades for main actions and branding
- **Secondary**: Neutral grays for backgrounds and text
- **Success**: Green for positive actions
- **Warning**: Yellow for attention
- **Error**: Red for negative actions

### Components
- Buttons with multiple variants (primary, secondary, outline, ghost)
- Cards with headers, content, and footers
- Form inputs with validation states
- Badges for status indicators
- Tables with sorting and pagination
- Loading spinners and skeletons

### Dark Mode
The application supports dark mode with automatic theme switching based on system preferences.

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000

# Authentication
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain.auth0.com
NEXT_PUBLIC_AUTH_CLIENT_ID=your-auth-client-id

# Feature Flags
NEXT_PUBLIC_FEATURE_AI_MATCHING=true
NEXT_PUBLIC_FEATURE_AI_SCREENING=true
```

### Tailwind Configuration

The Tailwind configuration is located in `tailwind.config.js` and includes:

- Custom color palette for HR/recruitment
- Custom spacing and typography
- Animation utilities
- Component variants
- Dark mode support

## 📱 Key Features

### Authentication
- JWT-based authentication
- Role-based access control (RBAC)
- Protected routes
- User profile management

### Dashboard
- Real-time pipeline overview
- Key metrics and KPIs
- Recent activity feed
- Quick actions

### Pipeline Management
- Kanban board view
- Drag-and-drop candidate movement
- Filtering and search
- Bulk actions

### Candidate Management
- Candidate profiles with AI insights
- Resume parsing and analysis
- Skill matching and scoring
- Communication history

### AI Features
- Intelligent candidate matching
- Automated screening
- Bias detection and mitigation
- Explainable AI decisions

### Interview Management
- Interview scheduling
- Calendar integration
- Structured feedback forms
- Panel coordination

### Reports & Analytics
- Recruitment funnel analytics
- Diversity and inclusion metrics
- Time-to-hire tracking
- Performance dashboards

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Integration Tests
```bash
npm run test:integration
```

### End-to-End Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔒 Security

- HTTPS enforcement in production
- Content Security Policy (CSP)
- XSS protection
- CSRF protection
- Input validation and sanitization
- Secure authentication flow

## 📊 Performance

- Next.js App Router for optimal routing
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Service worker for caching
- Bundle analysis and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation in `/docs`
- Open an issue on GitHub
- Contact the development team

---

**TalentFlux** - Find, match, and hire top talent 3× faster—with auditable AI you can trust.
