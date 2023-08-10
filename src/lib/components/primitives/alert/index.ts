import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'svelte/elements';
import type { HeadingLevel } from '$lib/types.js';

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

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
	variant?: VariantProps<typeof alertVariants>['variant'];
};

export type AlertDescriptionProps = HTMLAttributes<HTMLDivElement>;

export type AlertTitleProps = HTMLAttributes<HTMLHeadingElement> & {
	level?: HeadingLevel;
};

export { default as Alert } from './Alert.svelte';
