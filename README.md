# Vishal — Freelance Web Developer Portfolio

A premium, light-themed portfolio for Vishal, a freelance web developer based in
Chennai, India. The site focuses on modern business websites, landing pages,
custom web applications and responsive redesigns.

Built with the **Next.js App Router**, **React**, **TypeScript** and
**Tailwind CSS v4**.

## Features

- Warm off-white design system with an indigo accent, oversized editorial type
  and generous whitespace
- Sticky navigation with scroll-spy links, a scroll progress indicator and a
  working, accessible mobile menu
- Editorial hero with an animated CSS/HTML interface preview
- Selected work showcase, including **Prathi Fitness Studio** as a private
  client project with no live link and no confidential data
- A clearly labelled concept/demo slot — no fabricated clients or results
- Four service offerings, an About section, a four-step process timeline and a
  contact panel with a `mailto:` CTA and copy-email button
- Scroll-reveal animations, focus states and touch-friendly interactions that
  respect `prefers-reduced-motion`
- Responsive from 320px through tablet and desktop widths

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev     # start the development server
npm run build   # create a production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Editing your details

Site content lives in [`lib/site.ts`](lib/site.ts):

- `email` is the public contact address (`svishal0820@gmail.com`).
- `availability.open` controls the availability indicator. Keep it `false`
  unless you are actively taking on new work.
- Projects, services, toolkit items and process steps are defined there.
- Prathi Fitness Studio is intentionally described at a high level. Do not add
  a live URL, private screenshots, member data or credentials.

## Project structure

```
app/
  layout.tsx        # Metadata, fonts, header/footer shell
  page.tsx          # Composes the sections
  globals.css       # Theme tokens, base styles and animations
  icon.svg          # Favicon
components/
  site-header.tsx   # Sticky nav, scroll spy, progress bar, mobile menu (client)
  hero.tsx
  work.tsx          # Private client project + concept/demo card
  services.tsx
  about.tsx
  process.tsx
  contact.tsx
  copy-email-button.tsx
  site-footer.tsx
  reveal.tsx        # Scroll-reveal wrapper (client)
  section-heading.tsx
  icons.tsx
lib/
  site.ts           # Site config + content
```

## Notes

The site is static and contains no analytics, forms, social links or invented
contact details. Deploy only after reviewing the content and contact details.
