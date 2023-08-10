<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		variant: 'outline'
	} as const;
</script>

<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { dialogContextKey } from './Dialog.svelte';
	import Button from '$components/primitives/button/Button.svelte';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonVariant } from '$components/primitives/button/Button.svelte';

	type $$Props = HTMLButtonAttributes & {
		variant?: ButtonVariant;
	};

	export let variant: $$Props['variant'] = DEFAULT_PROPS.variant;

	const {
		elements: { trigger }
	} = getContext<ReturnType<typeof createDialog>>(dialogContextKey);
</script>

<div use:melt={$trigger}>
	<Button {variant} {...$$restProps}>
		<slot />
	</Button>
</div>
