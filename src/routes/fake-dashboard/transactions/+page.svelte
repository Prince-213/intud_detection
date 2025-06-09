<script>
	import { reveal } from 'svelte-reveal';
	import RecentInvoiceLine from '../../components/RecentInvoiceLine.svelte';
	export let data;
</script>


<div class=" w-[92%]  mx-auto py-8">
    <div
	use:reveal={{ transition: 'fly' }}
	class=" lg:overflow-x-hidden overflow-x-scroll mt-5 w-full border-2 rounded-lg p-5 border-[#7AC231]"
>
	<h1 class=" mb-6 font-medium text-2xl">Transactions</h1>
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
