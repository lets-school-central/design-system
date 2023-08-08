<script lang="ts">
	import { createAvatar, melt } from '@melt-ui/svelte';
	import type { AvatarImageProps } from './index.js';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';

	type $$Props = AvatarImageProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let src: $$Props['src'] = undefined;
	export let alt: $$Props['alt'] = undefined;

	const { image, options } = getContext<{
		image: ReturnType<typeof createAvatar>['elements']['image'];
		options: ReturnType<typeof createAvatar>['options'];
	}>('AVATAR');
	$: if (src) options.src.set(src);
</script>

<img
	use:melt={$image}
	{alt}
	class={cn('aspect-square h-full w-full', className)}
	{...$$restProps}
/>
