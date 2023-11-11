<script lang="ts">
  import { blur } from 'svelte/transition';

	$: shown = {
		first: false,
		second: false,
		third: false
	};
</script>

<section class="min-h-screen w-full">
  <div class="w-full max-w-screen-xl mx-auto px-4 relative py-64 flex flex-col items-center gap-12">
    <h3 class="text-4xl font-bold text-gray-900 dark:text-white">QA about me</h3>
    <svg
			viewBox="0 0 24 24"
			class="dark:text-gray-100 w-32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/><g id="SVGRepo_iconCarrier">
      <path
					d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				/> <circle cx="12" cy="16" r="1" fill="currentColor" />
				<path
					d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				/>
			</g></svg
		>
		<div id="accordion-collapse" class="w-full" data-accordion="collapse">
			<h2 id="accordion-collapse-heading-1">
				<button
					type="button"
					on:click={() => (shown.first = !shown.first)}
					class="flex items-center justify-between w-full p-7 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
					data-accordion-target="#accordion-collapse-body-1"
					aria-expanded="true"
					aria-controls="accordion-collapse-body-1"
				>
					<span>My favourite hobbies?</span>
					<svg
						data-accordion-icon
						class="w-3 h-3 rotate-180 shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5 5 1 1 5"
						/>
					</svg>
				</button>
			</h2>
			{#if shown.first}
				<div
					in:blur
					out:blur
					id="accordion-collapse-body-1"
					aria-labelledby="accordion-collapse-heading-1"
				>
					<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
						<p class="mb-2 text-gray-500 dark:text-gray-400">
							I like to read some fantasy novels in my free time. When i have free time i usually go
							exercise to the gym. I am exited about creating new projects with cool features.
						</p>
					</div>
				</div>
			{/if}
			<h2 id="accordion-collapse-heading-2">
				<button
					type="button"
					on:click={() => (shown.second = !shown.second)}
					class="flex items-center justify-between w-full p-7 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
					data-accordion-target="#accordion-collapse-body-2"
					aria-expanded="false"
					aria-controls="accordion-collapse-body-2"
				>
					<span>What are my best projects</span>
					<svg
						data-accordion-icon
						class="w-3 h-3 rotate-180 shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5 5 1 1 5"
						/>
					</svg>
				</button>
			</h2>
			{#if shown.second}
				<div
					in:blur
					out:blur
					id="accordion-collapse-body-2"
					aria-labelledby="accordion-collapse-heading-2"
				>
					<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
						I have collection of my <a class="text-blue-600 hover:underline" href="/projects"
							>proudest projects</a
						> i made, which are mostly full stack with Sveltekit or Next.js. Most of my projects have
						database like Postgre, but on some i use CMS too. Some of my most interesting projects have
						database data cached through redis.
					</div>
				</div>
			{/if}
			<h2 id="accordion-collapse-heading-3">
				<button
					type="button"
					on:click={() => (shown.third = !shown.third)}
					class="flex items-center justify-between w-full p-7 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
					data-accordion-target="#accordion-collapse-body-3"
					aria-expanded="false"
					aria-controls="accordion-collapse-body-3"
				>
					<span>My developer goals</span>
					<svg
						data-accordion-icon
						class="w-3 h-3 rotate-180 shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5 5 1 1 5"
						/>
					</svg>
				</button>
			</h2>
			{#if shown.third}
				<div
					in:blur
					out:blur
					id="accordion-collapse-body-3"
					aria-labelledby="accordion-collapse-heading-3"
				>
					<div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
						One of my goals as developer is make some interesting ideas to the reality. I like
						looking at smart methods of caching data or making websites fast and optimized, or
						looking at cool css component libraries, which shown way of doing things.
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
