<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { years } = data;
</script>

<ul>
	{#each years as year, i}
		<li><a href={`read/${year}`}>{year}</a></li>
	{/each}
</ul>
