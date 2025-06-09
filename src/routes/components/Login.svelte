<script lang="ts">
	import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
</script>

<div class="space-y-4  sm:pt-0">
	<p class=" mt-5">
		Please proceed to login in your activity will be checked to detect cyber threat.
	</p>
	<Label class="space-y-2">
		<span>Your email</span>
		<Input type="email" name="email" placeholder="name@company.com" required />
	</Label>
	<Label class="space-y-2">
		<span>Your password</span>
		<Input type="password" name="password" placeholder="•••••" required />
	</Label>
	<div class="flex items-start">
		<Checkbox>Remember me</Checkbox>
		<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
			>Forgot password?</a
		>
	</div>
	<Button
		type="submit"
        on:click={() => {goto('/dashboard')}}
		class="w-full bg-primary-50 hover:text-black hover:bg-orange-100 hover:text-stone-5"
		>Sign in</Button
	>
	<p class="text-sm font-light text-gray-500 dark:text-gray-400">
		Don’t have an account yet? <a
			href="/"
			class="font-medium text-stone-500 hover:underline dark:text-primary-500">Login</a
		>
	</p>
</div>
