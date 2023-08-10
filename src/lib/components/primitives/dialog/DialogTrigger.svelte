<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import Button from '$components/primitives/button/Button.svelte';

	import type { DialogTriggerProps } from './index.js';

	type $$Props = DialogTriggerProps;

	const {
		elements: { trigger }
	} = getContext<ReturnType<typeof createDialog>>('melt:dialog');
</script>

<div use:melt={$trigger}>
	<Button {...$$restProps}>
		<slot />
	</Button>
</div>
