<script lang="ts">
    import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
    
    $: dark = true;
</script>

<div class:dark>
    <Header />
    <slot />
    <Footer />
</div>
