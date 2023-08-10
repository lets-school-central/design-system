<script>
	import Button from '$components/primitives/button/Button.svelte';
	import Label from '$components/primitives/label/Label.svelte';
	import Avatar from '$components/primitives/avatar/Avatar.svelte';
	import Accordion from '$components/primitives/accordion/Accordion.svelte';
	import Checkbox from '$components/primitives/checkbox/Checkbox.svelte';
	import Badge from '$components/primitives/badge/Badge.svelte';
	import AspectRatio from '$components/primitives/aspect-ratio/AspectRatio.svelte';
	import Input from '$components/primitives/input/Input.svelte';
	import Separator from '$components/primitives/separator/Separator.svelte';
	import Alert from '$components/primitives/alert/Alert.svelte';
	import Dialog from '$components/primitives/dialog/Dialog.svelte';

	import { Terminal } from 'lucide-svelte';

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

<div class="flex items-center space-x-3.5">
	<Badge>badge</Badge>
	<Badge href="/">badge with link</Badge>
</div>

<div class="max-w-2xl">
	<AspectRatio ratio={16 / 9} class="bg-muted">
		<img
			src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			alt="Gray by Drew Beamer"
			class="rounded-md object-cover h-full w-full"
		/>
	</AspectRatio>
</div>

<Input placeholder="Placeholder" />

<div>
	<div class="space-y-1">
		<h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
		<p class="text-sm text-muted-foreground">An open-source UI component library.</p>
	</div>
	<Separator class="my-4" />
	<div class="flex h-5 items-center space-x-4 text-sm">
		<div>Blog</div>
		<Separator orientation="vertical" />
		<div>Docs</div>
		<Separator orientation="vertical" />
		<div>Source</div>
	</div>
</div>

<Alert variant="destructive" let:AlertTitle let:AlertDescription>
	<Terminal class="h-4 w-4" />
	<AlertTitle>Heads up!</AlertTitle>
	<AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>

<Dialog let:DialogTrigger let:DialogContent>
	<DialogTrigger variant="outline">Edit Profile</DialogTrigger>
	<DialogContent let:DialogHeader let:DialogFooter>
		<DialogHeader let:DialogTitle let:DialogDescription>
			<DialogTitle>Edit profile</DialogTitle>
			<DialogDescription>
				Make changes to your profile here. Click save when you're done.
			</DialogDescription>
		</DialogHeader>

		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label class="text-right">Name</Label>
				<Input id="name" value="Pedro Duarte" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label class="text-right">Username</Label>
				<Input id="username" value="@peduarte" class="col-span-3" />
			</div>
		</div>

		<DialogFooter>
			<Button type="submit">Save changes</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
