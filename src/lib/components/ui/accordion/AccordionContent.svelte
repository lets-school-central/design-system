<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	import type { AccordionContentProps, AccordionItemBaseProps } from './index.js';
	import type { Transition } from '$lib/utils.js';

	type T = $$Generic<Transition>;
	type $$Props = AccordionContentProps<T>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let transition: $$Props['transition'] = undefined;
	export let transitionConfig: $$Props['transitionConfig'] = undefined;

	let t = transition ?? slide;

	const {
		elements: { content },
		helpers: { isSelected }
	} = getContext<ReturnType<typeof createAccordion>>('melt:accordion');
	const item = getContext<AccordionItemBaseProps>('melt:accordion:item');
</script>

{#if $isSelected(item.value)}
	<div
		use:melt={$content(item)}
		class={cn(
			'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
			className
		)}
		transition:t={transitionConfig}
		{...$$restProps}
	>
		<div class="pb-4 pt-0">
			<slot />
		</div>
	</div>
{/if}
