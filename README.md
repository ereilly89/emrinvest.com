{
  "company_name": "EMR Invest",
  "company_description": "We enable customers to 'Invest' in their digital future by creating Custom Websites, E-commerce Solutions, Web Applications, AI & Automations, SEO Optimization and Ongoing Support for their customers",
  "colors": ["white", "blue"]
  "theme": "modern",
  "description": "A production-ready web app template using Next.js 15, Clerk authentication, Supabase for database/storage, Stripe payments, SMTP emails, and Vercel deployment. Includes admin dashboard, user dashboard, pricing, API keys, contact form, and shared component library.",
  "architecture": {
    "pattern": "MVC (Model–View–Controller)",
    "description": "The entire monorepo must follow strict MVC boundaries. Models handle all Supabase queries, Controllers contain business logic, Views contain UI components, and API routes act only as thin controllers that delegate everything to packages/controllers."
  },
  "features": {
    "frontend": {
      "framework": "Next.js 15 (App Router)",
      "ui": "TailwindCSS + ShadCN",
      "auth": "Clerk",
      "payments": "Stripe",
      "email": "SMTP via Nodemailer",
      "state_management": "Server Actions + React",
      "routing": "App Router structure with middleware"
    },
    "backend": {
      "database": "Supabase (Postgres)",
      "api": "Next.js API Routes + Supabase Admin Client",
      "webhooks": ["Stripe checkout/session", "Stripe subscription", "Contact form"],
      "logging": "Audit log table in Supabase"
    },
    "dashboard": {
      "user_dashboard": [
        "View subscription",
        "Manage billing",
        "Generate API keys",
        "Update profile"
      ],
      "admin_dashboard": [
        "Dashboard home",
        "User list",
        "Subscription list",
        "Contact message inbox",
        "Audit logs viewer"
      ]
    },
    "templates": {
      "public_pages": {
        "Landing page": {
            "Hero": "Invest In Your Digital Future",
            "Our Services": ["Custom Web Apps", "AI & Automations", "Ongoing Support"],
            "Featured Projects": ["https://fittoscale.io", "https://evanreilly.me"],
            "Our Process": ["Discovery", "Design", "Development", "Launch"],
            "Impact": ["Projects Completed", "Client Satisfaction", "Years Experience", "Countries Served"],
            "Client Success Stories": "Put placeholder testimonials here",
            "Contact": ["Full Name", "Email Address", "Project Type", "Project Details"]
        },
        "Signup/Login via Clerk"
      },
      "private_pages": [
        "Dashboard",
        "Admin panel"
      ]
    },
    "devops": {
      "deployment": "Vercel",
      "environment": "Local + Production",
      "scripts": [
        "pnpm dev",
        "pnpm build",
        "pnpm lint",
        "pnpm test"
      ]
    }
  },
  "environmentVariables": [
    "NEXT_PUBLIC_APP_URL",
    "NEXT_PUBLIC_CLERK_FRONTEND_API",
    "CLERK_SECRET_KEY",
    "SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "STRIPE_SECRET_KEY",
    "STRIPE_WEBHOOK_SECRET",
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "EMAIL_FROM",
    "ADMIN_EMAILS"
  ],
  "supabase": {
    "tables": [
      "app_users",
      "subscriptions",
      "contact_submissions",
      "api_keys",
      "audit_logs"
    ],
    "rls": "Recommended: enable RLS with policies for authenticated users",
    "seeding": "Optional seed script using Supabase Admin key"
  },
  "readmeIncluded": true,
  "notes": [
    "All sensitive keys must be set in .env or Vercel project settings",
    "Service role key must NEVER be exposed to the browser",
    "Stripe webhooks must validate signatures"
  ]
}
