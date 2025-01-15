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
	class="max-w-container flex flex-col items-center justify-center gap-[2rem] overflow-hidden py-16 pt-48 text-center"
>
	<h1
		class="lines textfont-extrabold mb-4 text-3xl leading-none tracking-tight
        text-gray-900 dark:text-white max-[420px]:text-2xl md:text-5xl lg:text-6xl"
	>
		{#if animate}
			{#each text as t, i}
				<div class="overflow">
					{#if t.color}
						<span
							in:fly|global={{ y: 100, delay: 300 * i, easing: backOut }}
							class="line bg-gradient-to-r from-main-100 to-main-300 box-decoration-clone bg-clip-text text-transparent"
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
			<span class="pt-[2.6rem] max-[420px]:pt-[2.2rem] md:pt-[3.75rem] lg:pt-[4.5rem]" />
		{/if}
	</h1>
	<p
		class="mb-8 text-sm font-normal text-gray-500 dark:text-gray-400 sm:px-16 sm:text-lg lg:px-48 lg:text-xl"
	>
		{paragraph_text}
	</p>
	<div
		class="flex flex-col space-y-4 pb-[40rem] sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"
	>
		<a
			href="/projects"
			class="inline-flex items-center justify-center rounded-lg border-4 border-main-background-200 bg-gradient-to-r from-main-300 to-main-200 px-5 py-3
                                  text-center text-base font-medium text-main-text-200
                                  transition hover:border-black focus:ring-4"
		>
			See Projects
			<svg
				class="ml-2 h-3.5 w-3.5"
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
