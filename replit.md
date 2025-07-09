# Full Stack Web Application

## Overview

This is a full-stack web application built with modern technologies, featuring a React frontend with TypeScript, Express backend, and PostgreSQL database with Drizzle ORM. The application uses shadcn/ui components for the user interface and is configured for deployment on Replit's autoscale platform.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: PostgreSQL-based session storage
- **Development**: tsx for TypeScript execution in development

### Data Storage
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Management**: Drizzle migrations in `./migrations` directory

## Key Components

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Schema Location**: `shared/schema.ts` with Zod validation schemas
- **Type Safety**: Full TypeScript integration with Drizzle

### Authentication System
- Session-based authentication ready to be implemented
- Password hashing preparation (bcrypt dependencies present)
- User creation and lookup methods defined in storage interface

### UI Component System
- Complete shadcn/ui component library implementation
- Dark/light theme support with CSS variables
- Responsive design with mobile-first approach
- Comprehensive form components with validation

### Development Tools
- Hot module replacement with Vite
- TypeScript checking and compilation
- Automated error overlays for development
- Replit-specific development enhancements

## Data Flow

1. **Client Requests**: React app makes API calls using TanStack Query
2. **API Layer**: Express routes handle requests with TypeScript type safety
3. **Business Logic**: Storage interface abstracts database operations
4. **Database**: Drizzle ORM provides type-safe database queries
5. **Response**: JSON responses sent back to client with error handling

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js for backend API
- Drizzle ORM and PostgreSQL drivers
- Radix UI primitives for accessible components

### Development Dependencies
- Vite for build tooling and development server
- TypeScript for type safety
- Tailwind CSS for styling
- ESBuild for production bundling

### Database Integration
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs TypeScript server with tsx
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Enabled for both frontend and backend

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Assets**: Static files served from Express in production

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Recent Changes

- July 9, 2025: Added configuration-based scrolling messages system with separate config file (`client/src/config/scrolling-messages.ts`) to manage multiple scrolling messages with customizable properties like text, animation duration, font size, color, and delay
- June 23, 2025: Created minimalist scrolling text app with black text "Can you see this?" scrolling right-to-left on white background
- June 23, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.