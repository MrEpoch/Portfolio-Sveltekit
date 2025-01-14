<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Transition from 'components/transition.svelte';
  import "@fontsource/jetbrains-mono";
  import '@fontsource/poppins';

	export let data;
</script>

<svelte:head>
	<title>Dev Portfolio</title>
	<meta name="color-scheme" content={'dark'} />
	<meta
		name="description"
		content="Alexandr Stenčuk, Frontend Developer, experienced in SvelteKit and Next.js"
	/>
</svelte:head>

<div class="dark layout bg-main-background-100">
	<Header />
	<Transition url={data.url}>
    <main class="bg-main-background-200 min-h-screen w-full">
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
