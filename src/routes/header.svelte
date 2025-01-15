<script lang="ts">
	import Logo from 'assets/logo.png';
	import { headerLink } from 'lib/store';

	let hidden = true;
</script>

<nav class="dark:bg-main-background-200 dark:text-white">
	<div class="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
		<a href="/" class="flex items-center">
			<div class="mr-3 h-16 w-16">
				<img src={Logo} class="h-full w-full rounded-full" alt="Alexandr Stenčuk Logo" />
			</div>
		</a>
		<button
			on:click={() => (hidden = !hidden)}
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div
			class={`${hidden ? 'hidden' : 'opacity-1 transition'} w-full md:block md:w-auto`}
			id="navbar-default"
		>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium
            dark:border-gray-700 dark:bg-black/90 sm:items-center md:mt-0 md:flex-row md:space-x-8 md:border-0
            md:bg-white md:p-0 md:dark:bg-transparent"
			>
				<li>
					<a
						class:currentHeader={$headerLink === 'home'}
						on:click={() => (hidden = true)}
						href="/"
						class="hoverHeader">Home</a
					>
				</li>
				<li>
					<a
						class:currentHeader={$headerLink === 'projects'}
						on:click={() => (hidden = true)}
						href="/projects"
						class="hoverHeader">Projects</a
					>
				</li>
				<li>
					<a
						class:currentHeader={$headerLink === 'blog'}
						on:click={() => (hidden = true)}
						href="https://alex-ghost.stencukpage.com/"
						class="hoverHeader">Blog</a
					>
				</li>
				<li>
					<a
						class:currentHeader={$headerLink === 'contact'}
						on:click={() => (hidden = true)}
						href="/contact"
						class="hoverHeader">Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	.currentHeader {
		@apply !text-main-200;
	}

	.hoverHeader {
		@apply block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-main-200 md:dark:hover:bg-transparent md:dark:hover:text-main-300;
	}
</style>
