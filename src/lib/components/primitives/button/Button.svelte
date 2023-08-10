<script lang="ts" context="module">
	import { cva } from 'class-variance-authority';

	import type { VariantProps } from 'class-variance-authority';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export const buttonVariants = cva(
		'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				variant: {
					primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
					destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
					outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary underline-offset-4 hover:underline'
				},
				size: {
					sm: 'h-9 rounded-md px-3',
					md: 'h-10 px-4 py-2',
					lg: 'h-11 rounded-md px-8',
					icon: 'h-10 w-10'
				}
			},
			defaultVariants: {
				variant: 'primary',
				size: 'md'
			}
		}
	);

	interface AnchorElement extends HTMLAnchorAttributes {
		href?: HTMLAnchorAttributes['href'];
		type?: never;
	}

	interface ButtonElement extends HTMLButtonAttributes {
		type?: HTMLButtonAttributes['type'];
		href?: never;
	}

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	export type ButtonProps = (AnchorElement | ButtonElement) & {
		variant?: ButtonVariant;
		size?: ButtonSize;
	};

	const DEFAULT_PROPS = {
		variant: 'primary',
		size: 'md',
		href: undefined,
		type: undefined
	} as const;
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';

	type $$Props = ButtonProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = DEFAULT_PROPS.variant;
	export let size: $$Props['size'] = DEFAULT_PROPS.size;
	export let href: $$Props['href'] = DEFAULT_PROPS.href;
	export let type: $$Props['type'] = DEFAULT_PROPS.type;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	class={cn(
		buttonVariants({ variant: variant ?? DEFAULT_PROPS.variant, size: size ?? DEFAULT_PROPS.size }),
		className
	)}
	type={href ? undefined : type}
	{href}
	role={href ? 'button' : undefined}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	tabindex="0"
	{...$$restProps}
>
	<slot />
</svelte:element>
