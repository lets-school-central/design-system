import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { HeadingLevel } from '$lib/types.js';

export type AccordionProps = Omit<
	CreateAccordionProps,
	'value' | 'defaultValue' | 'onValueChange'
> & {
	value?: CreateAccordionProps['defaultValue'];
} & HTMLAttributes<HTMLDivElement>;

export type AccordionItemBaseProps = { value: string; disabled?: boolean };
export type AccordionItemProps = AccordionItemBaseProps & HTMLAttributes<HTMLDivElement>;

export type AccordionHeaderProps = { level?: HeadingLevel } & HTMLButtonAttributes;

export type AccordionContentProps = HTMLAttributes<HTMLDivElement>;

export { default as Accordion } from './Accordion.svelte';
