<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		level: 3
	} as const;
</script>

<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { alertDialogContextKey } from './AlertDialog.svelte';

	import type { HeadingLevel } from '$lib/types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = { level?: HeadingLevel } & HTMLAttributes<HTMLHeadingElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = DEFAULT_PROPS.level;

	const {
		elements: { title }
	} = getContext<ReturnType<typeof createDialog>>(alertDialogContextKey);
</script>

<svelte:element
	this={`h${level ?? DEFAULT_PROPS.level}`}
	use:melt={$title}
	class={cn('text-lg font-semibold', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
