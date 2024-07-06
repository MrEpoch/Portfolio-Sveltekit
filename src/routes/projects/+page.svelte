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

<div class="min-h-screen pt-24 pb-32 dark:bg-black/10 dark:text-white/90">
	<h1
		class="mb-4 text-center sm:p-6 py-10 font-bold tracking-tight leading-none text-gray-900 text-5xl max-[390px]:text-4xl lg:text-6xl dark:text-white"
	>
		My projects
	</h1>
	<div
		class="relative z-[0] px-4 mx-auto max-w-screen-2xl flex flex-col
        overflow-hidden items-center justify-center justify-items-center text-center lg:py-16 sm:grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"
	>
		{#if animating}
			{#each projects as project, i}
				<ProjectCard {i} project_data={project} />
				{#if i !== projects.length - 1}
					<div
						class="sm:hidden flex justify-center bg-gradient-to-b from-indigo-400 to-cyan-400 w-1 h-16 rounded-xl"
					/>
				{/if}
			{/each}
		{/if}
	</div>
</div>
