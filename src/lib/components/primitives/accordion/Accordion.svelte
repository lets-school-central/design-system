<script lang="ts">
	import AccordionItem from './AccordionItem.svelte';

	import { createAccordion, melt } from '@melt-ui/svelte';
	import { setContext } from 'svelte';

	import type { AccordionProps } from './index.js';

	type $$Props = AccordionProps;

	export let multiple: $$Props['multiple'] = false;
	export let disabled: $$Props['disabled'] = false;
	export let value: $$Props['value'] = undefined;

	const accordion = createAccordion({
		multiple,
		disabled,
		defaultValue: value,
		onValueChange: ({ next }) => {
			value = next;
			return next;
		}
	});

	const {
		elements: { root },
		states: { value: localValue },
		options
	} = accordion;

	setContext('melt:accordion', accordion);

	$: value !== undefined && localValue.set(value);
	$: options.multiple.set(multiple ?? false);
	$: options.disabled.set(disabled ?? false);
</script>

<div use:melt={$root} {...$$restProps}>
	<slot {AccordionItem} />
</div>
