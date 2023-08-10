<script lang="ts" context="module">
	export const alertDialogContextKey = Symbol('melt:alert-dialog');

	const DEFAULT_PROPS = {
		preventScroll: true,
		closeOnEscape: true,
		closeOnOutsideClick: false,
		forceVisible: false,
		open: false
	} as const;
</script>

<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import AlertDialogContent from './AlertDialogContent.svelte';
	import AlertDialogTrigger from './AlertDialogTrigger.svelte';

	import type { CreateDialogProps } from '@melt-ui/svelte';

	type $$Props = {
		open?: CreateDialogProps['defaultOpen'];
	} & Omit<CreateDialogProps, 'role' | 'open' | 'defaultOpen' | 'onOpenChange' | 'portal'>;

	export let preventScroll: $$Props['preventScroll'] = DEFAULT_PROPS.preventScroll;
	export let closeOnEscape: $$Props['closeOnEscape'] = DEFAULT_PROPS.closeOnEscape;
	export let closeOnOutsideClick: $$Props['closeOnOutsideClick'] =
		DEFAULT_PROPS.closeOnOutsideClick;
	export let forceVisible: $$Props['forceVisible'] = DEFAULT_PROPS.forceVisible;
	export let open: $$Props['open'] = DEFAULT_PROPS.open;

	const dialog = createDialog({
		role: 'alertdialog',
		preventScroll,
		closeOnEscape,
		closeOnOutsideClick,
		forceVisible,
		defaultOpen: open,
		onOpenChange: ({ next }) => {
			open = next;
			return next;
		}
	});
	setContext(alertDialogContextKey, dialog);
	const {
		states: { open: localOpen },
		options
	} = dialog;

	$: open !== undefined && localOpen.set(open);
	$: options.preventScroll.set(preventScroll ?? DEFAULT_PROPS.preventScroll);
	$: options.closeOnEscape.set(closeOnEscape ?? DEFAULT_PROPS.closeOnEscape);
	$: options.closeOnOutsideClick.set(closeOnOutsideClick ?? DEFAULT_PROPS.closeOnOutsideClick);
	$: options.forceVisible.set(forceVisible ?? DEFAULT_PROPS.forceVisible);
</script>

<slot {AlertDialogContent} {AlertDialogTrigger} />
