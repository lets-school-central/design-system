<script lang="ts" context="module">
	const DEFAULT_PROPS = {
		ratio: 4 / 3
	} as const;
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';

	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = {
		ratio: number;
	} & HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let ratio: $$Props['ratio'] = DEFAULT_PROPS.ratio;
</script>

<div class="relative w-full" style:padding-bottom="{100 / ratio}%">
	<div class={cn('absolute top-0 right-0 bottom-0 left-0', className)} {...$$restProps}>
		<slot />
	</div>
</div>
