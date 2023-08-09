<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';

	import type { AccordionContentProps, AccordionItemBaseProps } from './index.js';

	type $$Props = AccordionContentProps;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { content },
		helpers: { isSelected }
	} = getContext<ReturnType<typeof createAccordion>>('melt:accordion');
	const item = getContext<AccordionItemBaseProps>('melt:accordion:item');
</script>

{#if $isSelected(item.value)}
	<div
		use:melt={$content(item)}
		class={cn('overflow-hidden text-sm ', className)}
		transition:slide
		{...$$restProps}
	>
		<div class="pb-4 pt-0">
			<slot />
		</div>
	</div>
{/if}
