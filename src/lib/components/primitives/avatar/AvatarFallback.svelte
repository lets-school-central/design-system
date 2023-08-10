<script lang="ts">
	import { melt, createAvatar } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { fallback }
	} = getContext<ReturnType<typeof createAvatar>>('melt:avatar');
</script>

<span
	use:melt={$fallback}
	class={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
	{...$$restProps}
>
	<slot />
</span>
