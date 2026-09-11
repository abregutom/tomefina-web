# Mullet - Wedding Event Website

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/      # Astro components
│   └── svgs/        # Animated SVG components
├── layouts/         # Layout components
├── pages/           # Route pages
└── styles/          # Global CSS
public/
└── fonts/           # Self-hosted fonts
```

## Tech Stack

- **Astro** - Static-first framework
- **Tailwind CSS 4** - Utility-first styling
- **Cloudflare Pages** - Deployment target

## Adding Fonts

Place `.woff2` font files in `public/fonts/`:
- Didot-Regular.woff2
- LimoncelloRecipe-Regular.woff2
- Montserrat-Regular.woff2
- Montserrat-Bold.woff2
- Montserrat-Light.woff2

## Deploy to Cloudflare Pages

```bash
npm run build
```

The `dist/` folder is ready for Cloudflare Pages deployment.
