# ESLint Issue

A Vite + React project with TanStack Router.

## Prerequisites

- Node.js (v22 or higher recommended)
- npm (comes with Node.js)

## Installation

Install the project dependencies:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

The development server will start and you can access the application in your browser at the URL shown in the terminal (typically `http://localhost:3000`).


## Reproduction of ESLint issue

Install Cursor 2.0.60 or higher which uses node@22 or higher for running ESLint in Cursor.

Open `src/routes/__root.tsx` in Cursor and you should see issues in the "Problems" pain and saving it should order both the tailwind classes and imports.
If not check the "ESLint" logs in the "Output" panel for the error:
>  Unexpected module status 0. Cannot require() ES Module