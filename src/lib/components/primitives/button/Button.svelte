<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { ButtonProps } from './index.js';
	import { buttonVariants } from './index.js';

	type $$Props = ButtonProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = 'primary';
	export let size: $$Props['size'] = 'md';
	export let href: $$Props['href'] = undefined;
	export let type: $$Props['type'] = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	class={cn(buttonVariants({ variant, size }), className)}
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
