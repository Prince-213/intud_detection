<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import animationData from '$lib/images/Animation - 1699732843324.json';
	import logo from '$lib/images/circle.png';
	import phone from '$lib/images/Frame 144.png';
	import bigphone from '$lib/images/Group 13.png';
	import quartz from '$lib/images/Quartzlogo.png';
	import bloom from '$lib/images/bloom.png';
	import cn from '$lib/images/cnbc africa.png';
	import forbes from '$lib/images/Forbes_logo.png';
	import tech from '$lib/images/TechCrunch_logo.png';
	import phone2 from '$lib/images/Group 4.png';
	import curves from '$lib/images/curves.png';
	import person from '$lib/images/pexels-arianna-jadé-4006576.jpg';
	import person1 from '$lib/images/pexels-christina-morillo-1181424.jpg';
	import person2 from '$lib/images/pexels-jimmy-jimmy-1484806.jpg';
	import { DownloadOutline, CheckCircleOutline, QuoteSolid } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';
	import { reveal } from 'svelte-reveal';

	let animationContainer: HTMLButtonElement;

	let open = false;

/* 	const toggle = () => {
		open = !open;
		menuAnimation.setSpeed(3);
		if (open) {
			menuAnimation.goToAndPlay(0, true);
			menuAnimation.setDirection(1);
		} else {
			menuAnimation.goToAndPlay(60, true);
			menuAnimation.setDirection(-1);
		}
	}; */

	//let menuAnimation: AnimationItem;

	let lastFrame: number;

/* 	onMount(() => {
		menuAnimation = lottie.loadAnimation({
			container: animationContainer,
			animationData,
			loop: false,
			autoplay: false
		});

		lastFrame = menuAnimation.totalFrames - 1;

		menuAnimation.goToAndStop(0, true);
	}); */
</script>

