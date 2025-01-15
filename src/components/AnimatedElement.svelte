<script lang="ts">
	import { fade } from 'svelte/transition';
  import viewport from './useViewportAction.js';

	let isInView: boolean;
</script>

<div
	class="wrapper"
  use:viewport on:enterViewport={() => (isInView = true)}
>
	{#if isInView}
		<div in:fade class="box">
			<slot />
		</div>
	{/if}
</div>
