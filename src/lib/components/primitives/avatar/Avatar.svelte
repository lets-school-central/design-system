<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		delayMs: 0
	} as const;
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { createAvatar } from '@melt-ui/svelte';
	import { cn } from '$lib/utils.js';
	import AvatarImage from './AvatarImage.svelte';
	import AvatarFallback from './AvatarFallback.svelte';

	import type { HTMLAttributes } from 'svelte/elements';
	import type { CreateAvatarProps } from '@melt-ui/svelte';

	type $$Props = {
		delayMs?: CreateAvatarProps['delayMs'];
	} & HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let delayMs: $$Props['delayMs'] = DEFAULT_PROPS.delayMs;

	const avatar = createAvatar({
		src: '',
		delayMs
	});
	setContext('melt:avatar', avatar);
	const { options } = avatar;

	$: options.delayMs.set(delayMs ?? DEFAULT_PROPS.delayMs);
</script>

<div
	class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
	{...$$restProps}
>
	<slot {AvatarImage} {AvatarFallback} />
</div>
