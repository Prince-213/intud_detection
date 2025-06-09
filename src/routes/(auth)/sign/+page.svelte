<script>
	import { goto } from '$app/navigation';
	import { Label, Input, Helper } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';

	const handleSubmit = () => {};

	const toggleShow = () => {
		show = !show;
	};

	let show = false;
</script>

<div class=" lg:w-[45%] min-h-[80vh] pt-5">
	<h1 class=" text-[30px] font-medium mb-3">Sign Up</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<Label class="space-y-2">
			<Input type="email" class=" bg-emerald-50 p-4" placeholder="Enter Email" size="md" />
		</Label>
		<br />
		<Label class="space-y-2">
			<Input type="email" class=" bg-emerald-50 p-4" placeholder="Enter Username" size="md" />
		</Label>
		<br />
		<Label class="space-y-2">
			<Input type="email" class=" bg-emerald-50 p-4" placeholder="Contact Number" size="md" />
		</Label>
		<br />
		<Label class="space-y-2">
			<Input placeholder="Password" type={`${show ? 'text' : 'password'}`} class=" bg-emerald-50 p-4" size="md">
				<EyeOutline on:click={toggleShow} slot="right" class="w-5 h-5" />
			</Input>
		</Label>
		<br />
		<Label class="space-y-2">
			<Input placeholder="Confirm Password" type={`${show ? 'text' : 'password'}`} class=" bg-emerald-50 p-4" size="md">
				<EyeOutline on:click={toggleShow} slot="right" class="w-5 h-5" />
			</Input>
		</Label>
		<div class=" w-full mt-4">
			<p class=" text-gray-500 mr-0 float-right">Forgot Password?</p>
		</div>
		<br>
		<p class=" lg:hidden mt-5 text-center">

			Already have an account ? <span class=" ml-2"><a href="/sign" class=" text-green-600 font-medium">
				Login here
			</a></span>
		</p>
		<button on:click={()=> goto('/login')}
			class=" hover:shadow-sm transition-all duration-100 mt-10 text-center w-full py-4 rounded-lg font-medium shadow-xl shadow-gray-300 text-white bg-[#068353]"
		>
			Register
		</button>
	</form>
</div>
