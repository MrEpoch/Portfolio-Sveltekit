<script lang="ts">
	import { theme } from 'lib/store';
    import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
    
    $: dark = $theme === "dark";

</script>

<div class:dark>
    <Header />
    <slot />
    <Footer />
</div>
