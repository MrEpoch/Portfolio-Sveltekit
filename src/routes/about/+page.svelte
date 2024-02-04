<script lang="ts">
	import About from 'assets/AboutProjects.png';
	import AboutMe from 'components/AboutMe.svelte';
	import AboutTimeline from 'components/AboutTimeline.svelte';
  import { onMount } from 'svelte';
  import { headerLink } from 'lib/store';
  import { cubicIn } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  onMount(() => {
    $headerLink = "about";
    animateImage = true;
  });

  let animateImage = false;
</script>

<div class="min-h-screen pb-[7rem] w-full flex flex-col dark:bg-black/10 dark:text-white/90">
	<div
		class="min-h-screen w-full py-8 px-4 mx-auto max-w-screen-xl gap-[4rem] flex flex-col items-center"
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
            h-full  `}
		>
            {#if animateImage}
			<img
                in:fly={{ y: 100, duration: 300, easing: cubicIn }}
                src={About}
				class="w-full  pt-12 object-cover
             opacity-1 h-full"
				alt="signalizing about page"
                />
            {/if}
		</div>
	</div>
	<div
		class="min-h-screen w-full py-8 px-4 mx-auto max-w-screen-xl gap-[5rem] flex flex-col items-center"
	>
    <AboutTimeline />
		<AboutMe />
	</div>
</div>
