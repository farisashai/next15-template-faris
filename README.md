This is a custom Next.js 15 template that I've refined over the past few years of working with a
similar tech stack on countless projects since Next.js 12. It fully supports all newly released
features and makes setup as accessible and intuitive as possible.

To use this template for a new project, all you have to do is add the example argument to your
standard create-next-app command `--example https://github.com/farisashai/next15-template-faris`

```bash
npx create-next-app@latest my-project --example https://github.com/farisashai/next15-template-faris
# or
yarn create next-app my-project --example https://github.com/farisashai/next15-template-faris
# or
pnpm create next-app my-project --example https://github.com/farisashai/next15-template-faris
# or
bunx create-next-app my-project --example https://github.com/farisashai/next15-template-faris
```

The main highlights here compared to standard Next.js bootstraping are

- TypeScript support (JavaScript Superset)
- SASS (CSS Superset)
- CSS Modules (Avoid Conflicting Class Names)
- Typed CSS Modules (Typescript Validation for SCSS!)
- `reset.scss` Style Sheet (Cross-Browser Standardization)
- Pre-defined folder structure (Clearly Organizing Pages, Business Logic, Pure Components, Custom
  Components, Styles)
- VSCode Recommended Extensions `.vscode/extensions.json` (Opening a repo for the first time will
  provide a quick popup helping you set up recommended extensions)
- Industry Standard TypeScript Linting (AirBnb Style Guide)
- SCSS Linting
- Modified `yarn dev` script (Runs linting and SCSS type generation in development to prevent missed
  errors)
- Prettier Auto-Formatting and Auto-Fixing Linting Issues

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the
file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to
automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback
and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
