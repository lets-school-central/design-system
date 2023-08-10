<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { AlertDescriptionProps } from '$components/primitives/alert/index.js';

	type $$Props = AlertDescriptionProps;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class={cn('text-sm [&_p]:leading-relaxed', className)} {...$$restProps}>
	<slot />
</div>
