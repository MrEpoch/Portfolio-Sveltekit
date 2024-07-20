<script lang="ts">
	import { onMount } from 'svelte';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const text = [
		{
			color: false,
			content: 'Your'
		},
		{
			color: true,
			content: 'Ideas'
		},
		{
			color: false,
			content: ', My Solutions'
		}
	];

	export let paragraph_text: string;

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<div
	class="pt-[8rem] md:pt-[15rem] relative z-[0] px-4 mx-auto max-w-screen-xl overflow-hidden items-center text-center flex flex-col gap-[2rem]"
>
	<h1
		class="lines mb-4 textfont-extrabold tracking-tight leading-none text-gray-900
        md:text-5xl text-3xl max-[420px]:text-2xl lg:text-6xl dark:text-white"
	>
		{#if animate}
			{#each text as t, i}
				<div class="overflow">
					{#if t.color}
						<span
							in:fly|global={{ y: 100, delay: 300 * i, easing: backOut }}
							class="line bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone"
							>&nbsp;{t.content}</span
						>
					{:else}
						<span in:fly|global={{ y: 100, delay: 300 * i, easing: backOut }} class="line"
							>{t.content}</span
						>
					{/if}
				</div>
			{/each}
		{:else}
			<span class="lg:pt-[4.5rem] md:pt-[3.75rem] pt-[2.6rem] max-[420px]:pt-[2.2rem]" />
		{/if}
	</h1>
	<p
		class="mb-8 text-sm sm:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
	>
		{paragraph_text}
	</p>
	<div
		class="flex flex-col pb-[40rem] space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
	>
		<a
			href="/projects"
			class="inline-flex justify-center items-center py-3 px-5 text-base font-medium
                                  text-center text-white rounded-lg hover:bg-sky-600 focus:ring-4
                                  focus:ring-blue-300 dark:focus:ring-blue-900 bg-gradient-to-r from-indigo-500 to-cyan-500"
		>
			See Projects
			<svg
				class="w-3.5 h-3.5 ml-2"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</a>
		<a
			href="/about"
			class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
		>
			About Me
		</a>
	</div>
</div>

<style>
	.overflow {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
	}

	.line {
		word-spacing: -2px;
		padding: 0.27rem;
		display: inline-block;
		margin: 0.1rem;
	}

	@media (max-width: 420px) {
		.line {
			padding: 0rem;
			word-spacing: 0px;
		}
	}
</style>
