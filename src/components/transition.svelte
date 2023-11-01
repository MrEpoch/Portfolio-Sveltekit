<script lang="ts">
	import { scale } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="h-full" in:scale>
		<slot />
	</div>
{/key}
