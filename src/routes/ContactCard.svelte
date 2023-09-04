<script lang="ts">
    export let i: any;
    export let addedToClipBoard: any;
    import { clipboard } from '@skeletonlabs/skeleton';

</script>


{#if !i.isLink}
    <button class="hover:bg-gradient-to-r bg-gray-200/60 rounded-md cursor-pointer
                from-indigo-400 to-cyan-400 duration-500 hover:text-white
                transition-colors hover:transition-colors hover:duration-500 
                ease-in-out dark:text-white/90 dark:bg-gray-600/20
                font-bold text-xl items-center justify-center py-8 w-full max-w-[250px] flex gap-4" use:clipboard={i.content}
                on:click={addedToClipBoard}
    >
        {@html i.svg}
        <span>{i.type}</span>
    </button>
{:else}
    <a href={i.content} class="hover:bg-gradient-to-r bg-gray-200/60 rounded-md cursor-pointer
                from-indigo-400 to-cyan-400 duration-500 hover:text-white
                transition-colors hover:transition-colors hover:duration-500 
                ease-in-out dark:bg-gray-600/20
                font-bold text-xl items-center justify-center py-8 w-full max-w-[250px] flex gap-4">
        {@html i.svg}
        <span>{i.type}</span>
    </a>
{/if}

