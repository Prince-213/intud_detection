<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';
	import {
		CashOutline,
		CalendarWeekOutline,
		DollarOutline,
		ArrowRightOutline
	} from 'flowbite-svelte-icons';
	import lottie, { type AnimationItem } from 'lottie-web';
	import { onMount } from 'svelte';
	import animationData from '$lib/images/success-animation.json';

	let animationContainer: HTMLElement;

	let successAnimation: AnimationItem;

	let lastFrame: number;

	onMount(() => {
		successAnimation = lottie.loadAnimation({
			container: animationContainer,
			animationData,
			loop: false,
			autoplay: false
		});

		lastFrame = successAnimation.totalFrames - 1;

		successAnimation.goToAndPlay(0, true);
	});
</script>

<div class=" space-y-5 lg:space-y-0 lg:flex w-[92%] mx-auto my-10 justify-between lg:items-start">
	<div class=" px-6 py-12 w-full lg:w-[55%] bg-white shadow-lg rounded-2xl">
		<h1 class=" font-medium text-xl mb-4">Fund Transfer</h1>
		<p class=" font-medium text-gray-500">
			Send money to your loved ones. Transfer rent, transfer money within your bank accounts etc. in
			a secure and convenient manner.
		</p>
		<div class=" w-full py-6 border-b-2 border-gray-100">
			<div class=" w-full">
				<h1 class=" text-gray-600 font-medium mb-2">Choose Payee Bank</h1>
				<select
					class=" w-full rounded-md py-4 bg-slate-50 border-gray-200 border-2"
					name="bank"
					id="bank"
				>
					<option class=" font-medium" value="070">Fidelity Bank</option>
					<option class=" font-medium" value="090">UBA Bank</option>
				</select>
			</div>
			<br />
			<div>
				<h1 class=" text-gray-600 font-medium mb-2">Choose Payee</h1>
				<div
					class=" w-full rounded-md bg-slate-50 px-2 flex items-center space-x-4 border-gray-200 border-2"
				>
					<div class=" w-5 h-5 lg:w-10 lg:h-10 bg-purple-500 rounded-full" />
					<h1 class=" text-base lg:text-lg font-medium">Wade Warren</h1>
					<Input
						type="text"
						color="green"
						class="w-[50%] border-none border-gray-300 p-4"
						placeholder="Enter Account Number"
						size="md"
					/>
				</div>
			</div>
		</div>
		<div class=" mt-10">
			<h1 class=" font-medium text-xl mb-4">Enter Transaction Details</h1>
			<h3 class=" text-gray-600 font-medium mb-2">Transfer from</h3>
			<div class=" mb-4 w-full p-3 bg-gray-100 rounded-md">
				<p class=" font-medium text-gray-400">6072232892 - Darlene Roberston</p>
			</div>
			<div class=" w-full p-3 flex items-center space-x-3 bg-gray-100 rounded-md">
				<CashOutline class=" text-green-400" />
				<p class=" text-green-400 font-medium">
					Total available amount is $24,543 as on Jan 6 2021
				</p>
			</div>
		</div>
		<div class=" mt-5 flex justify-between items-center">
			<div class=" min-w-[48%]">
				<h4 class=" font-medium text-gray-600 mb-2">Amount</h4>
				<Label class="space-y-2">
					<Input
						type="email"
						color="green"
						class=" rounded-md py-4 pl-10 border-2 border-gray-200 bg-transparent "
						placeholder=""
						size="md"
					>
						<DollarOutline slot="left" class="w-4 mr-10 h-4" />
					</Input>
				</Label>
			</div>
			<div class=" min-w-[48%]">
				<h4 class=" font-medium text-gray-600 mb-2">Payment date</h4>
				<Label class="space-y-2">
					<Input
						type="email"
						color="green"
						class=" rounded-md pr-10 py-4 border-2 border-gray-200 bg-transparent  "
						placeholder=""
						size="md"
					>
						<CalendarWeekOutline slot="right" class="w-4 ml-10 h-4" />
					</Input>
				</Label>
			</div>
		</div>
		<br />
		<div class=" min-w-[48%]">
			<h4 class=" font-medium text-gray-600 mb-2">Remarks (optional)</h4>
			<Label class="space-y-2">
				<Input
					type="email"
					color="green"
					class=" rounded-md py-4 border-2 border-gray-200 bg-transparent  "
					placeholder=""
					size="md"
				/>
			</Label>
		</div>
		<button class=" shadow-lg bg-green-500 rounded-md mt-5 w-full py-5 text-center">
			<div class=" space-x-3 flex justify-center items-center">
				<p class=" text-white font-medium">Proceed to pay</p>
				<ArrowRightOutline class=" text-white" />
			</div>
		</button>
	</div>

	<div class=" flex flex-col lg:w-[42%] w-full">
		<div class="  bg-white shadow-lg rounded-xl max-h-fit py-8 px-6">
			<div>
				<h1 class=" text-xl font-medium">Recent Transfers</h1>
				<div class=" mt-5 space-y-6">
					<div class=" flex items-center justify-between">
						<div class=" flex space-x-3">
							<div class=" w-10 h-10 bg-yellow-300 rounded-full" />
							<div>
								<h3 class=" font-medium text-base">Wade Warren</h3>
								<p class=" font-medium text-sm text-gray-500">2744659081</p>
							</div>
						</div>

						<p class=" font-medium">$100</p>
						<p>FCMB</p>
					</div>
					<div class=" flex items-center justify-between">
						<div class=" flex space-x-3">
							<div class=" w-10 h-10 bg-yellow-300 rounded-full" />
							<div>
								<h3 class=" font-medium text-base">Wade Warren</h3>
								<p class=" font-medium text-sm text-gray-500">2744659081</p>
							</div>
						</div>

						<p class=" font-medium">$100</p>
						<p>FCMB</p>
					</div>
					<div class=" flex items-center justify-between">
						<div class=" flex space-x-3">
							<div class=" w-10 h-10 bg-yellow-300 rounded-full" />
							<div>
								<h3 class=" font-medium text-base">Wade Warren</h3>
								<p class=" font-medium text-sm text-gray-500">2744659081</p>
							</div>
						</div>

						<p class=" font-medium">$100</p>
						<p>FCMB</p>
					</div>
					<div class=" flex items-center justify-between">
						<div class=" flex space-x-3">
							<div class=" w-10 h-10 bg-yellow-300 rounded-full" />
							<div>
								<h3 class=" font-medium text-base">Wade Warren</h3>
								<p class=" font-medium text-sm text-gray-500">2744659081</p>
							</div>
						</div>

						<p class=" font-medium">$100</p>
						<p>FCMB</p>
					</div>
				</div>
			</div>
		</div>
        <div class=" text-center w-full mt-10 bg-white shadow-lg rounded-xl max-h-fit py-8 p-4">
			<div class=" w-[70%] mx-auto" bind:this={animationContainer}  />
            <h1 class=" text-3xl font font-medium">Transfer Successful</h1>
		</div>
        
	</div>
</div>

<style>
</style>
