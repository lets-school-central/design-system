import type { HTMLDivAttributes, HTMLSpanAttributes } from '$internal/types.js';
import type { HTMLImgAttributes } from 'svelte/elements';
import type { CreateAvatarProps } from '@melt-ui/svelte';

export type AvatarProps = {
	loadingStatus?: 'loading' | 'loaded' | 'error';
	delayMs?: CreateAvatarProps['delayMs'];
} & HTMLDivAttributes;

export type AvatarImageProps = HTMLImgAttributes;

export type AvatarFallbackProps = HTMLSpanAttributes;

export { default as Avatar } from './Avatar.svelte';
