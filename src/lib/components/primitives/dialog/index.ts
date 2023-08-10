import type { CreateDialogProps } from '@melt-ui/svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { HeadingLevel } from '$lib/types.js';
import type { ButtonProps } from '$components/primitives/button/index.js';

export type DialogProps = Omit<CreateDialogProps, 'role'> & {
	open?: CreateDialogProps['defaultOpen'];
};

export type DialogTriggerProps = ButtonProps;

export type DialogContentProps = HTMLAttributes<HTMLDivElement>;
export type DialogDescriptionProps = HTMLAttributes<HTMLDivElement>;
export type DialogTitleProps = HTMLAttributes<HTMLHeadingElement> & {
	level?: HeadingLevel;
};
export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export { default as Dialog } from './Dialog.svelte';
