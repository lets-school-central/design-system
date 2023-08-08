import type { CreateAvatarProps } from '@melt-ui/svelte';
import type { HTMLImgAttributes, HTMLAttributes } from 'svelte/elements';

export type AvatarProps = {
	delayMs?: CreateAvatarProps['delayMs'];
} & HTMLAttributes<HTMLDivElement>;

export type AvatarImageProps = HTMLImgAttributes;

export type AvatarFallbackProps = HTMLAttributes<HTMLSpanElement>;

export { default as Avatar } from './Avatar.svelte';
