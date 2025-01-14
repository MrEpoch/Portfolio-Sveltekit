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

<div class="max-w-container w-full py-24 dark:bg-main-background-200 text-white">
	<h1
		class="mb-4 text-center sm:p-6 py-10 font-bold tracking-tight leading-none text-5xl max-[390px]:text-4xl lg:text-6xl dark:text-white"
	>
		My projects
	</h1>
  <hr class="m-4 h-0.5 bg-main-200" />
  <p class="w-full text-center">
    Collection of some of my projects that I've worked on.
  </p>
	<div
		class="relative py-16 z-[0] gap-8 w-full flex flex-col
        overflow-hidden items-center justify-center justify-items-center text-center sm:grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"
	>
		{#if animating}
			{#each projects as project, i}
				<ProjectCard {i} project_data={project} />
			{/each}
		{/if}
	</div>
</div>
