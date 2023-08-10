<script lang="ts" context="module">
	export type AccordionItemBaseProps = { value: string; disabled?: boolean };

	export const accordionItemContextKey = Symbol('melt:accordion:item');

	const DEFAULT_PROPS = {
		disabled: false
	} as const;
</script>

<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';
	import { cn } from '$lib/utils.js';
	import AccordionHeader from './AccordionHeader.svelte';
	import AccordionContent from './AccordionContent.svelte';
	import { accordionContextKey } from './Accordion.svelte';

	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = AccordionItemBaseProps & HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: $$Props['value'];
	export let disabled: $$Props['disabled'] = DEFAULT_PROPS.disabled;

	const {
		elements: { item }
	} = getContext<ReturnType<typeof createAccordion>>(accordionContextKey);

	setContext(accordionItemContextKey, { value, disabled });
</script>

<div use:melt={$item({ value, disabled })} class={cn('border-b', className)} {...$$restProps}>
	<slot {AccordionHeader} {AccordionContent} />
</div>
