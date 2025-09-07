# InvoiceFlow - Project Context

## Overview

InvoiceFlow is a modern, professional invoice management application built with Angular 20. It provides a comprehensive solution for creating, managing, and tracking invoices with a beautiful, glass-morphism inspired user interface.

## Technology Stack

- **Framework**: Angular 20.2.0 (latest version)
- **Language**: TypeScript 5.9.2
- **Styling**: Custom CSS with CSS Variables and Glass Morphism design
- **Build Tool**: Angular CLI 20.2.1
- **Testing**: Jasmine + Karma
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── app.ts                    # Main application component
│   ├── app.config.ts            # Application configuration
│   ├── app.routes.ts            # Routing configuration
│   ├── app.html                 # Main app template
│   ├── app.css                  # Main app styles
│   ├── feature/                 # Feature modules
│   │   ├── dashboard/           # Dashboard feature
│   │   │   ├── dashboard.ts     # Dashboard component
│   │   │   ├── dashboard.html   # Dashboard template
│   │   │   └── dashboard.css    # Dashboard styles
│   │   └── invoice/             # Invoice feature
│   │       └── invoice-form/    # Invoice form sub-feature
│   │           ├── invoice-form.ts
│   │           ├── invoice-form.html
│   │           └── invoice-form.css
│   └── layout/                  # Layout components
│       ├── layout.ts
│       ├── layout.html
│       └── layout.css
├── styles.css                   # Global styles and design system
└── main.ts                      # Application bootstrap
```

## Key Features

### 1. Dashboard Overview

- **Welcome Section**: Professional greeting with call-to-action
- **Quick Stats**: Key metrics including:
  - Monthly Revenue: $28,450
  - Pending Amount: $6,230
  - Overdue Items: 4
  - Active Clients: 42
- **Metrics Grid**: Visual cards showing:
  - Total Revenue: $84,720 (+18.2% this month)
  - Total Invoices: 247 (+12 this week)
  - Active Clients: 42 (+3 new clients)
  - Success Rate: 94.2% (+2.1% improvement)
- **Recent Invoices Panel**: List of recent invoices with status indicators

### 2. Invoice Creation Form

- **Invoice Details**: Number, issue date, sale date, payment method, due date, currency
- **Seller Information**: Company/individual name, tax ID (NIP), address, bank account
- **Buyer Information**: Company/individual name, tax ID, address
- **Invoice Items Table**: Dynamic table for adding/removing line items with:
  - Service/product description
  - Legal basis
  - Quantity and unit
  - Unit price and total calculation
- **Totals Section**: Automatic calculation of subtotal, tax, total amount, paid amount, and remaining balance
- **Additional Notes**: Optional notes field
- **Form Actions**: Save as draft, preview, and generate invoice buttons

### 3. Design System

#### Color Palette

- **Primary Gradient**: Purple to blue (#8b5cf6 to #3b82f6)
- **Background**: Deep blue gradient (#1e1b4b to #1e40af)
- **Glass Effects**: Semi-transparent white overlays with backdrop blur
- **Status Colors**:
  - Success: #10b981 (green)
  - Warning: #f59e0b (amber)
  - Danger: #ef4444 (red)
  - Info: #3b82f6 (blue)

#### Typography

- **Font Family**: Inter, system fonts
- **Hierarchy**: Clear heading levels (h1-h4) with appropriate sizing
- **Text Gradients**: Applied to logos and important headings

#### Components

- **Glass Morphism Cards**: Semi-transparent backgrounds with blur effects
- **Status Badges**: Color-coded status indicators
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Grid**: Adaptive layout for different screen sizes

## Application Architecture

### Routing

- **Root Route** (`/`): Dashboard component
- **Invoice Creation** (`/invoice/create`): Invoice form component

### Component Structure

- **App Component**: Main application shell with router outlet
- **Dashboard Component**: Main dashboard with metrics and recent invoices
- **Invoice Form Component**: Comprehensive invoice creation form
- **Layout Component**: Shared layout structure (currently minimal)

### State Management

- Uses Angular signals for reactive state management
- Modern Angular patterns with standalone components
- Zoneless change detection for better performance

## Styling Approach

### CSS Architecture

- **Global Styles**: Comprehensive design system in `styles.css`
- **Component Styles**: Scoped styles for each component
- **CSS Variables**: Extensive use of custom properties for theming
- **Utility Classes**: Helper classes for common patterns

### Design Principles

- **Glass Morphism**: Modern, translucent design language
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Proper contrast ratios and interactive states
- **Performance**: Optimized animations and transitions

## Current State

### Implemented Features

✅ Dashboard with metrics and recent invoices  
✅ Invoice creation form with comprehensive fields  
✅ Responsive design system  
✅ Modern UI with glass morphism effects  
✅ Routing between dashboard and invoice form

### Technical Implementation

✅ Angular 20 with modern patterns  
✅ TypeScript with strict typing  
✅ CSS custom properties for theming  
✅ Component-based architecture  
✅ Responsive grid system

### Areas for Enhancement

- **Backend Integration**: No API calls or data persistence
- **Form Validation**: Basic HTML validation only
- **Invoice Management**: No edit, delete, or view functionality
- **User Authentication**: No login/logout system
- **Data Models**: No TypeScript interfaces for data structures
- **State Management**: Could benefit from more sophisticated state management
- **Testing**: Test files exist but no test implementations

## Development Environment

### Prerequisites

- Node.js (compatible with Angular 20)
- npm package manager
- Angular CLI 20.2.1

### Available Scripts

- `ng serve`: Start development server
- `ng build`: Build for production
- `ng test`: Run unit tests
- `ng build --watch`: Build with file watching

### Code Quality

- **Prettier**: Configured with 100 character line width
- **TypeScript**: Strict mode enabled
- **Angular**: Latest version with modern features

## Business Context

InvoiceFlow appears to be designed for:

- **Small to Medium Businesses**: Managing client invoices
- **Freelancers**: Professional invoice generation
- **Service Providers**: Tracking payments and client activity
- **Polish Market**: NIP (Tax ID) fields suggest Polish business requirements

The application focuses on professional invoice creation with comprehensive business information fields, suggesting it's targeted at businesses that need detailed, compliant invoicing capabilities.
