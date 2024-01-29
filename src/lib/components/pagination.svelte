<script lang="ts">
	export let pages: number;
	export let limit: number = -1;
	export let currentPage: number = 1;

	const lastPage = Math.floor(pages);

	let pageNumbers: number[] = [];
	let maxPageNumbers: number = limit === -1 ? lastPage : limit;

	for (let n = 0; n < maxPageNumbers; n++) {
		pageNumbers = [...pageNumbers, n + 1];
	}

	const hasSkipPages = lastPage !== pageNumbers[pageNumbers.length - 1];
</script>

<div>
	{#if currentPage !== 1}
		<button
			on:click={() => {
				console.log('handle', currentPage - 1);
			}}>Back</button
		>
	{/if}
	{#each pageNumbers as pageNumber}
		<button
			on:click={() => {
				console.log('handle', pageNumber);
			}}>{pageNumber}</button
		>
	{/each}
	{#if hasSkipPages}
		<span>. . .</span>
	{/if}
	{#if hasSkipPages && lastPage !== currentPage}
		<button
			on:click={() => {
				console.log('handle', lastPage);
			}}>{lastPage}</button
		>
	{/if}
	{#if currentPage !== lastPage}
		<button
			on:click={() => {
				console.log('handle', currentPage + 1);
			}}>Next</button
		>
	{/if}
</div>
