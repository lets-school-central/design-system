<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		level: 3
	} as const;
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';

	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from '$lib/types.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		level?: HeadingLevel;
	};

	let className: string | undefined | null = undefined;
	export { className as class };
	export let tag: $$Props['level'] = DEFAULT_PROPS.level;
</script>

<svelte:element
	this={`h${tag}`}
	class={cn('text-lg font-semibold leading-none tracking-tight', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
