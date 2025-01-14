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
  })
  
	let isAnimating = false;
</script>

{#if animating}
<a
	in:fly|global={{ y: 100, duration: 500 * n, easing: backOut }}
	href={`/projects/${project_data.id}`}
	class="
    max-w-[400px] flex flex-col gap-2 p-4 h-full dark:border-0 border border-gray-200 rounded-lg transition-transform duration-300
    shadow bg-main-background-300 hover:scale-[1.02] dark:border-gray-700 w-full group
    "
>
	<div
		class={`w-full h-48 overflow-hidden ${
			isAnimating ? 'animate-pulse' : ''
		}`}
	>
		<img
			class="w-full object-cover h-full opacity-0 group-hover:brightness-75 "
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
