<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';
	import Button from '$components/primitives/button/Button.svelte';

	import type { ButtonProps } from '$components/primitives/button/index.js';

	type $$Props = ButtonProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = 'outline';

	const {
		elements: { close }
	} = getContext<ReturnType<typeof createDialog>>('melt:alert-dialog');
</script>

<div use:melt={$close}>
	<Button
		{variant}
		class={cn('mt-2 sm:mt-0', className)}
		on:click
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</Button>
</div>
