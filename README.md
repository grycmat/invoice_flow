# InvoiceFlow

A modern, professional invoice management application built with Angular 20. Create, manage, and track invoices with a beautiful, glass-morphism inspired user interface.

## Features

- **Dashboard Overview** - View key business metrics and recent invoices
- **Modular Invoice Creation** - Component-based form system with reusable parts
- **Reactive Forms** - Advanced form validation and state management
- **Modern UI** - Beautiful glass-morphism design with responsive layout
- **Business Ready** - Support for Polish tax requirements (NIP fields)

## Quick Start

### Prerequisites

- Node.js (compatible with Angular 20)
- npm package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Navigate to `http://localhost:4200/` to view the application.

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build with file watching

## Project Structure

```
src/
├── app/
│   ├── feature/
│   │   ├── dashboard/          # Dashboard with metrics
│   │   └── invoice/            # Invoice feature modules
│   │       ├── company-data/   # Reusable company data component
│   │       ├── invoice-items/  # Dynamic invoice items table
│   │       └── invoice-form/   # Main invoice form
│   │           ├── invoice-details/  # Invoice details component
│   │           └── invoice-totals/   # Invoice totals component
│   └── layout/                 # Shared layout components
└── styles.css                  # Global styles and design system
```

## Technology Stack

- **Angular 20** - Latest version with modern features
- **TypeScript** - Type-safe development
- **CSS3** - Custom design system with glass morphism
- **Responsive Design** - Mobile-first approach

## Development

This project uses modern Angular patterns including:

- Standalone components
- Angular signals for state management
- Reactive forms with FormGroup, FormArray, and FormControl
- Modern control flow syntax (@if, @for)
- Zoneless change detection
- Modular component architecture
- Type-safe interfaces and validation

## License

This project is private and proprietary.
