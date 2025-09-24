# Misa Rome - Videographer Portfolio

A minimal but bold portfolio website for videographer Misa Rome, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Minimal & Bold Design**: Clean, modern aesthetic with bold typography
- **Responsive**: Fully responsive design that works on all devices
- **Custom Font**: Uses NFUltra-Regular font for distinctive typography
- **Category Organization**: Work organized into Live Event, Productions, and Directed categories
- **Smooth Animations**: Subtle hover effects and transitions
- **Fast Performance**: Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── fonts/           # Custom fonts
│   ├── live-event/      # Live Event category page
│   ├── productions/     # Productions category page
│   ├── directed/        # Directed works category page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   └── PortfolioGrid.tsx # Portfolio grid component
public/
└── images/
    └── logo.png         # Misa Rome logo
```

## Customization

### Adding New Portfolio Items

Edit the portfolio items arrays in the respective page files:
- Homepage: `src/app/page.tsx`
- Live Event: `src/app/live-event/page.tsx`
- Productions: `src/app/productions/page.tsx`
- Directed: `src/app/directed/page.tsx`

### Updating Contact Information

Edit the contact details in `src/app/contact/page.tsx`

### Styling

The project uses Tailwind CSS for styling. The main color scheme is:
- Background: Black (`bg-black`)
- Text: White (`text-white`)
- Accent: Gray variations for secondary text

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [NFUltra Font](https://www.futurefonts.xyz/nf-ultra) - Custom typography