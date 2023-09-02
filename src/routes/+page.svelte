<script lang="ts">
	import SvgContainer from "./SvgContainer.svelte";
	import Landing from "./landing.svelte";

    const paragraph_text = `
        Expert in Next.js, SvelteKit, Express.js, and TailwindCSS. Crafting diverse projects, 
        from static sites to dynamic apps with auth, APIs, Stripe, and storage.
    `;

    const svg_content = [
        {
            id: 1,
            title: "Responsive Design",
            content: "Designed for optimal user experience on all devices."
        },
        {
            id: 2,
            title: "Project setup",
            content: "Experience with variety of frameworks."
        },
        {
            id: 3,
            title: "Cached content",
            content: "Highly optimized for performance. Database and frontend caching."
        }
    ];

</script>


<div class="min-h-screen relative dark:bg-black/90 dark:text-white/90">
    <Landing {paragraph_text} />
    <section class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <div class="w-full mt-[16rem] py-8 px-4 mx-auto max-w-screen-xl overflow-hidden 
            flex flex-wrap gap-[5rem] justify-center"
        >
            {#each svg_content as i, inx}
                <a href="/pricing" class="
                            min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                            sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                            rounded-xl transition-all dark:bg-gray-800 hover:bg-main
                            bg-gray-200 dark:hover:bg-main cursor-pointer flex
                            items-center flex-col sm:p-4 p-2 justify-center gap-1 sm:gap-2
                ">
                    <SvgContainer number={inx} />
                    <h2 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{i.title}</h2>
                    <p class="text-gray-500 dark:text-gray-400 text-sm text-center">{i.content}</p>
                </a>
            {/each}
        </div>
    </section>
</div>

<style lang="postcss">
    .custom-shape-divider-bottom-1693661443 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-bottom-1693661443 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 143px;
    }
</style>
