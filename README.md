# Let's School Central Design System

This design system is inspired by the work of [shadcn](https://ui.shadcn.com/) and [shadcn-svelte by huntabyte](https://www.shadcn-svelte.com/).

## Getting Started

### Install

```bash
pnpm add -D @lets-school-central/design-system
```

You will also need to install [melt-ui](https://www.melt-ui.com/).

### Usage

In your `tailwind.config.js` file, add the following:

```js
module.exports = {
  // ...
  content: ['./node_modules/@lets-school-central/design-system/components/**/*.{js,svelte}'],
  plugins: [require('@lets-school-central/design-system/plugin')],
  // ...
}
```

In your `src/app.postcss` file, add the following:

```postcss
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 222.2 47.4% 11.2%;

		--muted: 210 40% 96.1%;
		--muted-foreground: 215.4 16.3% 46.9%;

		--popover: 0 0% 100%;
		--popover-foreground: 222.2 47.4% 11.2%;

		--border: 214.3 31.8% 91.4%;
		--input: 214.3 31.8% 91.4%;

		--card: 0 0% 100%;
		--card-foreground: 222.2 47.4% 11.2%;

		--primary: 222.2 47.4% 11.2%;
		--primary-foreground: 210 40% 98%;

		--secondary: 210 40% 96.1%;
		--secondary-foreground: 222.2 47.4% 11.2%;

		--accent: 210 40% 96.1%;
		--accent-foreground: 222.2 47.4% 11.2%;

		--destructive: 0 92% 38%;
		--destructive-foreground: 210 40% 98%;

		--ring: 215 20.2% 65.1%;

		--radius: 0.5rem;
	}

	.dark {
		--background: 224 71% 4%;
		--foreground: 213 31% 91%;

		--muted: 223 47% 11%;
		--muted-foreground: 215.4 16.3% 56.9%;

		--accent: 216 34% 17%;
		--accent-foreground: 210 40% 98%;

		--popover: 224 71% 4%;
		--popover-foreground: 215 20.2% 65.1%;

		--border: 216 34% 17%;
		--input: 216 34% 17%;

		--card: 224 71% 4%;
		--card-foreground: 213 31% 91%;

		--primary: 210 40% 98%;
		--primary-foreground: 222.2 47.4% 1.2%;

		--secondary: 222.2 47.4% 11.2%;
		--secondary-foreground: 210 40% 98%;

		--destructive: 359 51% 48%;
		--destructive-foreground: 210 40% 98%;

		--ring: 216 34% 17%;

		--radius: 0.5rem;
	}
}

@layer base {
	* {
		@apply border-border;
	}
	body {
		@apply bg-background text-foreground;
		font-feature-settings: 'rlig' 1, 'calt' 1;
	}
}
```

You can also use the pregenerated `app.postcss` file by importing it in your `src/routes/+layout.svelte` file:

```ts
import '@lets-school-central/design-system/index.min.css';
```
