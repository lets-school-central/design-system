<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import { setContext } from 'svelte';

	import type { CreateDialogProps } from '@melt-ui/svelte';

	import AlertDialogContent from './AlertDialogContent.svelte';
	import AlertDialogTrigger from './AlertDialogTrigger.svelte';

	const DEFAULT_PREVENT_SCROLL = true;
	const DEFAULT_CLOSE_ON_ESCAPE = true;
	const DEFAULT_CLOSE_ON_OUTSIDE_CLICK = false;
	const DEFAULT_FORCE_VISIBLE = false;
	const DEFAULT_OPEN = false;

	type $$Props = Omit<
		CreateDialogProps,
		'role' | 'open' | 'defaultOpen' | 'onOpenChange' | 'portal'
	> & {
		open?: CreateDialogProps['defaultOpen'];
	};

	export let preventScroll: $$Props['preventScroll'] = DEFAULT_PREVENT_SCROLL;
	export let closeOnEscape: $$Props['closeOnEscape'] = DEFAULT_CLOSE_ON_ESCAPE;
	export let closeOnOutsideClick: $$Props['closeOnOutsideClick'] = DEFAULT_CLOSE_ON_OUTSIDE_CLICK;
	export let forceVisible: $$Props['forceVisible'] = DEFAULT_FORCE_VISIBLE;
	export let open: $$Props['open'] = DEFAULT_OPEN;

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
	setContext('melt:alert-dialog', dialog);
	const {
		states: { open: localOpen },
		options
	} = dialog;

	$: open !== undefined && localOpen.set(open);

	$: options.preventScroll.set(preventScroll ?? DEFAULT_PREVENT_SCROLL);
	$: options.closeOnEscape.set(closeOnEscape ?? DEFAULT_CLOSE_ON_ESCAPE);
	$: options.closeOnOutsideClick.set(closeOnOutsideClick ?? DEFAULT_CLOSE_ON_OUTSIDE_CLICK);
	$: options.forceVisible.set(forceVisible ?? DEFAULT_FORCE_VISIBLE);
</script>

<slot {AlertDialogContent} {AlertDialogTrigger} />
