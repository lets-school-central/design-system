import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type AccordionProps = Omit<
	CreateAccordionProps,
	'value' | 'defaultValue' | 'onValueChange'
> & {
	value?: CreateAccordionProps['defaultValue'];
} & HTMLAttributes<HTMLDivElement>;

export type AccordionItemBaseProps = { value: string; disabled?: boolean };
export type AccordionItemProps = AccordionItemBaseProps & HTMLAttributes<HTMLDivElement>;

export type AccordionHeaderProps = { level?: 1 | 2 | 3 | 4 | 5 | 6 } & HTMLButtonAttributes;

export type AccordionContentProps = HTMLAttributes<HTMLDivElement>;

export { default as Accordion } from './Accordion.svelte';
