<script lang="ts">
	import { contact_info } from 'lib/texts/';
	import ContactCard from 'components/ContactCard.svelte';

	export let addedToClipBoard: any;
</script>

<section
	class="relative z-[0] mx-auto flex min-h-screen max-w-screen-xl flex-col items-center px-4 py-[10rem]"
>
	<h1 class="mt-[7rem] text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
		Contact Me
	</h1>
	<div class="mt-[8rem] flex w-full flex-wrap items-center justify-around gap-[3rem]">
		{#each contact_info as i}
			<ContactCard {i} {addedToClipBoard} />
		{/each}
	</div>
</section>
