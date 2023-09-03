<script>
	import { page } from '$app/stores';
    import notfound from "assets/notfound.svg";

</script>

<div class="min-h-screen flex flex-col items-center justify-center dark:bg-black/10 dark:text-white/90">
    <img src={notfound} width="300" alt="not found" />
    <div class="flex flex-col items-center justify-center max-w-[400px]
                h-fit p-12                 rounded-xl
                "
    >
        <h1 class="text-3xl font-bold gap-[1rem] text-gray-900 dark:text-white 
                   flex flex-col items-center text-center"
        >
            <span class="line bg-gradient-to-r from-indigo-400 to-cyan-400
 h-1 w-full"></span> {$page.error?.message}
        </h1>
    </div>
</div>
