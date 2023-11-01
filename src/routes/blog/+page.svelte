<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="min-h-screen w-full py-24 dark:bg-black/10">
	<h1
		class="mb-4 text-center font-normal tracking-tight leading-none text-gray-900 text-5xl max-[390px]:text-4xl lg:text-6xl dark:text-white"
	>
		Blog page
	</h1>
	<div
		class="w-full max-w-screen-xl mx-auto pt-[6rem] p-4 flex justify-center flex-wrap gap-[3rem]"
	>
		{#each data.posts as post}
			<a
				href={'/blog/' + post.slug}
				class="flex p-8 flex-col gap-3 bg-gray-100 rounded-lg dark:bg-gray-900 max-w-[380px] w-full"
			>
				<p class="text-xl">{post.title}</p>
				<p class="text-gray-500 dark:text-gray-400">{formatDate(post.date)}</p>
				<p class="text-gray-500 dark:text-gray-400">{post.description}</p>
			</a>
		{/each}
	</div>
</div>
