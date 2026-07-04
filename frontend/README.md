# CloudLearn
CloudLearn is a modern, full-stack Learning Management System (LMS) inspired by platforms like Microsoft Learn, AWS Skill Builder, Infosys Springboard, Google Cloud Skills Boost, and Cisco Networking Academy.
## Features
- **Structured Courses**: Interactive, step-by-step modular learning courses.
- **Learning Paths**: Structured curriculum maps combining multiple courses.
- **Assessments**: Dynamic quizzes and coding tests.
- **Projects**: Hands-on project milestones for practical application.
- **Certificates & Verification**: Secure, cryptographically verifiable certificates of completion.
- **Progress Tracking**: Personal dashboards highlighting milestones, statistics, and course progression.
- **Admin Panel**: Complete course authoring and user administration control.
## Tech Stack
- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: NextAuth, JWT
- **Payments**: Razorpay
- **Storage**: Cloudinary
## Getting Started
### Prerequisites
- Node.js (v18+)
- PostgreSQL database instance
### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   ```bash
   cp .env.example .env
   ```
4. Run migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Run the development environment:
   ```bash
   # Start frontend
   npm run dev:frontend
   
   # Start backend
   npm run dev:backend
   ```
