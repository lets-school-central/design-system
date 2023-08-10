<script lang="ts">
	import { cn } from '$lib/utils.js';
	import CardHeader from './CardHeader.svelte';
	import CardContent from './CardContent.svelte';
	import CardFooter from './CardFooter.svelte';

	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
	{...$$restProps}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
>
	<slot {CardHeader} {CardContent} {CardFooter} />
</div>
