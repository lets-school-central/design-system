<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils.js';
	import { accordionContextKey } from './Accordion.svelte';
	import { accordionItemContextKey } from './AccordionItem.svelte';

	import type { HTMLAttributes } from 'svelte/elements';
	import type { AccordionItemBaseProps } from './AccordionItem.svelte';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { content },
		helpers: { isSelected }
	} = getContext<ReturnType<typeof createAccordion>>(accordionContextKey);
	const item = getContext<AccordionItemBaseProps>(accordionItemContextKey);
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
