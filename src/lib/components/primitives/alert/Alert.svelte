<script lang="ts" context="module">
	import { cva } from 'class-variance-authority';

	import type { VariantProps } from 'class-variance-authority';
	import type { HTMLAttributes } from 'svelte/elements';

	export const alertVariants = cva(
		'relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
		{
			variants: {
				variant: {
					default: 'bg-background text-foreground',
					destructive:
						'text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive'
				}
			},
			defaultVariants: {
				variant: 'default'
			}
		}
	);
</script>

<script lang="ts">
	import AlertTitle from './AlertTitle.svelte';
	import AlertDescription from './AlertDescription.svelte';
	import { cn } from '$lib/utils.js';

	type $$Props = {
		variant?: VariantProps<typeof alertVariants>['variant'];
	} & HTMLAttributes<HTMLDivElement>;

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = 'default';
</script>

<div class={cn(alertVariants({ variant }), className)} role="alert" {...$$restProps}>
	<slot {AlertTitle} {AlertDescription} />
</div>
