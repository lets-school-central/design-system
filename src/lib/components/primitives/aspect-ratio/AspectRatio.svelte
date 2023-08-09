<script lang="ts">
	import { cn } from '$lib/utils.js';

	import type { AspectRatioProps } from './index.js';

	type $$Props = AspectRatioProps;

	let className: string | undefined = undefined;
	export { className as class };
	export let ratio: $$Props['ratio'] = 4 / 3;
</script>

<div class="relative w-full" style:padding-bottom="{100 / ratio}%">
	<div class={cn('absolute top-0 right-0 bottom-0 left-0', className)} {...$$restProps}>
		<slot />
	</div>
</div>
