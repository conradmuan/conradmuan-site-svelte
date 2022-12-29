<script lang="ts">
	import type { Posts } from '@prisma/client';
	import { niceDate } from '$lib/utils/date';
	export let data: {
		posts: Posts[];
	};
	const { posts } = data;
</script>

<div class="mt-4">
	{#if posts.length > 0}
		{#each posts as post}
			<div class="mb-8">
				<h1 class="title"><a href={`/blog/${post.slug}`}>{@html post.title}</a></h1>
				<h2 class="date">{niceDate(post.dateCreated)}</h2>
			</div>
		{/each}
	{:else}
		<p>None yet.</p>
	{/if}
</div>

<style>
	.title {
		font-size: 1.5rem;
		font-weight: normal;
		margin-bottom: 0.75rem;
	}
	.date {
		font-size: 0.75rem;
		margin: 0;
	}
</style>
