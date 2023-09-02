<script lang="ts">
    import Me from "assets/MP-no_background.png";

    const paragraph_text = `
        Expert in Next.js, SvelteKit, Express.js, and TailwindCSS. Crafting diverse projects, 
        from static sites to dynamic apps with auth, APIs, Stripe, and storage.
    `
</script>


<div class="min-h-screen relative dark:bg-black/90 dark:text-white/90">
    <div class="py-8 relative px-4 mx-auto max-w-screen-xl overflow-x-hidden items-center text-center lg:py-16 flex flex-col gap-[2rem]">
        <h1 class="mb-4 mt-[12rem] textfont-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your Ideas, My Solutions</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            {paragraph_text}
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/pricing" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium 
                                      text-center text-white rounded-lg bg-main hover:bg-sky-600 focus:ring-4
                                      focus:ring-blue-300 dark:focus:ring-blue-900">
                See Pricing
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                About Me
            </a>  
        </div>
        <img src={Me} class="w-fit h-[40rem] rounded-b-[2rem] mt-[10rem] translate-y-[10%]" alt="Alexandr Stenčuk" />

    </div>
    <div class="relative">
        <div class="custom-shape-divider-bottom-1693661443 text-main">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <section class="w-full min-h-screen bg-main"></section>
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

    .custom-shape-divider-bottom-1693661443 .shape-fill {
        fill: var(--main);
    }
</style>
