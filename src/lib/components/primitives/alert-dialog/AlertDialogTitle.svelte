<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	import type { HeadingLevel } from '$lib/types.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = { level?: HeadingLevel } & HTMLAttributes<HTMLHeadingElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = undefined;

	const {
		elements: { title }
	} = getContext<ReturnType<typeof createDialog>>('melt:alert-dialog');
</script>

<svelte:element
	this={`h${level ?? 3}`}
	use:melt={$title}
	class={cn('text-lg font-semibold', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
