# The Inventors Academy

## Overview

The Inventors Academy is an independent summer education program that offers immersive STEM and entrepreneurship courses for students aged 13+ in historic Oxford college settings. The application is a full-stack web platform built with React frontend and Express.js backend, featuring program information, application forms, and contact management. The platform showcases multiple age-based programs (Young Innovators 13-15, Future Leaders 16-18, Adult Track 18+) covering subjects like robotics, AI, business, engineering, and medicine.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with a simple Switch/Route structure
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Tailwind CSS with custom CSS variables for theming, Google Fonts integration (Inter, Crimson Text)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework using TypeScript
- **API Design**: RESTful API with structured error handling and request/response logging middleware
- **Data Validation**: Zod schemas for request validation with detailed error responses
- **Development Setup**: Development server with hot reload, production build with esbuild bundling
- **Request Processing**: JSON body parsing, URL encoding support, and comprehensive error handling

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL using Neon serverless database in production
- **Schema Management**: Shared schema definitions between frontend and backend using drizzle-zod
- **Development Storage**: In-memory storage implementation for development/testing with full CRUD operations
- **Migration System**: Drizzle migrations with automatic UUID generation for primary keys

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contact Submissions**: Form submissions with personal details, program interest, and inquiry messages
- **Applications**: Comprehensive application forms with personal information, emergency contacts, medical conditions, and program preferences
- **Timestamp Tracking**: Automatic created_at timestamps for all submissions

### Authentication and Authorization
- **Session Management**: Session-based authentication using connect-pg-simple for PostgreSQL session storage
- **Security**: CORS configuration, secure session cookies, and request validation
- **User Management**: Basic user creation and lookup functionality with username-based identification

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection for Neon database
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL dialect
- **express**: Web application framework for Node.js backend API
- **react**: Frontend UI library with TypeScript support
- **vite**: Build tool and development server for frontend

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, form controls)
- **tailwindcss**: Utility-first CSS framework with custom theme configuration
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditionally joining classnames

### Form and Data Management
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Integration between react-hook-form and validation libraries
- **zod**: TypeScript-first schema declaration and validation library
- **@tanstack/react-query**: Data synchronization and caching for React applications

### Development and Build Tools
- **typescript**: Static type checking for JavaScript
- **tsx**: TypeScript execution and development runner
- **esbuild**: Fast bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling integration for Replit

### Additional Utilities
- **date-fns**: Date utility library for formatting and manipulation
- **nanoid**: URL-safe unique ID generator
- **wouter**: Minimalist routing library for React
- **embla-carousel-react**: Carousel component for image galleries