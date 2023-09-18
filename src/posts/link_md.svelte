<script lang="ts">
    export let href: string;
    export let color = 0;
</script>

<a class={
    color === 0 ? "text-blue-500"
: "bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent box-decoration-clone"
    } {href}><slot /></a>
