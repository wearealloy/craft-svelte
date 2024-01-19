<script>
    import { page } from '$app/stores';
    import TitleEdit from './TitleEdit.svelte';
    export let data

    let paramId = $page.params.id;

    $: entry = data.interestsEntries[0];



</script>

<div class="max-w-1300 m-auto">
    <h1>Entry ID: {paramId}</h1>

    {#if entry}
        <h1 class="text-2xl">Interest: {entry.title}</h1>

        <TitleEdit value={entry.title} id={entry.id} />
        
    {:else}
        <p>Entry doesn't exist</p>
    {/if}
</div>