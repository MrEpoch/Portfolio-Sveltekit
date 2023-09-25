<script>
	import { clipboard } from '@skeletonlabs/skeleton';
	import { GithubIcon, InstagramIcon, MailIcon } from 'svelte-feather-icons';

	let message = '';

	function addedToClipBoard() {
		message = 'Copied to clipboard';
		setTimeout(() => {
			message = '';
		}, 1500);
	}
</script>

<div class="min-h-screen py-[6rem] dark:bg-black/10 dark:text-white/90">
	<h1
		class="mb-4 text-center textfont-extrabold tracking-tight leading-none text-gray-900 md:text-5xl text-4xl lg:text-6xl dark:text-white"
	>
		<span
			class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone"
			>Contact</span
		> Me
	</h1>
	<div class="mx-auto max-w-screen-xl mt-[6rem] justify-center flex flex-wrap gap-[3rem] py-4">
		<a
			href="https://github.com/MrEpoch/"
			class="
                min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:text-white link-cards-pricing duration-500
                bg-gray-200/60 cursor-pointer flex shadow left-1
                items-center flex-col sm:p-4 p-2 justify-center gap-[2rem] sm:gap-[3rem]
            "
		>
			<h2 class="text-2xl sm:text-3xl font-bold dark:text-white">Github</h2>
			<GithubIcon class="sm:w-12 w-8 h-8 sm:h-12" />
		</a>
		<a
			href="/"
			class="
                min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:text-white link-cards-pricing duration-500
                bg-gray-200/60 cursor-pointer flex shadow left-1
                items-center flex-col sm:p-4 p-2 justify-center gap-[2rem] sm:gap-[3rem]
            "
		>
			<h2 class="text-2xl sm:text-3xl font-bold dark:text-white">Instagram</h2>
			<InstagramIcon class="sm:w-12 h-8 w-8 sm:h-12" />
		</a>
		<button
			on:click={addedToClipBoard}
			use:clipboard={'dev@stencukpage.com'}
			class="
                min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:text-white link-cards-pricing duration-500
                bg-gray-200/60 cursor-pointer flex shadow left-1
                items-center flex-col sm:p-4 p-2 justify-center gap-[2rem] sm:gap-[3rem]
            "
		>
			<h2 class="text-2xl sm:text-3xl font-bold dark:text-white">Email</h2>
			<MailIcon class="sm:w-12 w-8 h-8 sm:h-12" />
		</button>
	</div>
	{#if message.length > 0}
		<p
			class="fixed right-3 bottom-5 rounded-xl px-6 py-4 font-bold
                bg-gradient-to-r from-indigo-400 to-cyan-400
                text-center text-sm text-white"
		>
			{message}
		</p>
	{/if}
</div>
