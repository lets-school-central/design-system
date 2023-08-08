<script lang="ts">
	import { melt, createAvatar } from '@melt-ui/svelte';
	import type { AvatarFallbackProps } from './index.js';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';

	type $$Props = AvatarFallbackProps;

	let className: string | undefined | null = undefined;
	export { className as class };

	const { fallback } = getContext<{
		fallback: ReturnType<typeof createAvatar>['elements']['fallback'];
	}>('AVATAR');
</script>

<span
	use:melt={$fallback}
	class={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
	{...$$restProps}
>
	<slot />
</span>
