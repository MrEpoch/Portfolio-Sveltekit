<script>
	import { page } from '$app/state';
	import notfound from 'assets/notfound.svg';
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center dark:bg-black/10 dark:text-white/90"
>
	<img src={notfound} width="300" alt="not found" />
	<div
		class="flex h-fit max-w-[400px] flex-col items-center
                justify-center rounded-xl p-12
                "
	>
		<h1
			class="flex flex-col items-center gap-[1rem] text-center
                   text-3xl font-bold text-gray-900 dark:text-white"
		>
			<span
				class="line h-1 w-full bg-gradient-to-r
 from-indigo-400 to-cyan-400"
			/>
			{$page.error?.message}
		</h1>
	</div>
</div>
