<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { AlertTitleProps } from '$components/primitives/alert/index.js';

	type $$Props = AlertTitleProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = 5;
</script>

<svelte:element
	this={`h${level ?? 5}`}
	class={cn('mb-1 font-medium leading-none tracking-tight', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
