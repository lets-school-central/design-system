<script lang="ts" context="module">
	export const accordionContextKey = Symbol('melt:accordion');

	const DEFAULT_PROPS = {
		multiple: false,
		disabled: false,
		value: undefined
	} as const;
</script>

<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import AccordionItem from './AccordionItem.svelte';

	import type { CreateAccordionProps } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = Omit<CreateAccordionProps, 'value' | 'defaultValue' | 'onValueChange'> & {
		value?: CreateAccordionProps['defaultValue'];
	} & HTMLAttributes<HTMLDivElement>;

	export let multiple: $$Props['multiple'] = DEFAULT_PROPS.multiple;
	export let disabled: $$Props['disabled'] = DEFAULT_PROPS.disabled;
	export let value: $$Props['value'] = DEFAULT_PROPS.value;

	const accordion = createAccordion({
		multiple,
		disabled,
		defaultValue: value,
		onValueChange: ({ next }) => {
			value = next;
			return next;
		}
	});
	setContext(accordionContextKey, accordion);
	const {
		elements: { root },
		states: { value: localValue },
		options
	} = accordion;

	$: value !== undefined && localValue.set(value);
	$: options.multiple.set(multiple ?? DEFAULT_PROPS.multiple);
	$: options.disabled.set(disabled ?? DEFAULT_PROPS.disabled);
</script>

<div use:melt={$root} {...$$restProps}>
	<slot {AccordionItem} />
</div>
