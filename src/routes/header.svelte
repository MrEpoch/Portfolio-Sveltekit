<script lang="ts">
	import Logo from 'assets/logo.png';
	import { headerLink } from 'lib/store';

	let hidden = true;

</script>

<nav class="dark:bg-main-background-200 dark:text-white">
	<div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center">
			<div class="h-16 mr-3 w-16">
				<img src={Logo} class="h-full w-full rounded-full" alt="Alexandr Stenčuk Logo" />
			</div>
		</a>
		<button
			on:click={() => (hidden = !hidden)}
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
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
			class={`${hidden ? 'hidden' : 'transition opacity-1'} w-full md:block md:w-auto`}
			id="navbar-default"
		>
			<ul
				class="font-medium flex sm:items-center flex-col p-4 md:p-0 mt-4 border border-gray-100
            rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white
            md:dark:bg-transparent dark:border-gray-700 dark:bg-black/90"
			>
				<li>
					<a
						class:currentHeader={$headerLink === 'home'}
						on:click={() => (hidden = true)}
						href="/"
            class="hoverHeader"
						>Home</a
					>
				</li>
				<li>
					<a
						class:currentHeader={$headerLink === 'projects'}
						on:click={() => (hidden = true)}
						href="/projects"
            class="hoverHeader"
						>Projects</a
					>
				</li>
				<li>
					<a
						class:currentHeader={$headerLink === 'blog'}
						on:click={() => (hidden = true)}
						href="https://alex-ghost.stencukpage.com/"
            class="hoverHeader"
						>Blog</a
					>
				</li>
				<li>
					<a
						class:currentHeader={$headerLink === 'contact'}
						on:click={() => (hidden = true)}
						href="/contact"
						class="hoverHeader"
						>Contact</a
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
    @apply block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main-200 md:p-0 dark:text-white md:dark:hover:text-main-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
  }
</style>
