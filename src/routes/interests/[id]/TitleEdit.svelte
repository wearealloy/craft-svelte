<script>
    export let value;
    export let id;
</script>

<div class="mt-3">
    <form action="?/edit" method="POST">
        <input name="id" type="text" hidden value={id}>
        <input name="title" class="p-1 border-solid border-black border rounded" bind:value={value} type="text">
        <br>
        <button class="p-2 border rounded bg-cyan-400 text-black inline-block mt-3 active:scale-[0.9]">Edit Title</button>
    </form>
</div>