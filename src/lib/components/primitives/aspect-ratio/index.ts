import type { HTMLAttributes } from 'svelte/elements';

export type AspectRatioProps = {
	ratio: number;
} & HTMLAttributes<HTMLDivElement>;

export { default as AspectRatio } from './AspectRatio.svelte';
