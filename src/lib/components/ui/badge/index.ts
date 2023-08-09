import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
	'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
	{
		variants: {
			variant: {
				primary: 'bg-primary border-transparent text-primary-foreground',
				secondary: 'bg-secondary border-transparent text-secondary-foreground',
				destructive: 'bg-destructive border-transparent text-destructive-foreground',
				outline: 'text-foreground'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

export const badgeLinkVariants = cva(
	'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				primary: 'hover:bg-primary/80',
				secondary: 'hover:bg-secondary/80 ',
				destructive: 'hover:bg-destructive/80 ',
				outline: ''
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];

export { default as Badge } from './Badge.svelte';
