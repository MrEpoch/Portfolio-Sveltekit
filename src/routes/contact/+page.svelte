<script>
    import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

</script>
<div class="min-h-screen dark:bg-black/10 dark:text-white/90">
        <h1 class="mb-4 pt-[6rem] text-center textfont-extrabold tracking-tight leading-none text-gray-900  md:text-5xl text-4xl lg:text-6xl dark:text-white">
            <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone">Contact</span> Me
        </h1>
        <div class="mx-auto max-w-screen-xl py-4">
        <Parallax sections={4}>
            <ParallaxLayer offset={0} rate={-2} class="flex justify-start">
                <a href="/pricing" class="
                    min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                    sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                    rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                    hover:text-white link-cards-pricing duration-500
                    bg-gray-200/60 cursor-pointer flex shadow left-1
                    items-center flex-col sm:p-4 p-2 justify-center gap-1 sm:gap-2 absolute
                ">
                    <h2 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Github</h2>
                    <p class="text-gray-500 dark:text-gray-400 text-sm text-center">d</p>
                </a>
            </ParallaxLayer>
            <ParallaxLayer offset={1} rate={0} class="w-full flex justify-end">
                <a href="/pricing" class="
                    min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                    sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                    rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                    hover:text-white link-cards-pricing duration-500
                    bg-gray-200/60 cursor-pointer flex shadow left-1
                    items-center flex-col sm:p-4 p-2 justify-center gap-1 sm:gap-2 absolute
                ">
                    <h2 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Github</h2>
                    <p class="text-gray-500 dark:text-gray-400 text-sm text-center">d</p>
                </a>
            </ParallaxLayer>
            <ParallaxLayer offset={2} rate={1} class="flex justify-start">
                <a href="/pricing" class="
                    min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                    sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                    rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
                    hover:text-white link-cards-pricing duration-500
                    bg-gray-200/60 cursor-pointer flex shadow left-1
                    items-center flex-col sm:p-4 p-2 justify-center gap-1 sm:gap-2 absolute
                ">
                    <h2 class="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Github</h2>
                    <p class="text-gray-500 dark:text-gray-400 text-sm text-center">d</p>
                </a>
            </ParallaxLayer>
        </Parallax>
        </div>
</div>



