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
	<div class="flex h-full w-full flex-col gap-[2rem]">
		<a
			href={project.link}
			class="flex h-full min-h-[200px] w-full
            justify-center rounded-3xl bg-gray-200 object-cover dark:bg-gray-800 sm:min-h-[500px]"
		>
			<img
				use:lazyLoad={project.img}
				class="rounded-3xl object-cover opacity-0 dark:brightness-[85%]"
				alt={project.name}
			/>
		</a>
		<a href={project.link}>
			<h2
				class="font-anton mt-4 text-2xl tracking-wide text-gray-900 hover:underline dark:text-white sm:text-4xl"
			>
				{project.name}
			</h2>
		</a>
		<hr class="long-line h-1 w-full bg-gradient-to-r from-main-200 to-main-300" />
		<div class="w-full">
			<div class="flex justify-between gap-2">
				<h3 class="text-sm font-bold sm:text-lg">Technologies:</h3>
				<p class="text-sm sm:text-lg">{project.technologies}</p>
			</div>
			<div class="flex justify-between gap-2">
				<h3 class="text-sm font-bold sm:text-lg">Created:</h3>
				<p class="text-sm sm:text-lg">{project.created}</p>
			</div>
			<div class="flex justify-between gap-2">
				<h3 class="text-sm font-bold sm:text-lg">Github Url:</h3>
				<a href={project.githubUrl} class="text-sm hover:underline sm:text-lg">{project.name}</a>
			</div>
		</div>
		<div class="w-full">
			<h3 class="font-anton mt-4 text-2xl tracking-wide text-gray-900 dark:text-white">
				Description
			</h3>
			<p class="mt-4 text-lg text-gray-900 dark:text-white">{project.description}</p>
		</div>
	</div>
</div>
