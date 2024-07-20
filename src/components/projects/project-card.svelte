<script lang="ts">
	import { lazyLoad } from 'lib';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let project_data: any;
	export let i: number;

	let isAnimating = false;
</script>

<a
	in:fly|global={{ y: 100, duration: 300 * i, easing: backOut }}
	href={`/projects/${project_data.id}`}
	class="
    max-w-[400px] h-full dark:border-0 border border-gray-200 rounded transition-transform duration-300
    shadow dark:bg-darkmode-400 hover:scale-[1.02] dark:border-gray-700 w-full group
    "
>
	<div
		class={`w-full h-48 overflow-hidden rounded-t bg-gray-200 dark:bg-gray-800 ${
			isAnimating ? 'animate-pulse' : ''
		}`}
	>
		<img
			class="w-full object-cover h-full opacity-0 rounded group-hover:brightness-75 dark:group-hover:brightness-50 transition duration-300"
			width="400"
			use:lazyLoad={project_data.img.dark}
			alt={project_data.name}
		/>
	</div>
	<div class="p-5">
		<h5 class="mb-2 text-2xl font-anton tracking-wide text-gray-900 dark:text-white/80">
			{project_data.name}
		</h5>
	</div>
</a>
