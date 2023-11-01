<script lang="ts">
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
</script>

<div class="min-h-screen py-[6rem] dark:bg-black/10 dark:text-white/90">
	<h1
		class="mb-4 text-center font-bold tracking-tight leading-none text-gray-900 text-5xl max-[390px]:text-4xl lg:text-6xl dark:text-white"
	>
		My projects
	</h1>
	<div
		class="relative z-[0] px-4 mx-auto max-w-screen-2xl flex flex-col
        overflow-hidden items-center text-center lg:py-16 sm:grid grid-cols-1 gap-x-6 gap-y-6
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"
	>
		{#each projects as project}
			<ProjectCard project_data={project} />
		{/each}
	</div>
</div>
