<script lang="ts">
	import AnimatedElement from 'components/AnimatedElement.svelte';
	import SvgContainer from 'components/SvgContainer.svelte';

	export let svg_content: any;
</script>

<section class="min-h-screen flex text-white flex-col bg-main-background-100 ">
	<div
		class="w-full mt-[16rem] py-8 px-4 mx-auto max-w-screen-xl overflow-hidden
        flex flex-wrap gap-[5rem] justify-center"
	>
		{#each svg_content as i, inx}
			<AnimatedElement>
				<a
					href="/projects"
					class="
                        transition
                        min-h-[200px] max-h-[200px] max-w-[200px] min-w-[200px]
                        sm:min-h-[300px] sm:max-h-[300px] sm:max-w-[300px] sm:min-w-[300px]
                        rounded-xl hover:transition-all bg-gray-600/20 hover:bg-main-200
                        hover:text-black border-4 hover:border-black border-transparent group duration-300
                        cursor-pointer flex shadow 
                        items-center flex-col sm:p-4 p-2 justify-center gap-1 sm:gap-2
            "
				>
					<SvgContainer number={inx} />
					<h2 class="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-black dark:text-white">{i.title}</h2>
					<p class="text-gray-500 dark:text-gray-400  group-hover:text-black text-sm text-center">{i.content}</p>
				</a>
			</AnimatedElement>
		{/each}
	</div>
</section>
