<script lang="ts">
  import { fade } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  let isInView: any;
</script>

<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
    <div in:fade class="box">
        <slot />
    </div>
  {/if}
</div>
