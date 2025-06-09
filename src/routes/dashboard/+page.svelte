<script lang="ts">
	import profile from '$lib/images/pexels-arianna-jadé-4006576.jpg';
	import { Label, Input } from 'flowbite-svelte';
	import {
		BellActiveAltOutline,
		SearchOutline,
		DotsHorizontalOutline,
		ArrowUpOutline,
		ArrowDownOutline
	} from 'flowbite-svelte-icons';
	import { chartRender } from '$lib/chartRende';
	import { BarData } from '$lib/data/chartData';
	import { reveal } from 'svelte-reveal';
	import { recentInvoice } from '$lib/data/recentInvoice';
	import RecentInvoiceLine from '../components/RecentInvoiceLine.svelte';
	export let data;
</script>

<div class=" pb-5 w-[92%] mt-5 mx-auto">
	<div class=" w-full lg:hidden flex justify-between items-center">
		<div>
			<h3 class=" text-lg">Hi Sylvanus,</h3>
			<h1 class=" text-4xl font-medium">Welcome Back</h1>
		</div>
		<div class=" flex items-center space-x-10">
			<BellActiveAltOutline />
			<img src={profile} class=" w-9 h-9 rounded-[50%]" alt="profile" />
		</div>
	</div>
	<Label class="space-y-2 lg:hidden my-3">
		<Input
			type="email"
			color="green"
			class=" rounded-full bg-emerald-50 pl-10 "
			placeholder=""
			size="md"
		>
			<SearchOutline slot="left" class="w-5  mr-10 h-5" />
		</Input>
	</Label>
	<div class=" justify-between items-start lg:flex">
		<div
			use:reveal={{ transition: 'slide' }}
			class=" lg:w-[46%] lg:mt-6 flex justify-between items-center"
		>
			<div
				class="w-[45%] lg:w-[49%] lg:px-5 p-3 flex flex-col justify-between bg-emerald-50 rounded-md min-h-24 relative"
			>
				<div class=" mb-2">
					<h3 class=" text-xs font-medium">Total Invoice</h3>
					<h1 class=" text-2xl font-semibold">16,700</h1>
				</div>
				<div
					class=" max-w-fit text-[10px] flex flex-row space-x-2 w-full p-2 bg-[#D9F7B2] rounded-full"
				>
					<p class=" text-[#86B40A] font-medium">+27%</p>
					<p>Invoice Last Week</p>
				</div>
			</div>
			<div
				class="w-[45%] lg:w-[49%] lg:px-5 p-3 flex flex-col justify-between bg-emerald-50 rounded-md min-h-24 relative"
			>
				<div class=" mb-2">
					<h3 class=" text-xs font-medium">Total Payment Received</h3>
					<h1 class=" text-2xl font-semibold">2,985.67</h1>
				</div>
				<div
					class=" text-[10px] max-w-fit flex flex-row space-x-2 w-full p-2 bg-[#D9F7B2] rounded-full"
				>
					<p class=" text-[#86B40A] font-medium">+47%</p>
					<p>Invoice Last payments</p>
				</div>
			</div>
		</div>
		<div
			use:reveal={{ transition: 'fly' }}
			class=" rounded-[20px] lg:w-[50%] w-full py-5 px-12 bg-gradient-to-br from-[#03D17A] mt-5 to-[#7AC231]"
		>
			<div
				class=" ml-1 relative before:absolute before:w-full before:h-full before:bg-[#F8F7F7] before:opacity-50 before:rounded-full before:-left-2 w-[20px] h-[20px] rounded-full bg-[#F8F7F7]"
			/>

			<div class=" mt-5 flex justify-between items-center">
				<div class=" text-white space-y-5">
					<h1 class=" lg:text-[40px] text-3xl font-semibold">96,421.50</h1>
					<p class=" text-sm lg:text-lg font-medium">Balance</p>
					<div class=" space-x-4 flex items-end">
						<div class=" flex space-x-4 translate-y-1">
							<p>****</p>
							<p>****</p>
							<p>****</p>
						</div>
						<p class="">3367</p>
					</div>
				</div>
				<DotsHorizontalOutline class=" text-white text-xl" size="xl" />
			</div>
		</div>
	</div>
	<div class=" mt-5 lg:flex lg:flex-row lg:justify-between lg:items-start">
		<div
			class="w-full lg:w-[46%] lg:-mt-[12vh] lg:-translate-x-6 border-2 border-[#7AC231] p-5 rounded-lg m-auto"
		>
			<canvas class=" w-full h-full" height="267" use:chartRender={BarData} />
		</div>
		<div class=" w-full lg:w-[50%] mt-5 bg-[#E9FBF0] rounded-xl">
			<div
				use:reveal={{ transition: 'fade' }}
				class=" border-b-2 border-b-green-400 flex justify-between items-center py-5 px-8"
			>
				<div>
					<h3 class=" text-sm">Withdrawal</h3>
					<h1 class=" text-[26px] font-semibold">650,400.42</h1>
				</div>
				<ArrowUpOutline class=" text-red-400" />
			</div>
			<div
				use:reveal={{ transition: 'fade' }}
				class="  flex justify-between items-center py-5 px-8"
			>
				<div>
					<h3 class=" text-sm">Deposits</h3>
					<h1 class=" text-[26px] font-semibold">7,400,000.45</h1>
				</div>
				<ArrowDownOutline class=" text-green-400" />
			</div>
		</div>
	</div>
	<div
		class=" lg:overflow-x-hidden overflow-x-scroll mt-5 w-full border-2 rounded-lg p-5 border-[#7AC231]"
	>
		<h1 class=" mb-6 font-medium text-2xl">Recent Invoice</h1>
		<div class=" lg:w-full w-[200%]">
			<div>
				<div
					class=" space-x-2 flex bg-[#EAF6D8] p-4 rounded-lg justify-between text-[#04B76B] lg:text-lg font-medium items-center"
				>
					<p class=" w-[20%]">No</p>
					<p class=" text-center w-[20%]">Date</p>
					<p class=" text-center w-[20%]">Recipient</p>
					<p class=" text-center w-[20%]">Amount</p>
					<p class=" text-center w-[20%]">Status</p>
				</div>
			</div>
			{#each data.recentInvoice as invoice}
				<RecentInvoiceLine
					serial={invoice.no}
					date={invoice.date}
					recipient={invoice.recipient}
					amount={invoice.amount}
					status={invoice.status}
				/>
			{/each}
		</div>
	</div>
	
</div>
