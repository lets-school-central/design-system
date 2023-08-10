<script lang="ts">
	import DialogTitle from './DialogTitle.svelte';
	import DialogDescription from './DialogDescription.svelte';

	import { cn } from '$lib/utils.js';

	import type { DialogHeaderProps } from './index.js';

	type $$Props = DialogHeaderProps;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...$$restProps}>
	<slot {DialogTitle} {DialogDescription} />
</div>
