<script lang="ts">
    import { Parallax, ParallaxLayer } from 'svelte-parallax';
    import Me from "assets/MP-no_background.png";
    import About from "assets/about-page.svg";
	import AboutMe from './about_me.svelte';

    let parallax;
</script>


<div class="min-h-screen w-full flex flex-col dark:bg-black/10 dark:text-white/90">
    <div class="min-h-screen w-full py-8 px-4 mx-auto max-w-screen-xl gap-[8rem] flex flex-col items-center">
        <h1 class="mb-4 mt-[6rem] textfont-extrabold tracking-tight leading-none text-gray-900 
            md:text-5xl text-3xl lg:text-6xl dark:text-white"> About
        <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone">Me</span></h1>
        <img src={About} class="w-1/2 object-cover h-full mr-[4rem]" alt="signalizing about page"/> 
    </div>
    <div class="relative">
        <div class="custom-shape-divider-bottom-1693816573 text-gray-200/50 dark:text-gray-700/30">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path fill="currentColor" d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
            </svg>
        </div>
    </div>
    <div class="h-full bg-gray-200/50 dark:bg-gray-700/30 w-full">
        <Parallax sections={3} bind:this={parallax} >    
            <ParallaxLayer offset={1} rate={2.5} class="flex justify-start">
                <div class="h-full w-1/2 flex justify-center">
                    <img src={Me} class="w-fit shadow object-top h-full" alt="Alexandr Stenčuk" />        
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} rate={-2.5} class="flex justify-end">
            <div class="dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] 
                        dark:from-gray-900 dark:to-gray-600 bg-gradient-to-r 
                        from-slate-200 to-zinc-200 opacity-80 w-1/2 h-full flex flex-col gap-[2rem]
                        py-8 px-4 mx-auto max-w-screen-xl
            ">
                    <AboutMe />
                </div>
            </ParallaxLayer>
        </Parallax>
    </div>
</div>

<style lang="postcss">
    .custom-shape-divider-bottom-1693816573 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1693816573 svg {
        position: relative;
        display: block;
        width: calc(300% + 1.3px);
        height: 184px;
    }
</style>
