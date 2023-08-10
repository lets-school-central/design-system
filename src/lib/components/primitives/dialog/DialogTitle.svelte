<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	import type { DialogTitleProps } from './index.js';

	type $$Props = DialogTitleProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: $$Props['level'] = 2;

	const {
		elements: { title }
	} = getContext<ReturnType<typeof createDialog>>('melt:dialog');
</script>

<svelte:element
	this={`h${level ?? 2}`}
	class={cn('text-lg font-semibold leading-none tracking-tight', className)}
	use:melt={$title}
	{...$$restProps}
>
	<slot />
</svelte:element>
