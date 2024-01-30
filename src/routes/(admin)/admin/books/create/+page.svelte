<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_GAPI_KEY } from '$env/static/public';
	import type { VolumeInfo } from '$lib/components/types/googleBooks';
	import { notifications } from '$lib/stores/notifications';
	const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

	let query: string = '';
	let volumes: VolumeInfo[] = [];
	let startIndex = 0;
	let maxResults = 10;
	let hasMore = false;
	let hasLess = false;

	const handleSubmit = async () => {
		const QUERY = `${GOOGLE_BOOKS_API}?q=${query}&key=${PUBLIC_GAPI_KEY}&startIndex=${startIndex}`;
		const req = await fetch(QUERY);
		const res = await req.json();
		const { totalItems } = res;
		volumes = res.items.map((item: { [key: string]: any }) => item.volumeInfo);
		const pages = Math.floor(totalItems / maxResults);
		hasMore = startIndex / maxResults < pages;
		hasLess = startIndex >= maxResults;
	};

	const nextPage = () => {
		startIndex = startIndex + 10;
		handleSubmit();
	};

	const prevPage = () => {
		startIndex = startIndex - 10;
		handleSubmit();
	};

	const addBook = async (vol: VolumeInfo) => {
		const { title, subtitle, authors, publishedDate, description, categories, imageLinks } = vol;
		const { thumbnail } = imageLinks;
		const req = await fetch('/api/books', {
			method: 'POST',
			body: JSON.stringify({
				title,
				subtitle,
				authors,
				publishedDate: new Date(publishedDate),
				description,
				categories,
				thumbnail
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (req.status > 299) {
			notifications.warning(`Something went wrong: ${req.status} ${req.statusText}`);
			return;
		}
		notifications.success(`Success!`);
		goto('/admin/books');
	};
</script>

<form action="POST" on:submit|preventDefault={handleSubmit} class="mb-4">
	<input
		type="text"
		id="search"
		class="border border-slate-600 block w-full p-2"
		placeholder="Search for a book"
		bind:value={query}
	/>
</form>

{#if volumes && volumes.length > 0}
	{#if hasMore || hasLess}
		<div class="flex space-x-4 mb-8 w-full">
			{#if hasLess}
				<button class="px-4 py-2 border border-color-blue-400" on:click={prevPage}>Last Page</button
				>
			{/if}
			{#if hasMore}
				<button class="px-4 py-2 border border-color-blue-400" on:click={nextPage}>Next page</button
				>
			{/if}
		</div>
	{/if}
	{#each volumes as volume (volume)}
		<div class="flex space-x-4 mb-8 w-full">
			<div class="flex-initial w-1/6">
				<img
					src={volume.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
					alt={volume.title}
					class="w-full"
				/>
			</div>
			<div class="flex-1">
				<h1 class="text-lg font-bold">{volume.title}</h1>
				{#if volume.subtitle}<h2 class="font-bold mb-4">{volume.subtitle}</h2>{/if}
				<h3>By: {volume.authors?.join(', ')}</h3>
				{#if volume.description}<p class="mt-4">{volume.description}</p>{/if}
				{#if volume.categories && volume.categories.length > 0}<p>
						{volume.categories.join(', ').slice(0, volume.categories.length - 1)}
					</p>{/if}
				<button class="mt-4 button-primary" type="button" on:click={() => addBook(volume)}
					>Add</button
				>
			</div>
		</div>
	{/each}
{/if}
