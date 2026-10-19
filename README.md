# Cinematic Logo Stage

Build a modern, highly secure, and ultra-responsive single-page landing page featuring a full-screen background video with a centered logo overlay. , no scrolling

### Core Layout & UI Requirements:

- Full-screen minimalist design (`100vh` / `100dvh`).

- Background: Play a seamless webp video (`/hero-bg.webp` or HTML5 `<video>` loop) that covers the entire background (`object-cover`, full width and height).

- Background Video Specs: Muted, autoplay, loop, playsinline, pointer-events-none (to prevent accidental video controls/pausing on mobile).

- Overlay: Centered overlay container containing a crisp, high-resolution logo SVG/PNG image. Add a subtle, tasteful backdrop blur or translucent overlay (`bg-black/20` or CSS `backdrop-blur-sm`) to ensure the logo remains legible over bright or moving parts of the video.

- Minimalist Footer or Hidden Meta: Maintain an ultra-clean aesthetic with no body text, sidebars, or additional sections.

### Mobile & Responsive Design:

- Must use modern CSS viewport units (`100dvh`) to prevent mobile browser address bar layout jumps.

- Logo scaling: Use fluid scaling (Tailwind responsive sizing like `w-48 sm:w-64 md:w-80`) so the logo looks perfectly balanced on everything from small iPhones to 4K desktop monitors.

- Ensure video autoplay works smoothly across iOS Safari and Android Chrome by enforcing `muted`, `playsinline`, and `autoplay` attributes.

### Security & Anti-Spam / Anti-Abuse Best Practices:

- Security Headers & Meta: Include standard security meta tags (Content Security Policy meta tag limiting external scripts, `X-Content-Type-Options`, `referrerpolicy="strict-origin-when-cross-origin"`).

- Anti-Spam / Scraping Protection: Disable text/element selection on the video container (`select-none`), restrict right-click context menu on media elements where appropriate, and ensure no vulnerable API endpoints or exposed environment keys are injected into client-side code.

- Sanitization: Ensure all media source URLs are safely handled without dynamic innerHTML injection risks (XSS prevention).

### Performance Optimization:

- Preload the webp video media source or use `<link rel="preload">` to minimize layout shift (CLS).

- Fallback poster frame: Include a silent static poster image background while the WebP video loads.

- Clean, accessible semantic HTML5 architecture (`<main>`, `<header>`, `<video>`).

Please construct this using React, Tailwind CSS, and Lucide/Framer Motion if animations are needed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/93cfb6b7-d073-5c1f-960c-da0b21636b50).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
