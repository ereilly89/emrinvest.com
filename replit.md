# EMR Invest Website

## Overview
A professional website for EMR Invest (emrinvest.com), a company that builds websites for individuals and businesses. The site features a modern, responsive design with user authentication, admin functionality, and a contact form system.

## Project Structure
```
client/                 # Frontend React application
├── src/
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks (useAuth)
│   ├── lib/           # Utility functions and configs
│   └── pages/         # Route pages (Home, Dashboard, Admin, Settings)
server/                # Express backend
├── db.ts             # Database connection
├── replitAuth.ts     # Replit OAuth authentication
├── routes.ts         # API routes
└── storage.ts        # Database operations
shared/               # Shared types and schemas
└── schema.ts         # Drizzle ORM schemas
```

## Features
- **Landing Page**: Hero section, services grid, portfolio showcase, process timeline, stats, testimonials, and contact form
- **User Authentication**: Replit Auth with Google, GitHub, Apple, and email/password login
- **User Roles**: User and Admin roles with role-based access control
- **Dashboard**: User profile view with project information
- **Admin Panel**: User management and contact submission viewing
- **Contact Form**: Saves submissions to database

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Wouter (routing), TanStack Query
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Authentication**: Replit Auth (OpenID Connect)

## Database Schema
- `users`: User accounts with id, email, firstName, lastName, profileImageUrl, role, timestamps
- `sessions`: Session storage for authentication
- `contact_submissions`: Contact form entries

## API Endpoints
- `GET /api/auth/user` - Get current authenticated user
- `POST /api/contact` - Submit contact form
- `GET /api/admin/users` - Get all users (admin only)
- `PATCH /api/admin/users/:id/role` - Update user role (admin only)
- `GET /api/admin/contacts` - Get contact submissions (admin only)
- `GET /api/login` - Initiate login flow
- `GET /api/logout` - Logout user
- `GET /api/callback` - OAuth callback

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption secret
- `REPL_ID` - Replit app ID (auto-provided)

## Running the Project
```bash
npm run dev        # Start development server
npm run db:push    # Push schema changes to database
```

## Branding
- Company name: EMR Invest
- Primary color: Blue (217 91% 45%)
- Font: Inter

## Recent Changes
- Updated branding from EmrInvest to EMR Invest
- Changed "Brand Identity" service to "AI & Automations"
- Added Replit Auth with user/admin roles
- Created Dashboard, Admin Panel, and Settings pages
- Connected contact form to database
