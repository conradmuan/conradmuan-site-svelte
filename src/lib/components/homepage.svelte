<script lang="ts">
	import type { CustomFields } from '@prisma/client';
	export let homeFields: CustomFields[];
	const homeCv = homeFields.find((field) => field.name === 'home-page-cv');
	const currentRead = homeFields.find((field) => field.name === 'currently-reading');
</script>

{#if homeCv}
	{@html homeCv.valueRendered}
{/if}
{#if currentRead}
	{@html currentRead.valueRendered}
	<p>
		If you're looking for something interesting to read, take a look at my 2022 reading list <a
			href="/read/2022">here</a
		>.
	</p>
{/if}
