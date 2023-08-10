<script lang="ts" context="module">
	import { cva } from 'class-variance-authority';

	import type { VariantProps } from 'class-variance-authority';

	export const toggleVariants = cva(
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors data-[state=on]:bg-accent data-[state=on]:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background hover:bg-muted hover:text-muted-foreground',
		{
			variants: {
				variant: {
					default: 'bg-transparent',
					outline: 'bg-transparent border border-input hover:bg-accent hover:text-accent-foreground'
				},
				size: {
					default: 'h-10 px-3',
					sm: 'h-9 px-2.5',
					lg: 'h-11 px-5'
				}
			}
		}
	);

	export type ToggleVariant = VariantProps<typeof toggleVariants>['variant'];
	export type ToggleSize = VariantProps<typeof toggleVariants>['size'];

	const DEFAULT_PROPS = {
		variant: 'default',
		size: 'default',
		disabled: false
	} as const;
</script>

<script lang="ts">
	import { createToggle, melt } from '@melt-ui/svelte';
	import { cn } from '$lib/utils.js';

	import type { CreateToggleProps } from '@melt-ui/svelte';

	type $$Props = Omit<CreateToggleProps, 'pressed' | 'defaultPressed' | 'onPressedChange'> & {
		pressed?: CreateToggleProps['defaultPressed'];
		variant?: ToggleVariant;
		size?: ToggleSize;
	};

	let className: string | undefined | null = undefined;
	export { className as class };
	export let variant: $$Props['variant'] = DEFAULT_PROPS.variant;
	export let size: $$Props['size'] = DEFAULT_PROPS.size;
	export let pressed: $$Props['pressed'] = undefined;
	export let disabled: $$Props['disabled'] = DEFAULT_PROPS.disabled;

	const {
		elements: { root },
		states: { pressed: localPressed },
		options
	} = createToggle({
		disabled,
		defaultPressed: pressed,
		onPressedChange: ({ next }) => {
			pressed = next;
			return next;
		}
	});

	$: pressed !== undefined && localPressed.set(pressed);
	$: options.disabled.set(disabled ?? DEFAULT_PROPS.disabled);
</script>

<button
	use:melt={$root}
	class={cn(
		toggleVariants({ variant: variant ?? DEFAULT_PROPS.variant, size: size ?? DEFAULT_PROPS.size }),
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
