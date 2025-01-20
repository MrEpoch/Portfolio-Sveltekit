<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Transition from 'components/transition.svelte';
	import '@fontsource/jetbrains-mono';
	import '@fontsource/poppins';

	export let data;
</script>

<svelte:head>
	<title>Developer Portfolio</title>
	<meta name="color-scheme" content={'dark'} />
	<meta
		name="description"
		content="Alexandr Stenčuk, Web Developer, experienced in SvelteKit and Next.js, with a passion for creating beautiful, functional websites."
	/>
</svelte:head>

<div class="layout dark bg-main-background-100">
	<Header />
	<Transition url={data.url}>
		<main class="min-h-screen w-full bg-main-background-200">
			<slot />
		</main>
	</Transition>
	<Footer />
</div>

<style>
	.layout {
		font-family: 'JetBrains Mono', monospace;
	}
</style>
