# Overview

This is a full-stack web application built with React, TypeScript, and Express that features a cat café interface. The application allows users to interact with a virtual cat server to order different types of drinks (coffee, matcha latte, and surprise drinks) through a playful, animated interface. The frontend uses shadcn/ui components for a polished user experience, while the backend provides a REST API structure with PostgreSQL database integration via Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with a custom theme featuring warm, café-inspired colors
- **Design System**: Uses CSS variables for consistent theming with a playful, sketch-like aesthetic

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling
- **Development**: Hot module replacement via Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Data Storage
- **Database**: PostgreSQL configured via Drizzle ORM
- **Connection**: Uses Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Full TypeScript integration with Drizzle for compile-time query validation
- **Development Storage**: In-memory storage implementation for local development and testing

## Authentication & Authorization
- **Session Management**: PostgreSQL session store via connect-pg-simple
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Validation**: Zod schema validation for user input and API contracts

## External Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Fonts**: Google Fonts integration (Comic Neue for playful typography)
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific plugins for enhanced development experience
- **Build Tools**: esbuild for production server bundling, Vite for frontend development

The application follows a monorepo structure with shared schemas and types between frontend and backend, ensuring type safety across the full stack. The modular component architecture allows for easy extension of the cat café interface with additional drinks and features.