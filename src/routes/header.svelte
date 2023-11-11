<script lang="ts">
	import Logo from 'assets/logo.png';
	import { theme, headerLink } from 'lib/store';

	let hidden = true;

	function SwitchTheme() {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	}
</script>

<nav class="dark:bg-black/10 dark:text-white/90">
	<div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center">
			<div class="h-16 mr-3 w-16">
				<img src={Logo} class="h-full w-full" alt="Alexandr Stenčuk Logo" />
			</div>
		</a>
		<button
			on:click={() => (hidden = !hidden)}
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
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
            class:currentHeader={$headerLink === "home"}
						on:click={() => (hidden = true)}
						href="/"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Home</a
					>
				</li>
				<li>
					<a
            class:currentHeader={$headerLink === "about"}
						on:click={() => (hidden = true)}
						href="/about"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>About</a
					>
				</li>
				<li>
					<a
            class:currentHeader={$headerLink === "projects"}
						on:click={() => (hidden = true)}
						href="/projects"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Projects</a
					>
				</li>
				<li>
					<a
            class:currentHeader={$headerLink === "blog"}
						on:click={() => (hidden = true)}
						href="/blog"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Blog</a
					>
				</li>
				<li>
          <a
            class:currentHeader={$headerLink === "contact"}
						on:click={() => (hidden = true)}
						href="/contact"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Contact</a
					>
				</li>
				<li>
					<button
						on:click={() => {
							SwitchTheme();
							hidden = true;
            }} 
						class="flex items-center justify-center w-full text-start
                    py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                    dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						<svg
							class="w-8 dark:text-white text-black"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><title>brightness-4</title><path
								fill="currentColor"
								d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
							/></svg
						>
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
  .currentHeader {
    @apply text-blue-500;
  }
</style>
