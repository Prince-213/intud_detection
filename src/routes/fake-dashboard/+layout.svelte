<script lang="ts">
	import { dictionary } from './../../../.svelte-kit/generated/client/app.js';
	import SideBar from './../components/SideBar.svelte';
	import { Button, DarkMode, Label, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import lottie, { type AnimationItem } from 'lottie-web';
	import animationData from '$lib/images/Animation - 1699732843324.json';
	import logo from '$lib/images/circle.png';
	import { goto } from '$app/navigation';
	import { BellActiveAltOutline, SearchOutline, DrawSquareOutline, WalletOutline, ArrowsRepeatOutline, UploadOutline, CashOutline, ShoppingBagOutline, FileInvoiceOutline, UserCircleOutline } from 'flowbite-svelte-icons';
    import profile from '$lib/images/pexels-arianna-jadé-4006576.jpg'
	import Logo from '../components/Logo.svelte';
    
	let animationContainer: HTMLButtonElement;

	let open = false;

	const toggle = () => {
		open = !open;
		menuAnimation.setSpeed(3);
		if (open) {
			menuAnimation.goToAndPlay(0, true);
			menuAnimation.setDirection(1);
		} else {
			menuAnimation.goToAndPlay(60, true);
			menuAnimation.setDirection(-1);
		}
	};

	let menuAnimation: AnimationItem;

	let lastFrame: number;

	onMount(() => {
		menuAnimation = lottie.loadAnimation({
			container: animationContainer,
			animationData,
			loop: false,
			autoplay: false
		});

		lastFrame = menuAnimation.totalFrames - 1;

		menuAnimation.goToAndStop(0, true);
	});
</script>

<div class="  w-full lg:flex lg:flex-row overflow-x-hidden relative font-clash">
	<div class=" fixed left-0 top-0 pt-5 px-5 lg:flex-col  hidden border-r-2 border-[#7AC231] lg:block  h-screen lg:w-[18%]">
        <div class=" mb-4"></div>
		<Logo />
        <ul class=" mt-14 space-y-2">
            
            <a href="/dashboard">
                <div  class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                    <UserCircleOutline />
                    <h3 class=" text-xl">My Account</h3>
                </div>
            </a>
            
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <WalletOutline />
                <h3 class=" text-xl">Wallet</h3>
            </div>

            <a href="/dashboard/transactions">
                <div  class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                    <ArrowsRepeatOutline />
                    <h3 class=" text-xl">Transactions</h3>
                </div>
            </a>

            <a href="/dashboard/transfer">
                <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                    <UploadOutline />
                    <h3 class=" text-xl">Fund Transfer</h3>
                </div>
            </a>
            
            
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <CashOutline />
                <h3 class=" text-xl">Deposit</h3>
            </div>
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <ShoppingBagOutline />
                <h3 class=" text-xl">Withdraw</h3>
            </div>
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <FileInvoiceOutline />
                <h3 class=" text-xl">Invoice</h3>
            </div>
            <br>
            <div class=" relative w-full border-yellow-400 border-2 rounded-md py-10 px-5">
                <div class=" flex space-x-1 absolute top-0">
                    <div class=" h-[23px] w-[13px] bg-[#F2994A]"></div>
                    <div class=" w-[13px] h-[13px] bg-[#F2C94C]"></div>
                </div>
                <div class=" text-center">
                    <h1 class=" text-2xl font-medium">40% Off</h1>
                    <h3 class=" text-sm font-medium">On every transactions</h3>
                    <p class=" text-sm">On every transaction</p>
                </div>
            </div>
        </ul>
	</div>
	<div class="  lg:w-[82%] lg:ml-[18%] min-h-screen">
		<div
			style={`Transform: ${open ? 'translatex(0%)' : 'translatex(-100%)'} `}
			class={` side fixed z-50 h-screen shadow-xl shadow-black w-[60%] bg-[#068353]  rounded-tr-lg rounded-br-lg left-0 transition-all duration-300  top-0`}
		>
        <ul class=" text-white pt-5 space-y-3">
            <a href="/dashboard">
                <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                    <UserCircleOutline />
                    <h3 class=" text-xl">My Account</h3>
                </div>
            </a>
            
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <WalletOutline />
                <h3 class=" text-xl">Wallet</h3>
            </div>
            <a href="/dashboard/transactions">
                <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                    <ArrowsRepeatOutline />
                    <h3 class=" text-xl">Transactions</h3>
                </div>
            </a>
            <a href="/dashboard/transfer">
                <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                    <UploadOutline />
                    <h3 class=" text-xl">Fund Transfer</h3>
                </div>
            </a>
            
            
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <CashOutline />
                <h3 class=" text-xl">Deposit</h3>
            </div>
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <ShoppingBagOutline />
                <h3 class=" text-xl">Withdraw</h3>
            </div>
            <div class="  items-center flex w-full flex-row rounded-full space-x-5 py-3 pl-5">
                <FileInvoiceOutline />
                <h3 class=" text-xl">Invoice</h3>
            </div>
        </ul>
		</div>
		<div class="   shadow-lg">
            <div class=" mx-auto lg:w-[92%] lg:py-2 hidden lg:flex w-full justify-between items-center">
                <div>
                    <p>Fake Dashboard</p>
                    <h3 class=" text-lg">Hi Sylvanus,</h3>
                    <h1 class=" text-4xl font-medium">Welcome Back</h1>
                </div>
                

                <div class=" w-[55%] justify-between flex flex-row items-center">
                    <div>
                        <DarkMode />
                    </div>
                    <Label class="space-y-2">
                        <Input type="email" color="green"  class=" rounded-full bg-emerald-50 pl-10 " placeholder="" size="md" >
                            <SearchOutline  slot="left" class="w-5  mr-10 h-5" />
                        </Input>
                    </Label>
                    <div class=" flex items-center space-x-10">
                        <BellActiveAltOutline />
                        <div class=" flex flex-row space-x-2">
                            <img src={profile}  class=" w-12 h-12 rounded-[50%]" alt="profile">
                            <div>
                                <h3 class=" font-medium">Sylvannus Koffi</h3>
                                <p class=" text-sm">Entreprenuer</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
			<div class=" flex flex-row justify-between items-center lg:p-0 p-[25px]">
				<div class=" lg:hidden">
                    <Logo />
                </div>
				<button
					class=" w-[24px] h-[24px] lg:hidden"
					bind:this={animationContainer}
					on:click={toggle}
				/>
				
			</div>
		</div>
		<slot />
	</div>
</div>
