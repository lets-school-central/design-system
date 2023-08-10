<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		level: 3
	} as const;
</script>

<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';
	import { cn } from '$lib/utils.js';
	import { accordionContextKey } from './Accordion.svelte';
	import { accordionItemContextKey } from './AccordionItem.svelte';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { HeadingLevel } from '$lib/types.js';
	import type { AccordionItemBaseProps } from './AccordionItem.svelte';

	type $$Props = { level?: HeadingLevel } & HTMLButtonAttributes;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = DEFAULT_PROPS.level;

	const {
		elements: { heading, trigger }
	} = getContext<ReturnType<typeof createAccordion>>(accordionContextKey);
	const item = getContext<AccordionItemBaseProps>(accordionItemContextKey);
</script>

<div use:melt={$heading(level ?? DEFAULT_PROPS.level)} class="flex" {...$$restProps}>
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
