<script lang="ts">
	import { theme } from 'lib/store';
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Transition from 'components/transition.svelte';

	$: dark = $theme === 'dark';
    export let data;
</script>

<svelte:head>
	<title>Dev Portfolio</title>
	<meta name="color-scheme" content={dark ? 'dark' : 'light'} />
  <meta name="description" content="Alexandr Stenčuk, Frontend Developer, experienced in SvelteKit and Next.js" />
</svelte:head>

<div class:dark>
	<Header />
    <Transition url={data.url}>
        <slot />
    </Transition>
	<Footer />
</div>
