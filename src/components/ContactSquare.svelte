<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let info;
</script>

<a
	in:fly|global={{ y: 100, duration: 300, easing: backOut }}
	href={info.link}
	class="
      link-cards-pricing left-1 flex max-h-[200px]
      min-h-[200px] min-w-[200px] max-w-[200px] cursor-pointer
      flex-col items-center justify-center gap-[2rem] rounded-xl bg-gray-200/60 from-indigo-400
      to-cyan-400 p-2 shadow
      transition-all duration-500 hover:bg-gradient-to-r hover:text-white hover:transition-all
      dark:bg-gray-600/20 sm:max-h-[300px] sm:min-h-[300px] sm:min-w-[300px] sm:max-w-[300px] sm:gap-[3rem] sm:p-4
          "
>
	<h2 class="text-2xl font-bold dark:text-white sm:text-3xl">{info.name}</h2>
	<slot />
</a>
