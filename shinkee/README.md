This project is a Next.js application for DDB Group's technical test.
* Dark and Light mode are available.

<br/>

## Setup Instructions
```bash
gii clone https://github.com/i486magzog/ddb-group-dev-test-2025.git
cd ddb-group-dev-test-2025/shinkee
npm install
npm run dev
```
<br/>

## Deployed Application
* Vercel: https://ddb-group-dev-test-2025.vercel.app

<br/>

## Extra Points
- [x] Thoughtful loading states (skeletons/spinners) and error boundaries.
  > Spinners are used for loading images on the gallery page.

  > If you want to check the error boundary and skeletons, (one of the way is to) comment out the below code in the next.config.ts file. <br/> And then move to /gallery page. Reload the page.

  ```ts
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
        }      
      ],
    },
  ```
<br/>

- [x] Implement 1–2 of the interaction ideas above using GSAP or Motion.
  > Check the below files for the implementation.
  ```
  /src/components/pages/home/floating-photos.tsx
  /src/components/pages/nav-bar/kebab-menu.tsx
  ```
<br/>


- [x] Deploy the application (e.g., Vercel) and include a link.
  > https://ddb-group-dev-test-2025.vercel.app

<br/>


- [x] Performance care (code‑splitting, image optimization, avoiding layout thrash).
  > Used next/react Image component for image optimization and tried to avoid layout thrash and did code‑splitting.

<br/>



- [-] Accessibility (keyboard navigation, ARIA where appropriate, prefers-reduced-motion). 
  > I still don’t fully understand where to add ARIA and keyboard navigation so they’re helpful in real use. I need to study this more.

  > For prefers-reduced-motion, you can see the before/after on the Home page: the kids’ photos that pop in, and the “shiny” effect when you hover over product images in the Trending Products and New Arrivals sections. Please refer to ReducedMotionProvider and globals.css.
  ```
  /src/providers/motion-provider.tsx
  /src/app/globals.css
  ```