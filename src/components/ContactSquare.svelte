<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let info;
</script>

<a
	in:fly|global={{ y: 100, duration: 300, easing: backOut }}
	href={info.link}
	class="
      min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
      sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
      rounded-xl hover:transition-all transition-all dark:bg-gray-600/20 hover:bg-gradient-to-r from-indigo-400 to-cyan-400
      hover:text-white link-cards-pricing duration-500
      bg-gray-200/60 cursor-pointer flex shadow left-1
      items-center flex-col sm:p-4 p-2 justify-center gap-[2rem] sm:gap-[3rem]
          "
>
	<h2 class="text-2xl sm:text-3xl font-bold dark:text-white">{info.name}</h2>
	<slot />
</a>
