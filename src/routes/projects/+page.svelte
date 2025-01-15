<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from 'components/projects/project-card.svelte';
	import projects from 'lib/texts/projects_content';
	import { headerLink } from 'lib/store';

	let animating = false;

	onMount(() => {
		animating = true;
		$headerLink = 'projects';
	});
</script>

<div class="max-w-container w-full py-24 text-white dark:bg-main-background-200">
	<h1
		class="mb-4 py-10 text-center text-5xl font-bold leading-none tracking-tight dark:text-white max-[390px]:text-4xl sm:p-6 lg:text-6xl"
	>
		My projects
	</h1>
	<hr class="m-4 h-0.5 bg-main-200" />
	<p class="w-full text-center">Collection of some of my projects that I've worked on.</p>
	<div
		class="relative z-[0] flex w-full grid-cols-1 flex-col items-center
        justify-center justify-items-center gap-8 gap-x-6 gap-y-4 overflow-hidden py-16 text-center sm:grid sm:grid-cols-2
        sm:gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"
	>
		{#if animating}
			{#each projects as project, i}
				<ProjectCard {i} project_data={project} />
			{/each}
		{/if}
	</div>
</div>
