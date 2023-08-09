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
	export let delayMs: $$Props['delayMs'] = 0;

	const avatar = createAvatar({
		src: '',
		delayMs
	});
	const { options } = avatar;

	setContext('melt:avatar', avatar);

	$: options.delayMs.set(delayMs ?? 0);
</script>

<div
	class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
	{...$$restProps}
>
	<slot {AvatarImage} {AvatarFallback} />
</div>
