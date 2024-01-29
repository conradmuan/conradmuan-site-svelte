<script lang="ts">
	import { notifications } from '$lib/stores/notifications';
	import type {
		Authors,
		AuthorsOnBook,
		Book,
		BookCategories,
		BookCategoriesOnBooks
	} from '@prisma/client';
	import type { PageData } from './$types';
	import Pagination from '$lib/components/pagination.svelte';

	export let data: PageData;

	let { books, pages } = data;

	const lastItem = (arr: Array<any>, i: number) => i === arr.length - 1;

	const handleDelete = async (id: number) => {
		const book = books.find((book) => book.id === id);
		if (!book) {
			notifications.warning('Book not found');
			return;
		}
		if (!confirm('Are you sure? This cannot be undone')) {
			return;
		}
		const req = await fetch('/api/books', {
			method: 'DELETE',
			headers: {
				'content-type': 'appliction/json'
			},
			body: JSON.stringify({ id })
		});
		if (req.status > 299) {
			notifications.danger(`Something went wrong: ${req.status} - ${req.statusText}`);
			return;
		}
		const resp = await req.json();
		const updatedBooks = books.filter((book) => book.id !== resp.id);
		books = updatedBooks;
		notifications.success('Success!');
	};

	const { currentPage } = data;
</script>

<div class="mb-4"><a href="/admin/books/create" class="button">Create a book record</a></div>

<Pagination {pages} limit={3} {currentPage} />

{#if books.length > 0}
	{#each books as book, idx}
		<div class="flex space-x-4 mb-8">
			<div>{book.id}</div>
			<div><img src={book.thumbnail} alt={book.title} /></div>
			<div class="flex-1 w-1/4">
				<h1 class="mb-2 font-bold text-xl">{book.title}</h1>
				{#if book.subtitle}<h2 class="mb-2 font-bold">{book.subtitle}</h2>{/if}
				{#if book.authors.length > 0}<h3 class="mb-2">
						By:
						{#each book.authors as authors, ida}
							{authors.author.name}{#if !lastItem(book.authors, ida)}, {/if}
						{/each}
					</h3>{/if}
				{#if book.description}
					<p class="mb-2">
						{book.description}
					</p>
				{/if}
				{#if book.categories.length > 0}
					<p>
						<strong>Filed under:</strong>
						{#each book.categories as categories, idc}
							{categories.bookCategory.category}{#if !lastItem(book.categories, idc)}, {/if}
						{/each}
					</p>
				{/if}
			</div>
			<div>
				<button class="button-danger" type="button" on:click={() => handleDelete(book.id)}
					>Delete</button
				>
			</div>
		</div>
	{/each}
{/if}
