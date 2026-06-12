# Muhammad Yahya Khokhar Portfolio

Premium dark-themed multi-page portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Router DOM, React Hook Form, EmailJS, Axios, GSAP, AOS, Swiper, and Lucide Icons.

## Features

- Multi-page routing with lazy-loaded pages
- Premium black/gold visual system
- Responsive layout for mobile, tablet, laptop, desktop, and ultrawide
- Animated hero with typing text and motion-based sections
- Projects with search, filters, and modal detail view
- Contact form with validation and EmailJS integration
- Sticky navigation, scroll progress, back-to-top, custom cursor, and floating actions
- SEO-friendly `index.html` metadata

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example` and add your EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

3. Start the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## Environment Variables

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Deployment

### Vercel

- Import the repository
- Set the three Vite environment variables in project settings
- Deploy the default Vite build output

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Add the three environment variables in site settings

### Static hosting

- Run `npm run build`
- Upload the `dist` folder to your host

## Notes

- The contact form will fall back to an alert if EmailJS is not configured yet.
- Replace the placeholder `/resume.pdf` asset with your actual resume file when ready.
- Update the GitHub and LinkedIn links inside `src/pages/Contact.jsx` and `src/data/siteData.js` if you want them wired to final profiles.
