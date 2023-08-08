<script lang="ts">
	import AvatarImage from './AvatarImage.svelte';
	import AvatarFallback from './AvatarFallback.svelte';

	import { createAvatar } from '@melt-ui/svelte';
	import type { AvatarProps } from './index.js';
	import { cn } from '$lib/utils.js';
	import { setContext } from 'svelte';

	type $$Props = AvatarProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let delayMs: $$Props['delayMs'] = undefined;
	export let loadingStatus: $$Props['loadingStatus'] = undefined;

	const {
		elements: { image, fallback },
		states: { loadingStatus: localLoadingStatus },
		options
	} = createAvatar({
		src: '',
		delayMs,
		onLoadingStatusChange: ({ next }) => {
			loadingStatus = next;
			return next;
		}
	});

	setContext('AVATAR_IMAGE', { image, options });
	setContext('AVATAR_FALLBACK', { fallback });

	$: loadingStatus !== undefined && localLoadingStatus.set(loadingStatus);
	$: options.delayMs.set(delayMs);
</script>

<div
	class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
	{...$$restProps}
>
	<slot {AvatarImage} {AvatarFallback} />
</div>
