<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		orientation: 'horizontal',
		decorative: true
	} as const;
</script>

<script lang="ts">
	import { createSeparator, melt } from '@melt-ui/svelte';
	import { cn } from '$lib/utils.js';

	import type { CreateSeparatorProps } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = CreateSeparatorProps & HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let orientation: $$Props['orientation'] = DEFAULT_PROPS.orientation;
	export let decorative: $$Props['decorative'] = DEFAULT_PROPS.decorative;

	const {
		elements: { root },
		options
	} = createSeparator({ orientation, decorative });

	$: options.orientation.set(orientation ?? DEFAULT_PROPS.orientation);
	$: options.decorative.set(decorative ?? DEFAULT_PROPS.decorative);
</script>

<div
	use:melt={$root}
	class={cn(
		'shrink-0 bg-border',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
		className
	)}
	{...$$restProps}
/>
