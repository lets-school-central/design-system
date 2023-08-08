<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from '$components/ui/button/Button.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		variant: {
			options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
			control: { type: 'select' }
		},
		size: {
			options: ['sm', 'md', 'lg', 'icon'],
			control: { type: 'select' }
		},
		href: { control: 'text' },
		class: { control: 'text' },
		type: { control: 'text' },
		disabled: { control: 'boolean' }
	}}
/>

<Template let:args>
	<Button {...args} on:click={handleClick}>
		You clicked: {count}
	</Button>
</Template>

<Story name="Example" args={{ variant: 'primary', size: 'md' }} />
