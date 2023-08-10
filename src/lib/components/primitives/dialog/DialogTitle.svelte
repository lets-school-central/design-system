<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		level: 2
	} as const;
</script>

<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { dialogContextKey } from './Dialog.svelte';

	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from '$lib/types.js';

	type $$Props = {
		level?: HeadingLevel;
	} & HTMLAttributes<HTMLHeadingElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = DEFAULT_PROPS.level;

	const {
		elements: { title }
	} = getContext<ReturnType<typeof createDialog>>(dialogContextKey);
</script>

<svelte:element
	this={`h${level ?? DEFAULT_PROPS.level}`}
	class={cn('text-lg font-semibold leading-none tracking-tight', className)}
	use:melt={$title}
	{...$$restProps}
>
	<slot />
</svelte:element>
