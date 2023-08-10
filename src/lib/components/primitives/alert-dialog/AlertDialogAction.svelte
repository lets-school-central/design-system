<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		variant: 'primary'
	} as const;
</script>

<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import Button from '$components/primitives/button/Button.svelte';
	import { alertDialogContextKey } from './AlertDialog.svelte';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonVariant } from '$components/primitives/button/Button.svelte';

	type $$Props = HTMLButtonAttributes & {
		variant?: ButtonVariant;
	};

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = DEFAULT_PROPS.variant;

	const {
		elements: { close }
	} = getContext<ReturnType<typeof createDialog>>(alertDialogContextKey);
</script>

<div use:melt={$close}>
	<Button {variant} class={className} on:click on:mouseenter on:mouseleave {...$$restProps}>
		<slot />
	</Button>
</div>
