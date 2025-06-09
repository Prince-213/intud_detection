<script>
	import '../app.postcss';
	import { afterUpdate } from 'svelte';

	let show = false;

	afterUpdate(() => {
		show = true;
	});
</script>


<div class=" w-full h-screen">
	{#if show}
		<slot />
	{/if}
	
</div>
