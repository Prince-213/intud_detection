<script lang="ts">
    export let serial:String;
    export let date:String;
    export let recipient:String;
    export let amount:String;
    export let status:String;

    let color:String

    switch (status) {
        case "Cancelled":
            color = "red";
            break;
        
        case "Overdue":
            color = "yellow";
            break;

        case "Unpaid":
            color = "purple";
            break;
        

        default:
            color = "green";
            break;
    }
</script>

<div
	class=" flex bg-[#EAF6D8] p-4 rounded-lg justify-between text-black space-x-2 lg:text-lg font-medium items-center mt-4"
>
	<p class=" w-[20%]">{serial}</p>
	<p class=" text-center w-[20%]">{date}</p>
	<p class=" text-center w-[20%]">{recipient}</p>
	<p class=" text-center w-[20%]">{amount}</p>
	<div class={` mx-auto py-[10px] rounded-md text-center w-[20%] bg-${color}-100`}>
		<p class={`text-${color}-500 text-sm font-medium`}>{status}</p>
	</div>
</div>