<div class=" w-full overflow-x-hidden relative font-clash">
	<div
		style={`Transform: ${open ? 'translatex(0%)' : 'translatex(-100%)'} `}
		class={` side fixed z-50 h-screen shadow-xl shadow-black w-[60%] bg-[#068353]  rounded-tr-lg rounded-br-lg left-0 transition-all duration-300  top-0`}
	>
		<ul class=" text-white w-[85%] mx-auto space-y-8 pt-10">
			<p class=" border-b pb-1 border-white cursor-pointer hover:font-semibold transition-all duration-100">Home</p>
			<p class=" border-b pb-1 border-white cursor-pointer hover:font-semibold transition-all duration-100">About</p>
			<p class=" border-b pb-1 border-white cursor-pointer hover:font-semibold transition-all duration-100">Features</p>
			<p class=" border-b pb-1 border-white cursor-pointer hover:font-semibold transition-all duration-100">Testimonials</p>
			<p class=" border-b pb-1 border-white cursor-pointer hover:font-semibold transition-all duration-100">Contact Us</p>
			<div class=" space-x-8 mt-5">
				<button on:click={() => goto('/login')} class=" hover:shadow-xl px-5 py-2 border border-white rounded-full">Login</button>
				<button on:click={() => goto('/sign')} class=" hover:shadow-xl px-5 py-2 border border-white rounded-full">Sign up</button>
			</div>
		</ul>
	</div>
	<div class=" flex flex-row justify-between items-center p-[25px] shadow-lg">
		<button on:click={() => goto('/')}>
			<div  class=" flex flex-row space-x-2 items-center">
				<img src={logo} width="20px" height="20px" alt="" />
				<h1 class=" font-clash text-[20px]">Africash</h1>
			</div>
		</button>
		

		<!-- <button class=" w-[24px] h-[24px] lg:hidden" bind:this={animationContainer} on:click={toggle} /> -->
		<ul class=" hidden lg:flex flex-row lg:flex-row text-black items-center space-x-5">
			<p class=" cursor-pointer hover:font-semibold transition-all duration-100">Home</p>
			<p class=" cursor-pointer hover:font-semibold transition-all duration-100">About</p>
			<p class=" cursor-pointer hover:font-semibold transition-all duration-100">Features</p>
			<p class=" cursor-pointer hover:font-semibold transition-all duration-100">Testimonials</p>
			<p class=" cursor-pointer hover:font-semibold transition-all duration-100">Contact Us</p>
			<div class=" flex flex-row space-x-6">
				<button on:click={() => goto('/login')}
					class=" hover:shadow-xl px-5 py-[6px] border border-[#068353] rounded-full text-[#068353]"
					>Login</button
				>
				<button on:click={() => goto('/sign')} class=" hover:shadow-xl px-5 py-[6px] border rounded-full text-white bg-[#068353]"
					>Sign up</button
				>
			</div>
		</ul>
	</div>
	<div
		class=" w-[90%] lg:py-48 relative lg:flex lg:flex-row lg:items-center mt-16 mx-auto text-center"
	>
		<div use:reveal={{ transition: "fly" }}  class=" lg:text-left lg:w-[60%]">
			<h1 class=" text-[38px] lg:text-[44px] font-bold">Africa in one financial platform</h1>
			<p class=" lg:text-[18px] lg:w-[70%]">
				Africash is a digital ecoystem designed to make Africa one. It's goal is to bring the dream
				of financial incusion to all people across the continent.
			</p>
			<button
				class=" shadow-lg shadow-gray-400 hover:shadow-emerald-400 transition-all duration-100 bg-[#068353] mt-5 rounded-full"
			>
				<div class=" flex flex-row space-x-3 p-5">
					<DownloadOutline class=" text-white" />
					<p class=" text-white font-medium">Get Started- It's free</p>
				</div>
			</button>
		</div>
		<div use:reveal={{ transition: "fade" }}  class=" hidden absolute w-[60%] lg:block right-0">
			<img src={bigphone} alt="" />
		</div>
	</div>
	<div use:reveal={{ transition: "fade" }} class=" w-full mt-6 lg:hidden">
		<img src={phone} alt="" />
	</div>
	<div
		class=" overflow-x-scroll lg:overflow-x-hidden lg:justify-between bg-[#EDF0F5] p-10 mt-5 flex flex-row space-x-6 items-center"
	>
		<img use:reveal={{ transition: "blur" }}  class=" scale-75" src={quartz} alt="" />
		<img use:reveal={{ transition: "blur" }}  class=" scale-75" src={bloom} alt="" />
		<img use:reveal={{ transition: "blur" }}  class=" scale-75" src={cn} alt="" />
		<img use:reveal={{ transition: "blur" }}  class=" scale-75" src={forbes} alt="" />
		<img use:reveal={{ transition: "blur" }}  class=" scale-75" src={tech} alt="" />
	</div>
	<div class=" mt-10 w-[90%] mx-auto">
		<h1 use:reveal={{ transition: "fly" }}
			class=" w-[90%] mx-auto text-center text-2xl lg:text-3xl lg:text-center lg:w-[50%] lg:mx-auto font-semibold"
		>
			Trusted by <span class=" text-[#068353]">200 Million+</span> active users across 54 countries
		</h1>
		<div class=" w-full lg:flex lg:flex-row lg:justify-between lg:items-center">
			<img use:reveal={{ transition: "fade" }} class=" mt-10 lg:w-[40%]" src={phone2} alt="" />
			<div use:reveal={{ transition: "slide" }} class=" lg:w-[50%]">
				<h1 class=" mt-5 text-xl lg:text-4xl font-semibold">
					Travel every country in Africa without hopping on a plane
				</h1>
				<p class=" mt-5">
					We are building a digital community that will empower you to take control of your money
					and make it work for you.
				</p>
			</div>
		</div>
	</div>
	<div class={` relative w-full mt-10 min-h-[30vh] mb-10 bg-[#068353] py-28`}>
		<img class=" absolute left-0 top-0 w-full h-full" src={curves} alt="" />
		<div class=" text-white w-[90%] lg:w-[60%] lg:mx-auto space-y-3 mx-auto">
			<h1 class=" text-3xl lg:text-5xl font-semibold mb-2">Perks of using us?</h1>

			<ul class=" lg:text-lg flex flex-row items-center space-x-2">
				<CheckCircleOutline />
				<p>No monthly fees</p>
			</ul>
			<ul class=" lg:text-lg flex flex-row items-center space-x-2">
				<CheckCircleOutline />
				<p>Shop internationaly, no fees added</p>
			</ul>
			<ul class=" flex flex-row lg:text-lg items-center space-x-2">
				<CheckCircleOutline />
				<p>Instant Reversals</p>
			</ul>
			<ul class=" flex flex-row items-center lg:text-lg space-x-2">
				<CheckCircleOutline />
				<p>Continental debit card</p>
			</ul>
		</div>
	</div>
	<div class=" w-[90%] lg:px-10 mx-auto mb-10">
		<h1 use:reveal={{ transition: "fly" }} class=" mb-10 font-semibold text-2xl lg:text-4xl mx-auto lg:w-[50%] text-center">
			Still on the fence, here's what <span class="text-[#068353]">our users</span> are saying
		</h1>
		<div class=" flex flex-col lg:space-y-0 lg:space-x-5 space-y-5 items-center lg:flex-row justify-between">
			<div use:reveal={{ transition: "slide" }} class=" lg:w-[35%] p-8 border-2 border-gray-400 rounded-lg">
				<div>
					<p class=" mb-5 px-5 relative">
						<QuoteSolid class=" absolute -left-1 rotate-180 w-3 text-[#068353] " />
						Africash is a really good app and it has made my life easier. I can now order as many things
						as i want to and from Ghana and have them delivered to my doorstep. It's safe, easy and secure.
						<QuoteSolid class=" absolute bottom-[2px] -right-1 w-3 text-[#068353] " />
					</p>
					<hr class=" h-[2px] bg-gray-400" />
					<div class=" mt-5 flex flex-row items-center space-x-2">
						<img class="  w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-[50%]" src={person} alt="" />
						<div>
							<h2 class=" text-[18px] font-semibold">Laura Koffi</h2>
							<p class=" text-[12px]">Entrepreneur</p>
						</div>
					</div>
				</div>
			</div>
			<div use:reveal={{ transition: "slide" }} class=" lg:w-[35%] p-8 border-2 border-gray-400 rounded-lg">
				<div>
					<p class=" mb-5 px-5 relative">
						<QuoteSolid class=" absolute -left-1 rotate-180 w-3 text-[#068353] " />
						Africash is a really good app and it has made my life easier. I can now order as many things
						as i want to and from Ghana and have them delivered to my doorstep. It's safe, easy and secure.
						<QuoteSolid class=" absolute bottom-[2px] -right-1 w-3 text-[#068353] " />
					</p>
					<hr class=" h-[2px] bg-gray-400" />
					<div class=" mt-5 flex flex-row items-center space-x-2">
						<img class="  w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-[50%]" src={person1} alt="" />
						<div>
							<h2 class=" text-[18px] font-semibold">Jessica Stone</h2>
							<p class=" text-[12px]">Freelancer</p>
						</div>
					</div>
				</div>
			</div>
			<div use:reveal={{ transition: "slide" }} class=" lg:w-[35%] p-8 border-2 border-gray-400 rounded-lg">
				<div>
					<p class=" mb-5 px-5 relative">
						<QuoteSolid class=" absolute -left-1 rotate-180 w-3 text-[#068353] " />
						Africash is a really good app and it has made my life easier. I can now order as many things
						as i want to and from Ghana and have them delivered to my doorstep. It's safe, easy and secure.
						<QuoteSolid class=" absolute bottom-[2px] -right-1 w-3 text-[#068353] " />
					</p>
					<hr class=" h-[2px] bg-gray-400" />
					<div class=" mt-5 flex flex-row items-center space-x-2">
						<img class=" w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-[50%]" src={person2} alt="" />
						<div>
							<h2 class=" text-[18px] font-semibold">James Armstrong</h2>
							<p class=" text-[12px]">Entrepreneur</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</div>


