<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Label from '$components/primitives/label/Label.svelte';
</script>

<Meta title="Label" component={Label} />

<Template let:args>
	<Label {...args} />
</Template>

<Story name="Example">Email</Story>
