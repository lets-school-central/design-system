<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Avatar from '$components/ui/avatar/Avatar.svelte';
</script>

<Meta title="Avatar" component={Avatar} />

<Template let:args>
	<Avatar {...args} />
</Template>

<Story name="Example" source let:AvatarImage let:AvatarFallback>
	<AvatarImage src="https://randomuser.me/api/portraits/women/33.jpg" />
	<AvatarFallback>👩‍💻</AvatarFallback>
</Story>
