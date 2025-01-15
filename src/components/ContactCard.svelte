<script lang="ts">
	export let i: any;
	export let addedToClipBoard: any;
	import { clipboard } from '@skeletonlabs/skeleton';
	import { Mail, Github } from 'lucide-svelte';

	const icons = {
		mail: Mail,
		github: Github
	};
</script>

{#if !i.isLink}
	<button
		class="flex w-full max-w-[250px] cursor-pointer
                items-center justify-center gap-4 rounded-md
                bg-gray-200/60 from-indigo-400 to-cyan-400
                py-8 text-xl font-bold
                transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:text-white hover:transition-colors hover:duration-500 dark:bg-gray-600/20 dark:text-white/90"
		use:clipboard={i.content}
		on:click={addedToClipBoard}
	>
		<svelte:component this={icons[i.type]} />
		<span>{i.type}</span>
	</button>
{:else}
	<a
		href={i.content}
		class="flex w-full max-w-[250px] cursor-pointer
                items-center justify-center gap-4 rounded-md
                bg-gray-200/60 from-indigo-400 to-cyan-400
                py-8 text-xl
                font-bold transition-colors duration-500 ease-in-out hover:bg-gradient-to-r hover:text-white hover:transition-colors hover:duration-500 dark:bg-gray-600/20"
	>
		<svelte:component this={icons[i.type]} />
		<span>{i.type}</span>
	</a>
{/if}
