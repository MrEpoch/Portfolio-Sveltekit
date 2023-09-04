<script lang="ts">
	import ContactCard from "./ContactCard.svelte";
    import SvgContainer from "./SvgContainer.svelte";
	import Landing from "./landing.svelte";
    import Feather from "feather-icons"; 
    import Me from "assets/MP-no_background.png";

    $: message = "";

    function addedToClipBoard() {
        message = "Copied to clipboard";
        setTimeout(() => {
            message = "";
        }, 1500)
    }

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

    const contact_info = [
        {
            type: "email",
            svg: Feather.icons.mail.toSvg(),
            isLink: false,
            content: "dev@stencukpage.com"
        },
        {
            type: "github",
            svg: Feather.icons.github.toSvg(),
            isLink: true,
            content: "https://github.com/MrEpoch/"
        },
        {
            type: "instagram",
            svg: Feather.icons.instagram.toSvg(),
            isLink: true,
            content: "instagram"
        }
    ]

</script>


<div class="min-h-screen relative dark:bg-black/10 dark:text-white/90">
    <Landing {paragraph_text} />
    <div class="relative z-10">
        <div class="custom-shape-divider-bottom-1693661443 text-gray-200/50 dark:text-gray-700/30">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <section class="min-h-screen flex flex-col bg-gray-200/50 dark:bg-gray-700/30">
        <div class="w-full mt-[16rem] py-8 px-4 mx-auto max-w-screen-xl overflow-hidden 
            flex flex-wrap gap-[5rem] justify-center"
        >
            {#each svg_content as i, inx}
                <a href="/pricing" class="
                            min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                            sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                            rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                            hover:text-white link-cards-pricing duration-500
                            bg-gray-200/60 cursor-pointer flex shadow
                            items-center flex-col sm:p-4 p-2 justify-center gap-1 sm:gap-2
                ">
                    <SvgContainer number={inx} />
                    <h2 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{i.title}</h2>
                    <p class="text-gray-500 dark:text-gray-400 text-sm text-center">{i.content}</p>
                </a>
            {/each}
        </div>
    </section>
    <div class="relative">
        <div class="custom-shape-divider-top-1693741156 text-gray-200/50 dark:text-gray-700/30">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path fill="currentColor" d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
            </svg>
        </div>
    </div>
    <section class="min-h-screen flex flex-col items-center mt-[143px] py-8 relative z-[0] px-4 mx-auto max-w-screen-xl">
        <h1 class="text-center text-6xl mt-[7rem] font-extrabold text-gray-900 dark:text-white">Contact Me</h1>
        <div class="flex w-full flex-wrap gap-[3rem] mt-[8rem] items-center justify-around">
            {#each contact_info as i}
                <ContactCard {i} {addedToClipBoard} />
            {/each}
        </div>
        <img src={Me} class="w-fit z-0 shadow sm:h-[40rem] overflow-hidden rounded-b-[2rem] mt-[10rem]" alt="Alexandr Stenčuk" />        
    </section>

    {#if message.length > 0}
        <p class="fixed right-3 bottom-5 rounded-xl px-6 py-4 bg-main text-center text-sm text-white">{message}</p>
    {/if}
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

    .link-cards-pricing:hover h2 {
        color: white;
    }

    .link-cards-pricing:hover p {
        color: white;
    }

    .custom-shape-divider-top-1693741156 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top-1693741156 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 150px;
    }
</style>
