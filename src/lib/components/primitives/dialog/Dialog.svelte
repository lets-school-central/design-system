<script lang="ts" context="module">
	export const dialogContextKey = Symbol('melt:dialog');

	const DEFAULT_PROPS = {
		preventScroll: true,
		closeOnEscape: true,
		closeOnOutsideClick: true,
		forceVisible: false,
		open: undefined
	} as const;
</script>

<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import DialogTrigger from '$components/primitives/dialog/DialogTrigger.svelte';
	import DialogContent from '$components/primitives/dialog/DialogContent.svelte';

	import type { CreateDialogProps } from '@melt-ui/svelte';

	type $$Props = Omit<CreateDialogProps, 'role' | 'portal'> & {
		open?: CreateDialogProps['defaultOpen'];
	};

	export let preventScroll: $$Props['preventScroll'] = DEFAULT_PROPS.preventScroll;
	export let closeOnEscape: $$Props['closeOnEscape'] = DEFAULT_PROPS.closeOnEscape;
	export let closeOnOutsideClick: $$Props['closeOnOutsideClick'] =
		DEFAULT_PROPS.closeOnOutsideClick;
	export let forceVisible: $$Props['forceVisible'] = DEFAULT_PROPS.forceVisible;
	export let open: $$Props['open'] = DEFAULT_PROPS.open;

	const dialog = createDialog({
		role: 'dialog',
		preventScroll,
		closeOnEscape,
		closeOnOutsideClick,
		forceVisible,
		defaultOpen: open ?? false,
		onOpenChange: ({ next }) => {
			if (open !== undefined) open.set(next);
			return next;
		}
	});
	setContext(dialogContextKey, dialog);
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

<slot {DialogTrigger} {DialogContent} />
