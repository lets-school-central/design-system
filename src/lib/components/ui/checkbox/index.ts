import type { CreateCheckboxProps } from '@melt-ui/svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

export type CheckboxProps = Omit<
	CreateCheckboxProps,
	'checked' | 'defaultChecked' | 'onCheckedChange'
> & {
	checked?: CreateCheckboxProps['defaultChecked'];
} & HTMLButtonAttributes;

export { default as Checkbox } from './Checkbox.svelte';
