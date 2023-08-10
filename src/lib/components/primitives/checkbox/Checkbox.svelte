<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		checked: 'indeterminate',
		disabled: false,
		required: false,
		value: undefined
	} as const;
</script>

<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';
	import { Check, Minus } from 'lucide-svelte';
	import { cn } from '$lib/utils.js';

	import type { CreateCheckboxProps } from '@melt-ui/svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = {
		name: string;
		checked?: CreateCheckboxProps['defaultChecked'];
	} & Omit<CreateCheckboxProps, 'checked' | 'defaultChecked' | 'onCheckedChange' | 'name'> &
		HTMLButtonAttributes;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let checked: $$Props['checked'] = DEFAULT_PROPS.checked;
	export let disabled: $$Props['disabled'] = DEFAULT_PROPS.disabled;
	export let name: $$Props['name'];
	export let required: $$Props['required'] = DEFAULT_PROPS.required;
	export let value: $$Props['value'] = DEFAULT_PROPS.value;

	const {
		elements: { root, input },
		states: { checked: localChecked },
		helpers: { isChecked, isIndeterminate },
		options
	} = createCheckbox({
		defaultChecked: checked,
		disabled,
		name,
		required,
		value,
		onCheckedChange: ({ next }) => {
			checked = next;
			return next;
		}
	});

	$: checked !== undefined && localChecked.set(checked);
	$: options.disabled.set(disabled ?? DEFAULT_PROPS.disabled);
	$: name !== undefined && options.name.set(name);
	$: options.required.set(required ?? DEFAULT_PROPS.required);
	$: options.value.set(value);
</script>

<button
	use:melt={$root}
	class={cn(
		'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
		className
	)}
	{...$$restProps}
>
	<span class="flex items-center justify-center text-current">
		{#if $isChecked}
			<Check class="h-4 w-4" />
		{:else if $isIndeterminate}
			<Minus class="h-4 w-4" />
		{:else}
			<span class="h-4 w-4" />
		{/if}
	</span>
	<input use:melt={$input} />
</button>
