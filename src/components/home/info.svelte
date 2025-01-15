<script lang="ts">
	import AnimatedElement from 'components/AnimatedElement.svelte';
	import SvgContainer from 'components/SvgContainer.svelte';

	export let svg_content: any;
</script>

<section class="flex min-h-screen flex-col bg-main-background-100 text-white">
	<div
		class="mx-auto mt-[16rem] flex w-full max-w-screen-xl flex-wrap justify-center
        gap-[5rem] overflow-hidden px-4 py-8"
	>
		{#each svg_content as i, inx}
			<AnimatedElement>
				<a
					href="/projects"
					class="
                        group
                        flex max-h-[200px] min-h-[200px] min-w-[200px]
                        max-w-[200px] cursor-pointer flex-col items-center
                        justify-center gap-1 rounded-xl border-4
                        border-transparent bg-gray-600/20 p-2 shadow transition duration-300
                        hover:border-black hover:bg-main-200 hover:text-black
                        hover:transition-all sm:max-h-[300px] sm:min-h-[300px] sm:min-w-[300px] sm:max-w-[300px] sm:gap-2 sm:p-4
            "
				>
					<SvgContainer number={inx} />
					<h2
						class="text-lg font-bold text-gray-900 group-hover:text-black dark:text-white sm:text-2xl"
					>
						{i.title}
					</h2>
					<p class="text-center text-sm text-gray-500 group-hover:text-black dark:text-gray-400">
						{i.content}
					</p>
				</a>
			</AnimatedElement>
		{/each}
	</div>
</section>
