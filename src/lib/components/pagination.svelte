<script lang="ts">
	import { noop } from 'svelte/internal';

	export let pages: number;
	export let limit: number = -1;
	export let currentPage: number = 1;
	export let onClick: (num: number) => void = noop;

	const lastPage = Math.floor(pages);

	let pageNumbers: number[] = [];
	let maxPageNumbers: number = limit === -1 ? lastPage : limit;

	for (let n = 0; n < maxPageNumbers; n++) {
		pageNumbers = [...pageNumbers, n + 1];
	}

	const hasSkipPages = lastPage !== pageNumbers[pageNumbers.length - 1];
</script>

<div class="flex justify-center gap-x-2">
	{#if currentPage !== 1}
		<button
			class="incremental"
			on:click={() => {
				onClick(currentPage - 1);
			}}>Back</button
		>
	{/if}
	{#each pageNumbers as pageNumber}
		<button
			on:click={() => {
				onClick(pageNumber);
			}}>{pageNumber}</button
		>
	{/each}
	{#if hasSkipPages}
		<span>. . .</span>
	{/if}
	{#if hasSkipPages && lastPage !== currentPage}
		<button
			on:click={() => {
				onClick(lastPage);
			}}>{lastPage}</button
		>
	{/if}
	{#if currentPage !== lastPage}
		<button
			class="incremental"
			on:click={() => {
				onClick(currentPage + 1);
			}}>Next</button
		>
	{/if}
</div>

<style lang="postcss">
	button:not(.incremental) {
		@apply w-4 border border-blue-400;
	}

	.incremental {
		@apply border border-blue-400 px-4;
	}
</style>
