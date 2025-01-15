<script lang="ts">
	import type { PageData } from './$types.js';
	import ContactForm from './contact-form.svelte';
	import { headerLink } from 'lib/store';
	import { onMount } from 'svelte';
	export let data: PageData;
	onMount(() => {
		$headerLink = 'contact';
	});
</script>

<div class="max-w-container flex w-full flex-col items-center justify-center gap-8">
	<h1 class="text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
		Contact Me
	</h1>
	<p class="text-center text-lg font-medium text-gray-500 dark:text-gray-400">
		I'll get back to you as soon as I can!
	</p>
	<ContactForm data={data.form} />
</div>
