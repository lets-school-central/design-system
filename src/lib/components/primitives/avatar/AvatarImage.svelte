<script lang="ts">
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';

	import type { HTMLImgAttributes } from 'svelte/elements';

	type $$Props = {
		src: string;
		alt: string;
	} & Omit<HTMLImgAttributes, 'src' | 'alt'>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let src: $$Props['src'];
	export let alt: $$Props['alt'];

	const {
		elements: { image },
		options
	} = getContext<ReturnType<typeof createAvatar>>('melt:avatar');

	$: src !== undefined && options.src.set(src);
</script>

<img
	use:melt={$image}
	{alt}
	class={cn('aspect-square h-full w-full', className)}
	{...$$restProps}
/>
