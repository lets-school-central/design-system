import type { CreateSeparatorProps } from '@melt-ui/svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type SeparatorProps = CreateSeparatorProps & HTMLAttributes<HTMLDivElement>;

export { default as Separator } from './Separator.svelte';
