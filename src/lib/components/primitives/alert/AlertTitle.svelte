<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		level: 5
	} as const;
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';

	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from '$lib/types.js';

	type $$Props = {
		level?: HeadingLevel;
	} & HTMLAttributes<HTMLHeadingElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = DEFAULT_PROPS.level;
</script>

<svelte:element
	this={`h${level ?? DEFAULT_PROPS.level}`}
	class={cn('mb-1 font-medium leading-none tracking-tight', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
