<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';

	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { description }
	} = getContext<ReturnType<typeof createDialog>>('melt:alert-dialog');
</script>

<div
	use:melt={$description}
	class={cn('text-sm text-muted-foreground', className)}
	{...$$restProps}
>
	<slot />
</div>
