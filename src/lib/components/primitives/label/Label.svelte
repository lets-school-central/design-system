<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import { cn } from '$lib/utils.js';

	import type { HTMLLabelAttributes } from 'svelte/elements';

	type $$Props = HTMLLabelAttributes;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { root: label }
	} = createLabel();
</script>

<label
	use:melt={$label}
	class={cn(
		'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		className
	)}
	{...$$restProps}
>
	<slot />
</label>
