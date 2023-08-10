<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	import type { DialogDescriptionProps } from './index.js';

	type $$Props = DialogDescriptionProps;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { description }
	} = getContext<ReturnType<typeof createDialog>>('melt:dialog');
</script>

<div
	use:melt={$description}
	class={cn('text-sm text-muted-foreground', className)}
	{...$$restProps}
>
	<slot />
</div>
