<script>
    export let data;

    $: entries = data.interestsEntries;

</script>

<div class="max-w-1300 m-auto">
    <h1>Interests page</h1>

    <div class="mt-10">
        <h2 class="mb-3">Interests</h2>
        <nav class="flex flex-col content-start">
            {#each entries as entry }
                <a class="underline mt-3" href="/interests/{entry.id}">Interest: {entry.title}</a>
            {/each}
        </nav>
    </div>
</div>