<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { alertDialogContextKey } from './AlertDialog.svelte';
	import AlertDialogHeader from './AlertDialogHeader.svelte';
	import AlertDialogFooter from './AlertDialogFooter.svelte';

	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };

	const {
		elements: { content, overlay, portalled },
		states: { open }
	} = getContext<ReturnType<typeof createDialog>>(alertDialogContextKey);
</script>

<div use:melt={$portalled}>
	{#if $open}
		<div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
			<div
				use:melt={$overlay}
				class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in"
			/>
			<div
				use:melt={$content}
				class={cn(
					'fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full',
					className
				)}
				{...$$restProps}
			>
				<slot {AlertDialogHeader} {AlertDialogFooter} />
			</div>
		</div>
	{/if}
</div>
