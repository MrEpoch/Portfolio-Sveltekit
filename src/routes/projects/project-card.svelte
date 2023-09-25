<script lang="ts">

	export let project_data: any;
</script>

<a
	href={`/projects/${project_data.id}`}
	class="
    max-w-[400px] h-full dark:border-0 border border-gray-200 rounded
    shadow dark:bg-gray-900 hover:scale-[1.02] dark:border-gray-700 w-full hover:brightness-50 
    duration-500 transition-all"
>
	<img class="w-full rounded" width="400" src={project_data.img} alt={project_data.name} />
	<div class="p-5">
		<h5 class="mb-2 text-2xl font-anton tracking-wide text-gray-900 dark:text-white/80">
			{project_data.name}
		</h5>
	</div>
</a>
