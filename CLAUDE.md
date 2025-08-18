# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Inner Marker is a React prototyping and wireframing application built with Vite, TypeScript, and modern UI components. The project demonstrates various state management patterns and UI component architectures.

## Development Commands

```bash
# Development server
pnpm dev               # Start Vite dev server
bun run dev           # Alternative with bun

# Code quality
pnpm check            # Run biome linter/formatter (auto-fix)
pnpm check:staged     # Check only staged files
pnpm check:changed    # Check only changed files
pnpm typecheck        # TypeScript type checking

# Build
pnpm build            # Production build
pnpm preview          # Preview production build
```

## Architecture

### Tech Stack
- **React 19.1** with TypeScript
- **Vite 7.1** for build tooling and dev server
- **React Router 7.8** for client-side routing
- **MobX 6.13** for reactive state management
- **Radix UI** components with custom styling
- **Tailwind CSS 4.1** with custom theme system
- **Biome** for linting and formatting

### State Management Philosophy
The project demonstrates multiple MobX patterns through separate example stores:
- `mobx-1.tsx`: Class-based observables with decorators
- `mobx-2.tsx`: Alternative MobX patterns
- `mobx-3.tsx`: Additional MobX implementations
- All stores are consumed by the shared `TodoList` component

### UI Component System
- **shadcn/ui components** in `src/components/ui/`
- **Custom Tailwind theme** in `src/theme/tailwind.css`
- **Component aliases** configured via `@/` imports
- **Utility function** `cn()` in `src/helpers/cn.ts` for conditional classes

### Layout System
The main layout uses CSS Grid with named areas defined in `tailwind.css`:
- `layout` class creates the main grid structure
- Named grid areas: `sidebar-l`, `content`, `sidebar-r`, `cards`, `links`, etc.
- Responsive design handled through grid template definitions

### Routing Architecture
- **File-based component routing** in `src/App.tsx`
- **Nested routes** with `<Outlet />` components
- **Dynamic route parameters** (e.g., `:pid` for projects)
- **Custom NavLink wrapper** with active state styling

## Important Patterns

### MobX Integration
- Use `observer()` wrapper for reactive components
- Import stores from individual `mobx-*.tsx` files
- Class-based observables use `makeObservable()` in constructors

### Component Styling
- Tailwind classes with `cn()` utility for conditional styling
- Custom CSS properties and component classes in theme file
- Radix UI primitives with custom styling

### Development Workflow
- Use `pnpm` as the package manager (specified in package.json)
- Biome handles all code formatting and linting
- TypeScript strict mode enabled
- Hot module replacement via Vite

## Key Files

- `src/App.tsx` - Main application with routing and layout components
- `src/theme/tailwind.css` - Custom theme, grid layout, and component styles
- `components.json` - shadcn/ui configuration with custom aliases
- `vite.config.ts` - Build configuration with path aliases
- `mobx-*.tsx` - State management examples and patterns