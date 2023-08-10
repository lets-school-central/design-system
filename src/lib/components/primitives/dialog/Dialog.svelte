<script lang="ts">
	import DialogTrigger from '$components/primitives/dialog/DialogTrigger.svelte';
	import DialogContent from '$components/primitives/dialog/DialogContent.svelte';

	import { createDialog } from '@melt-ui/svelte';
	import { setContext } from 'svelte';

	import type { DialogProps } from './index.js';

	const DEFAULT_PREVENT_SCROLL = true;
	const DEFAULT_CLOSE_ON_ESCAPE = true;
	const DEFAULT_CLOSE_ON_OUTSIDE_CLICK = true;
	const DEFAULT_PORTAL = null;
	const DEFAULT_FORCE_VISIBLE = false;

	type $$Props = DialogProps;

	export let preventScroll: $$Props['preventScroll'] = undefined;
	export let closeOnEscape: $$Props['closeOnEscape'] = undefined;
	export let closeOnOutsideClick: $$Props['closeOnOutsideClick'] = undefined;
	export let portal: $$Props['portal'] = undefined;
	export let forceVisible: $$Props['forceVisible'] = undefined;
	export let open: $$Props['open'] = undefined;

	const dialog = createDialog({
		preventScroll,
		closeOnEscape,
		closeOnOutsideClick,
		portal,
		forceVisible,
		defaultOpen: open ?? false,
		onOpenChange: ({ next }) => {
			if (open !== undefined) open.set(next);
			return next;
		}
	});
	setContext('melt:dialog', dialog);
	const {
		states: { open: localOpen },
		options
	} = dialog;

	$: open !== undefined && localOpen.set(open);

	$: options.preventScroll.set(preventScroll ?? DEFAULT_PREVENT_SCROLL);
	$: options.closeOnEscape.set(closeOnEscape ?? DEFAULT_CLOSE_ON_ESCAPE);
	$: options.closeOnOutsideClick.set(closeOnOutsideClick ?? DEFAULT_CLOSE_ON_OUTSIDE_CLICK);
	$: options.portal.set(portal ?? DEFAULT_PORTAL);
	$: options.forceVisible.set(forceVisible ?? DEFAULT_FORCE_VISIBLE);
</script>

<slot {DialogTrigger} {DialogContent} />
