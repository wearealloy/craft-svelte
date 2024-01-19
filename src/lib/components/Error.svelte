<script>
    import {page} from '$app/stores';
	// console.log($page)
</script>

{#if $page.error}
	<div class="error">
		<p>{$page.error.message}</p>
	</div>
{/if}
