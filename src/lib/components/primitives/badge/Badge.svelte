<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { badgeLinkVariants, badgeVariants } from './index.js';
	import type { BadgeVariant } from './index.js';
	import { cx } from 'class-variance-authority';

	export let href: string | undefined = undefined;
	export let variant: BadgeVariant = 'primary';

	let className: string | undefined = undefined;
	export { className as class };
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(cx(badgeVariants({ variant }), href && badgeLinkVariants({ variant })), className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
