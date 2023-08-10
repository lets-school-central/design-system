<script lang="ts">
	import AlertTitle from '$components/primitives/alert/AlertTitle.svelte';
	import AlertDescription from '$components/primitives/alert/AlertDescription.svelte';

	import { cn } from '$lib/utils.js';
	import { alertVariants } from './index.js';
	import type { AlertProps } from './index.js';

	type $$Props = AlertProps;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = 'default';
</script>

<div class={cn(alertVariants({ variant }), className)} role="alert" {...$$restProps}>
	<slot {AlertTitle} {AlertDescription} />
</div>
