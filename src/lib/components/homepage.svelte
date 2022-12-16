<script lang="ts">
	import type { CustomFields } from '@prisma/client';
	export let homeFields: CustomFields[];
	const homeCv = homeFields.find((field) => field.name === 'home-page-cv');
	const currentRead = homeFields.find((field) => field.name === 'currently-reading');
	const prevRead = homeFields.find((field) => field.name == 'recently-read-2022');
</script>

{#if homeCv}
	<div class="homepage">{@html homeCv.valueRendered}</div>
	<hr class="my-8" />
{/if}

{#if currentRead}
	<h2 class="text-xl">👀 Currently Reading</h2>
	<div class="homepage homepage-read">{@html currentRead.valueRendered}</div>
{/if}

{#if prevRead}
	<h2 class="text-xl mt-8">📚 Recently Read in 2022</h2>
	<p><small>(non-exhaustive)</small></p>
	<div class="homepage homepage-read">{@html prevRead.valueRendered}</div>
{/if}
