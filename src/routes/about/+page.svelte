<script>
    export let data;
    const cmsUrl = 'http://svelte-craft.test/';

    $: entry = data.aboutEntries[0];
    $: heroImage = entry.heroImage.length > 0 ? entry.heroImage[0] : false;

    $: console.log(entry)

</script>

<div class="max-w-1300 m-auto">
    <h1>{entry.header}</h1>

    <div class="mt-10">
        {@html entry.description}
    </div>

    {#if heroImage}
    <div class="mt-10 max-w-[400px] object-contain object-center h-[400px]">
        <img class="w-full h-full" src="{cmsUrl + heroImage.url}" alt="{heroImage.alt}">
    </div>
    {/if}
</div>