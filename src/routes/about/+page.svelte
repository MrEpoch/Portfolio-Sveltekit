<script lang="ts">
	import About from 'assets/CodeAbout.svg';
	import { lazyLoad } from '$lib';
	import AboutMe from './about_me.svelte';
	import AboutTimeline from './AboutTimeline.svelte';
	import { onMount } from 'svelte';
	import { headerLink } from 'lib/store';

  onMount(() => {
    $headerLink = "about";
  });

	let isAnimating = true;
</script>

<div class="min-h-screen pb-[7rem] w-full flex flex-col dark:bg-black/10 dark:text-white/90">
	<div
		class="min-h-screen w-full py-8 px-4 mx-auto max-w-screen-xl gap-[8rem] flex flex-col items-center"
	>
		<h1
			class="mb-4 mt-[6rem] textfont-extrabold tracking-tight leading-none text-gray-900
            text-5xl max-[390px]:text-4xl lg:text-6xl dark:text-white"
		>
			About
			<span
				class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone"
				>Me</span
			>
		</h1>
		<div
			class={`sm:w-1/2 w-full min-h-[200px] sm:min-h-[350px] flex justify-center object-cover
            h-full ${
							isAnimating ? 'animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl' : ''
						} transition-transform `}
		>
			<img
				on:load={() => (isAnimating = false)}
				use:lazyLoad={About}
				class="w-full opacity-0 pt-12 object-cover
            h-full"
				alt="signalizing about page"
			/>
		</div>
	</div>
	<div
		class="min-h-screen w-full py-8 px-4 mx-auto max-w-screen-xl gap-[5rem] flex flex-col items-center"
	>
    <AboutTimeline />
		<AboutMe />
	</div>
</div>
