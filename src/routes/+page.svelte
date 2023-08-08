<script>
	import Button from '$components/ui/button/Button.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import Avatar from '$components/ui/avatar/Avatar.svelte';

	let labelText = 'Hello world';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button
	on:click={() => {
		labelText = 'Clicked';
	}}>Click me</Button
>
<Label>{labelText}</Label>
<Avatar let:AvatarImage let:AvatarFallback>
	<AvatarImage src="https://randomuser.me/api/portraits/women/33.jpg" />
	<AvatarFallback>👩‍💻</AvatarFallback>
</Avatar>
