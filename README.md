# Next.js 15 - next/link Issue in Dynamic Component

This repository demonstrates a bug encountered when using `next/link` within a dynamically rendered component in Next.js 15. The link functions correctly on the initial render but breaks after a subsequent re-render.  The issue is resolved by ensuring the `href` property is a string and not a variable that may change during re-renders.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the broken link after the initial render.

## Solution

The `bugSolution.js` file shows the corrected code. The key change is using a static string for the `href` property of the `Link` component.