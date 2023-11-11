<script lang="ts">
  const updates = [
    {
      title: "Echoes Of Literature, WebApp",
      description: "FullStack NextJS WebApp, auth is made through Supabase with all features ranging from password recovery to email auth.",
      release: "Released on 2023 Oct 2"
    },
    {
      title: "Lifier, NextJS WebApp",
      description: "Website built through NextJS, it has blog managed through sanityIO and more.",
      release: "Released on 2023 Sep 20"
    },
    {
      title: "Velvet Line, FullStack WebApp",
      description: "Test of using Supabase as auth and as database solution, it worked pretty well.",
      release: "Released on 2023 Sep 13"
    }
  ]
</script>


<div class="py-16">
  <div class="max-w-screen-xl px-4 w-full  mx-auto">
<ol class="relative border-l border-gray-200 dark:border-gray-700">
    <li class="p-6 mb-10 ml-6">
      <a href="/projects">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">InfinitySights VR, Sveltekit FullStack WebApp <span class="bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded text-white/90 ml-3">Latest</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on 2023 Nov 9</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Simple sveltekit web app, has some animation, darkmode and language switch</p>
      </a>
    </li>
  {#each updates as update}
    <li class="p-6 mb-10 ml-6">
      <a href="/projects">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{update.title}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{update.release}</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{update.description}</p>
      </a>
    </li>
    {/each}
    <li class="p-6 ml-6">
      <a href="/projects">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Tomato Dream, FullStack Webapp</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released 2023 Aug 28</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">FullStack SvelteKit app with Auth, Caching, Prisma and more.</p>
        </a>
    </li>
</ol>

  </div>
</div>
