<script lang="ts">
    import { formatDate } from "$lib/utils";
    import "./blog.css";

    export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>


<div class="min-h-screen w-full dark:bg-black/10"> 
    <article class="min-h-screen p-4 w-full">
        <hgroup>
        <h1 class="mb-4 pt-[6rem] text-center 
            textfont-extrabold tracking-tight leading-none 
        text-gray-900 md:text-4xl text-3xl lg:text-5xl dark:text-white">{data.meta.title}</h1>
        <p class="mb-8 ml-1 text-sm sm:text-lg font-normal text-gray-500 
            lg:text-xl dark:text-gray-400">Published At {formatDate(data.meta.date)}</p>
        </hgroup>

        <div class="tags mt-[2rem] flex sm:justify-unset justify-center flex-wrap">
            {#each data.meta.categories as category}
                <a href={`/blog?tag=${category.toLowerCase()}`} class="rounded-full py-3 
            font-bold px-6 bg-gray-200 dark:bg-gray-700">#{category}</a>
            {/each}
        </div>

        <div class="blog-body mt-[5rem]">
            <svelte:component this={data.content} />
        </div>
    </article>
    <div class="flex items-center justify-center py-[5rem]">
        <button class="bg-blue-500 py-2 px-4 text-white font-semibold rounded-lg">
            <a href="/blog" class="flex gap-1">
                <svg class="w-6 h-6 text-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>return</title>
                    <path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
                </svg>
                Back To Posts
            </a>
        </button>
    </div>
</div>

<style>
	article {
        max-width: 800px;
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: 5rem;
		color: inherit;
	}

	.tags {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
    }

</style>
