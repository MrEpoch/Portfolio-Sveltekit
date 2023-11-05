<script lang="ts">
	import { theme } from "lib/store";

	export let project_data: any;
</script>

<a
	href={`/projects/${project_data.id}`}
	class="
    max-w-[400px] h-full dark:border-0 border border-gray-200 rounded transition-transform duration-300
    shadow dark:bg-darkmode-400 hover:scale-[1.02] dark:border-gray-700 w-full group
    "
>
	<img class="w-full rounded group-hover:brightness-75 dark:group-hover:brightness-50 transition duration-300" width="400" src={$theme === "dark" ? project_data.img.dark : project_data.img.light} alt={project_data.name} />
	<div class="p-5">
		<h5 class="mb-2 text-2xl font-anton tracking-wide text-gray-900 dark:text-white/80">
			{project_data.name}
		</h5>
	</div>
</a>
