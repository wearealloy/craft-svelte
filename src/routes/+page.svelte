<script>
	// import { onMount } from 'svelte';
    // import { queries } from '$lib/queries';

	// descomentar for ssr
	export let data;

	const cmsUrl = 'http://svelte-craft.test/';

	$: entry = data.homepageEntries[0];
	$: heroImage = entry.heroImage.length > 0 ? entry.heroImage[0] : false;

    //descomentar para SPA
    // let entry;
    // const cmsUrl = 'http://svelte-craft.test/'

    // onMount(async () => {
	// 	const response = await fetch('http://svelte-craft.test/api/', {
	// 		method: 'POST',
	// 		headers: {
	// 			Authorization: 'Bearer ry4yuUJ9qjUaptTTu1xyOhnpSKzc5hmv',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({ query: queries.home })
	// 	});

	// 	const { data } = await response.json();
	// 	entry = data.homepageEntries[0];
	// });

</script>

<div class="max-w-1300 m-auto">
    <!-- {#if entry != undefined}
        <h1 class="text-4xl">{entry.header}</h1>

        <div class="mt-10">
            {@html entry.description}
        </div>

        {#if entry.heroImage.length > 0}
            <div class="mt-10 max-w-[400px] object-contain object-center h-[400px]">
                <img class="w-full h-full" src="{cmsUrl + entry.heroImage[0].url}" alt="{entry.heroImage[0].alt}">
            </div>
        {/if}
    {:else}
        <h1 class="text-4xl">Loading ....</h1>
    {/if} -->
	<h1 class="text-4xl">{entry.header}</h1>

    <div class="mt-10">
        {@html entry.description}
    </div>

    <div class="mt-10 max-w-[400px] object-contain object-center h-[400px]">
        <img class="w-full h-full" src="{cmsUrl + heroImage.url}" alt="{heroImage.alt}">
    </div>
</div>
