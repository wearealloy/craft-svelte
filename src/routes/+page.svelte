<script>

	export let data;

	const cmsUrl = 'https://sveltecms.heyblackmagic.com/';
	// const cmsUrl = 'http://svelte-craft.test/';

	$: entry = data.homepageEntries[0];
	$: heroImage = entry.heroImage.length > 0 ? entry.heroImage[0] : false;

</script>

<div class="max-w-1300 m-auto">
	<h1 class="text-4xl">{entry.header}</h1>

    <div class="mt-10">
        {@html entry.description}
    </div>

    <div class="mt-10 max-w-[400px] object-contain object-center h-[400px]">
        <img class="w-full h-full" src="{cmsUrl + heroImage.url}" alt="{heroImage.alt}">
    </div>
</div>
