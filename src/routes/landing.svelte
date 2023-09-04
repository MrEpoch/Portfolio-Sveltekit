<script lang="ts">
    import Me from "assets/MP-no_background.png";

    export let paragraph_text: string;
</script>



<div class="py-8 relative z-[0] px-4 mx-auto max-w-screen-xl overflow-hidden items-center text-center lg:py-16 flex flex-col gap-[2rem]">
    <h1 class="mb-4 mt-[12rem] textfont-extrabold tracking-tight leading-none text-gray-900 
        md:text-5xl text-3xl lg:text-6xl dark:text-white">Your 
        <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone">Ideas</span>
        , My Solutions</h1>
    <p class="mb-8 text-sm sm:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        {paragraph_text}
    </p>
    <div class="flex flex-col pb-[40rem] space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="/pricing" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium 
                                  text-center text-white rounded-lg hover:bg-sky-600 focus:ring-4
                                  focus:ring-blue-300 dark:focus:ring-blue-900 bg-gradient-to-r from-indigo-400 to-cyan-400">
            See Pricing
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a href="/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            About Me
        </a>  
    </div>
</div>

