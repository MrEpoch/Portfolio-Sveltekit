<script lang="ts">
	import { contact_info } from 'lib/texts/';
	import ContactCard from 'components/ContactCard.svelte';

	export let addedToClipBoard: any;
</script>

<section
	class="min-h-screen flex flex-col items-center py-[10rem] relative z-[0] px-4 mx-auto max-w-screen-xl"
>
	<h1 class="text-center sm:text-6xl text-4xl mt-[7rem] font-bold text-gray-900 dark:text-white">
		Contact Me
	</h1>
	<div class="flex w-full flex-wrap gap-[3rem] mt-[8rem] items-center justify-around">
		{#each contact_info as i}
			<ContactCard {i} {addedToClipBoard} />
		{/each}
	</div>
</section>
