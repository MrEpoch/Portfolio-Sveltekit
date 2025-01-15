<script lang="ts">
	import { lazyLoad } from 'lib';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import { onMount } from 'svelte';

	export let project_data: any;
	export let i: number;
	let n = 0;
	let animating = false;
	onMount(() => {
		n = i;
		animating = true;
	});

	let isAnimating = false;
</script>

{#if animating}
	<a
		in:fly|global={{ y: 100, duration: 500 * n, easing: backOut }}
		href={`/projects/${project_data.id}`}
		class="
    group flex h-full w-full max-w-[400px] flex-col gap-2 rounded-lg border border-gray-200 bg-main-background-300 p-4
    shadow transition-transform duration-300 hover:scale-[1.02] dark:border-0 dark:border-gray-700
    "
	>
		<div class={`h-48 w-full overflow-hidden ${isAnimating ? 'animate-pulse' : ''}`}>
			<img
				class="h-full w-full object-cover opacity-0 group-hover:brightness-75"
				width="400"
				use:lazyLoad={project_data.img}
				alt={project_data.name}
			/>
		</div>
		<h5 class="text-lg">
			{project_data.name}
		</h5>
	</a>
{/if}
