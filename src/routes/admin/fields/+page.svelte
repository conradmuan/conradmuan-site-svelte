<script>
	export let data;
	const { fields } = data;
</script>

{#if fields.length === 0}
	<h1>No fields yet. <a href="/admin/fields/create">Create some?</a></h1>
{/if}

<style>
	a {
		text-decoration: underline;
	}
</style>
