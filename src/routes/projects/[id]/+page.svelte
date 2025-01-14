<script lang="ts">
	import { lazyLoad } from 'lib';
	import { headerLink } from 'lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		$headerLink = 'projects';
	});

	export let data: any;

	let project = data.project;
</script>

<div class="max-w-container w-full py-16 text-white">
	<div class="h-full w-full flex flex-col gap-[2rem]">
		<a
			href={project.link}
			class="w-full dark:bg-gray-800 bg-gray-200 rounded-3xl
            min-h-[200px] sm:min-h-[500px] flex justify-center object-cover h-full"
		>
				<img
					use:lazyLoad={project.img}
					class="rounded-3xl object-cover opacity-0 dark:brightness-[85%]"
					alt={project.name}
				/>
		</a>
		<a href={project.link}>
			<h2
				class="mt-4 text-2xl sm:text-4xl tracking-wide hover:underline font-anton text-gray-900 dark:text-white"
			>
				{project.name}
			</h2>
		</a>
		<hr class="long-line bg-gradient-to-r from-main-200 to-main-300 h-1 w-full" />
		<div class="w-full">
			<div class="flex gap-2 justify-between">
				<h3 class="font-bold sm:text-lg text-sm">Technologies:</h3>
				<p class="sm:text-lg text-sm">{project.technologies}</p>
			</div>
			<div class="flex gap-2 justify-between">
				<h3 class="font-bold sm:text-lg text-sm">Created:</h3>
				<p class="sm:text-lg text-sm">{project.created}</p>
			</div>
			<div class="flex gap-2 justify-between">
				<h3 class="font-bold sm:text-lg text-sm">Github Url:</h3>
				<a href={project.githubUrl} class="sm:text-lg text-sm hover:underline">{project.name}</a>
			</div>
		</div>
		<div class="w-full">
			<h3 class="mt-4 text-2xl tracking-wide font-anton text-gray-900 dark:text-white">
				Description
			</h3>
			<p class="mt-4 text-lg text-gray-900 dark:text-white">{project.description}</p>
		</div>
	</div>
</div>
