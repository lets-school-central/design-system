<script>
	import Button from '$components/ui/button/Button.svelte';
	import Avatar from '$components/ui/avatar/Avatar.svelte';
</script>

<Button variant="secondary">Click me</Button>
<Avatar let:AvatarImage let:AvatarFallback>
	<AvatarImage src="https://randomuser.me/api/portraits/women/33.jpg" />
	<AvatarFallback>👩‍💻</AvatarFallback>
</Avatar>
