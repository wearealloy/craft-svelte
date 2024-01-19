<script>
    import '$lib/css/app.css';
    import Error from '$lib/components/Error.svelte';
</script>

<header class="flex justify-center">
    <nav class="flex justify-center content-center">
        <a class="p-2 hover:underline" href="/">Home</a>
        <a class="p-2 hover:underline" href="/about">About</a>
        <a class="p-2 hover:underline" href="/interests">Interests</a>
    </nav>
</header>

<main class="pl-5 pr-5 pt-5">
    <slot/>

    <Error />
</main>