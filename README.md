# Horsepower Electric - Professional Electrical Services Website

A modern, responsive website for Horsepower Electric, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with electrician-themed branding
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured content
- **Contact Form**: Functional contact form for customer inquiries
- **Service Pages**: Detailed service information and pricing
- **About Page**: Company information and team details

## Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Yarn
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd hpe-gr-v10
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   └── ServiceCard.tsx    # Service card component
└── lib/                   # Utility functions
```

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

No environment variables are required for basic functionality.

## Customization

### Updating Business Information

1. **Contact Information**: Update phone, email, and address in:
   - `src/components/Footer.tsx`
   - `src/app/contact/page.tsx`
   - `src/components/Hero.tsx`

2. **Services**: Modify services in:
   - `src/app/page.tsx` (homepage services)
   - `src/app/services/page.tsx` (detailed services)

3. **Company Information**: Update in:
   - `src/app/about/page.tsx`
   - `src/app/layout.tsx` (meta tags)

### Styling

The website uses Tailwind CSS for styling. The main color scheme is:
- Primary: Yellow (#EAB308)
- Secondary: Gray (#374151)
- Background: White/Gray-50

## License

This project is private and proprietary to Horsepower Electric.

## Support

For technical support or questions about this website, please contact the development team.
