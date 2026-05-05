# Modern Blog Website

A fully-featured blog website built with Next.js and Contentstack.

## Project Structure

```
blog-website/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── blog/                 # Blog API endpoints
│   ├── blog/                     # Blog pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # Reusable React components
│   └── Header.tsx                # Navigation header
├── lib/                          # Utility functions and configurations
│   ├── contentstack.ts           # Contentstack client setup
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
├── package.json
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── .eslintrc.config.mjs          # ESLint configuration
```

## Features

- **Next.js 14** with App Router
- **Contentstack CMS** integration
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design**
- **SEO optimized**
- **Fast loading** with static generation

## Contentstack Setup

This project is integrated with Contentstack CMS. To set up:

1. Create a Contentstack account and stack
2. Get your API Key and Delivery Token
3. Update `.env.local` with your credentials:
   ```
   NEXT_PUBLIC_CONTENTSTACK_API_KEY=your_api_key
   NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
   NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=name
   CONTENTSTACK_REGION=EU
   ```

## Installation

```bash
npm install
```

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Update the Contentstack credentials in `.env.local`

## Running the Project

```bash
npm run dev
```

The application will run on `http://localhost:3000`

## Contentstack Content Types

The application expects the following content types in Contentstack:

- **blog_post**: Main blog post content
- **category**: Blog categories
- **author**: Author information

## API Endpoints

- `GET /api/blog` - Fetch all blog posts
- `GET /api/blog/[slug]` - Fetch single blog post by slug

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Contentstack** - CMS
- **ESLint** - Code linting
