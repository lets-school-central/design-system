<script lang="ts">
	import { createSeparator, melt } from '@melt-ui/svelte';
	import { cn } from '$lib/utils.js';

	import type { SeparatorProps } from './index.js';

	type $$Props = SeparatorProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let orientation: $$Props['orientation'] = 'horizontal';
	export let decorative: $$Props['decorative'] = true;

	const {
		elements: { root },
		options
	} = createSeparator({ orientation, decorative });

	$: options.orientation.set(orientation ?? 'horizontal');
	$: options.decorative.set(decorative ?? true);
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
