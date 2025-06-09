<script>
    import logo from '$lib/images/circle.png';
    import person from '$lib/images/3d-casual-life-man-holding-payment-terminal.png';
	import { goto } from '$app/navigation';
    import { reveal } from 'svelte-reveal';
</script>


<div class=" w-full p-5 font-clash ">
    <button on:click={() => goto('/')}>
        <div  class=" flex flex-row space-x-2 items-center">
            <img src={logo} width="20px" height="20px" alt="" />
            <h1 class=" font-clash text-[20px]">Africash</h1>
        </div>
    </button>

    <div   class=" mx-auto lg:w-[80%] w-[90%] lg:flex lg:flex-row lg:justify-between ">
        <div use:reveal={{ transition: "fade" }}  class=" hidden lg:block lg:w-[55%] pt-44 relative">
            <h1 class=" text-[50px] font-semibold">Sign in to</h1>
            <h1 class=" text-[35px]">Africash is simple to use</h1>
            <p class=" mt-5">
                If you don't have an account register 
            </p>
            <p>You can <span class=" ml-1 text-[#068353]"><a href="/sign">Register here!</a></span></p>
            <img use:reveal={{ transition: "slide" }} class=" w-[300] right-[25%] top-[50%] absolute h-[50vh]" src={person} alt="">
        </div>
        
        <slot />
    </div>
    
</div>