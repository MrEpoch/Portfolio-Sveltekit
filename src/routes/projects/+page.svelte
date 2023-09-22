<script lang="ts">
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
</script>

<div class="min-h-screen dark:bg-black/10 dark:text-white/90">
	<div
		class="py-8 relative z-[0] px-4 mx-auto max-w-screen-2xl justify-center
        overflow-hidden items-center text-center lg:py-16 flex flex-wrap gap-[1rem]"
	>
		{#each projects as project}
			<ProjectCard project_data={project} />
		{/each}
	</div>
</div>
