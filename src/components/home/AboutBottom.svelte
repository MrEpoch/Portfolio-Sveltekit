<script lang="ts">
  import { scale, fly } from "svelte/transition";

  $: shown = {
    first: false,
    second: false,
    third: false
  }
</script>

<section
  class="min-h-screen flex flex-col justify-center w-full py-[10rem] relative z-[0] px-4 mx-auto max-w-screen-xl"
>
  <div id="accordion-collapse w-full" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
      <button  type="button" on:click={() => shown.first = !shown.first} class="flex items-center justify-between w-full p-7 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
        <span>My favourite hobbies?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    {#if shown.first}
      <div in:fly={{ y: 50 }} out:fly={{ y: 50 }} id="accordion-collapse-body-1"  aria-labelledby="accordion-collapse-heading-1">
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 ">
        <p class="mb-2 text-gray-500 dark:text-gray-400">I like to read some fantasy novels in my free time. When i have free time i usually go exercise to the gym. I am exited about creating new projects with cool features.</p>
      </div>
    </div>
    {/if}
    <h2 id="accordion-collapse-heading-2">
      <button type="button" on:click={() => shown.second = !shown.second} class="flex items-center justify-between w-full p-7 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
        <span>What are my best projects</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    {#if shown.second}
    <div in:fly={{ y: 50 }} out:fly={{ y: 50 }} id="accordion-collapse-body-2"  aria-labelledby="accordion-collapse-heading-2">
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        I have collection of my <a class="text-blue-600 hover:underline" href="/projects">proudest projects</a> i made, which are mostly full stack with Sveltekit or Next.js. Most of my projects have database like Postgre, but on some i use CMS too. Some of my most interesting projects have database data cached through redis.
      </div>
    </div>
    {/if}
    <h2 id="accordion-collapse-heading-3">
      <button type="button" on:click={() => shown.third = !shown.third} class="flex items-center justify-between w-full p-7 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
        <span>My developer goals</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    {#if shown.third}
    <div in:fly={{ y: 50 }} out:fly={{ y: 50 }} id="accordion-collapse-body-3"  aria-labelledby="accordion-collapse-heading-3">
      <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        One of my goals as developer is make some interesting ideas to the reality. I like looking at smart methods of caching data or making websites fast and optimized, or looking at cool css component libraries, which shown way of doing things.
      </div>
    </div>
    {/if}
  </div>

</section>
