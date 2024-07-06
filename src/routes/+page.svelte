<script lang="ts">
	import Landing from 'components/home/landing.svelte';
	import { paragraph_text, svg_content } from 'lib/texts/home_text';
	import Info from 'components/home/info.svelte';
	import AboutBottom from 'components/home/AboutBottom.svelte';
	import { onMount } from 'svelte';
	import { headerLink } from 'lib/store';

	onMount(() => {
		$headerLink = 'home';
	});
</script>

<div class="min-h-screen relative dark:bg-black/10 dark:text-white/90">
	<Landing {paragraph_text} />
	<div class="relative z-10">
		<div class="custom-shape-divider-bottom-1693661443 text-gray-200/50 dark:text-gray-700/30">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
					fill="currentColor"
				/>
			</svg>
		</div>
	</div>
	<Info {svg_content} />
	<div class="relative">
		<div class="custom-shape-divider-top-1693741156 text-gray-200/50 dark:text-gray-700/[0.32]">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					fill="currentColor"
					d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
				/>
			</svg>
		</div>

		<AboutBottom />
	</div>
</div>

<style lang="postcss">
	.custom-shape-divider-bottom-1693661443 {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.custom-shape-divider-bottom-1693661443 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 143px;
	}

	.custom-shape-divider-top-1693741156 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.custom-shape-divider-top-1693741156 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 150px;
	}
</style>
