<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { LabelProps } from './index.js';

	const {
		elements: { root: label }
	} = createLabel();

	import { cn } from '$lib/utils.js';

	type $$Props = LabelProps;

	let className: string | undefined | null = undefined;
	export { className as class };
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
