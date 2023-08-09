<script>
	import Button from '$components/ui/button/Button.svelte';
	import Label from '$components/ui/label/Label.svelte';
	import Avatar from '$components/ui/avatar/Avatar.svelte';
	import Accordion from '$components/primitives/accordion/Accordion.svelte';
	import Checkbox from '$components/ui/checkbox/Checkbox.svelte';
	import Badge from '$components/ui/badge/Badge.svelte';
	import AspectRatio from '$components/ui/aspect-ratio/AspectRatio.svelte';

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

<Accordion class="w-full" let:AccordionItem>
	<AccordionItem value="item-1" let:AccordionHeader let:AccordionContent>
		<AccordionHeader>Is it accessible?</AccordionHeader>
		<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-2" let:AccordionHeader let:AccordionContent>
		<AccordionHeader>Is it styled?</AccordionHeader>
		<AccordionContent>
			Yes. It comes with default styles that matches the other components' aesthetic.
		</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-3" let:AccordionHeader let:AccordionContent>
		<AccordionHeader>Is it animated?</AccordionHeader>
		<AccordionContent>
			Yes. It's animated by default, but you can disable it if you prefer.
		</AccordionContent>
	</AccordionItem>
</Accordion>

<Checkbox />

<Badge>badge</Badge>
<Badge href="/">badge with link</Badge>

<AspectRatio ratio={16 / 9} class="bg-muted">
	<img
		src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
		alt="Gray by Drew Beamer"
		class="rounded-md object-cover h-full w-full"
	/>
</AspectRatio>
