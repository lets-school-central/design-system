<script lang="ts">
	import AccordionHeader from './AccordionHeader.svelte';
	import AccordionContent from './AccordionContent.svelte';

	import { cn } from '$lib/utils.js';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';

	import type { AccordionItemProps } from './index.js';

	type $$Props = AccordionItemProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: $$Props['value'];
	export let disabled: $$Props['disabled'] = undefined;

	const {
		elements: { item }
	} = getContext<ReturnType<typeof createAccordion>>('melt:accordion');

	setContext('melt:accordion:item', { value, disabled });
</script>

<div use:melt={$item({ value, disabled })} class={cn('border-b', className)} {...$$restProps}>
	<slot {AccordionHeader} {AccordionContent} />
</div>
