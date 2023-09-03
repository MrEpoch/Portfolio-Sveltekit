<script lang="ts">
	import { theme } from 'lib/store';
    import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
    
    $: dark = $theme === "dark";

</script>

<svelte:head>
    <title>Portfolio</title>
    <meta name="color-scheme" content={dark ? 'dark' : 'light'} />
</svelte:head>

<div class:dark>
    <Header />
    <slot />
    <Footer />
</div>
