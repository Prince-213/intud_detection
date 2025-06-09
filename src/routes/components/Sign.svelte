<script lang="ts">
	import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>

<div class="space-y-4 md:space-y-6 sm:p-4 sm:pt-0">
	<p class=" mt-5">
		Please proceed to sign Up in your activity will be checked to detect cyber threat.
	</p>
    <Label class="space-y-2">
		<span>Your username</span>
		<Input type="text" name="username" placeholder="John Doe" required />
	</Label>
	<Label class="space-y-2">
		<span>Your email</span>
		<Input type="email" name="email" placeholder="name@company.com" required />
	</Label>
    <Label class="space-y-2">
		<span>Your password</span>
		<Input type="password" name="conpass" placeholder="•••••" required />
	</Label>
	<Label class="space-y-2">
		<span>Your confirm password</span>
		<Input type="password" name="password" placeholder="•••••" required />
	</Label>
	
	<Button
		type="submit"
		class="w-full bg-primary-50 hover:text-black hover:bg-orange-100 hover:text-stone-5"
		>Sign up</Button
	>
	
</div>
