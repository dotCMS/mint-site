# Travel Website

A modern travel website built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── public/                # Static assets
├── styles/                # Additional styles
└── types/                 # TypeScript type definitions
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Lucide React (Icons)
  - Tailwind Typography
  - Tailwind Merge
  - clsx (Conditional class names)

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

## Features

- Modern, responsive design
- Type-safe development with TypeScript
- Component-based architecture
- Blog section for travel stories
- User authentication (login/signup)
- About page for company information

## Configuration

- Next.js configuration in `next.config.mjs`
- Tailwind CSS configuration in `tailwind.config.ts`
- TypeScript configuration in `tsconfig.json`
- PostCSS configuration in `postcss.config.mjs`

## Development Tools

- ESLint for code linting
- TypeScript for type checking
- PostCSS for CSS processing
- Tailwind CSS for utility-first styling

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser 