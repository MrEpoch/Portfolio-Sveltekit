<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from "$lib/config";

    export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="min-h-screen w-full dark:bg-black/10">
    <div class="w-full max-w-screen-xl mx-auto pt-[6rem] p-4 flex flex-col gap-[3rem]">
        {#each data.posts as post}
            <a href={"/blog/" + post.slug} class="flex p-8 flex-col gap-3 bg-gray-100 rounded-lg dark:bg-gray-900 max-w-[400px] w-full">
                <p class="text-xl">{post.title}</p>
                <p class="text-gray-500 dark:text-gray-400">{formatDate(post.date)}</p>
                <p class="text-gray-500 dark:text-gray-400">{post.description}</p>
            </a>            
        {/each}
    </div>    
</div>
