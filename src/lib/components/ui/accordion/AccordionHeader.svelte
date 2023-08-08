<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';

	import type { AccordionHeaderProps, AccordionItemBaseProps } from './index.js';

	type $$Props = AccordionHeaderProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = undefined;

	const {
		elements: { heading, trigger }
	} = getContext<ReturnType<typeof createAccordion>>('melt:accordion');
	const item = getContext<AccordionItemBaseProps>('melt:accordion:item');
</script>

<div use:melt={$heading(level ?? 3)} class="flex" {...$$restProps}>
	<button
		use:melt={$trigger(item)}
		class={cn(
			'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
			className
		)}
		on:m-click
		on:m-keydown
		{...$$restProps}
	>
		<slot />
		<ChevronDown class="h-4 w-4 transition-transform duration-200" />
	</button>
</div>
