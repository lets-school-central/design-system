<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';
	import { Check, Minus } from 'lucide-svelte';
	import { cn } from '$lib/utils.js';
	import type { CheckboxProps } from './index.js';

	type $$Props = CheckboxProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let checked: CheckboxProps['checked'] = 'indeterminate';
	export let disabled: CheckboxProps['disabled'] = undefined;
	export let name: CheckboxProps['name'] = undefined;
	export let required: CheckboxProps['required'] = undefined;
	export let value: CheckboxProps['value'] = undefined;

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

	$: options.disabled.set(disabled ?? false);
	$: options.name.set(name);
	$: options.required.set(required ?? false);
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
