<script lang="ts">
	import type { Posts } from '@prisma/client';
	import { niceDate } from '$lib/utils/date';
	export let data: {
		post: Posts;
	};
	const { post } = data;
</script>

<div class="blog-post mt-8">
	<h1 class="title">{post.title}</h1>
	<h2 class="date">{niceDate(post.dateCreated)}</h2>
	{@html post.contentRendered}
</div>

<style>
	.date {
		font-size: 0.75rem;
		margin-top: -1.5rem;
		margin-bottom: 1.75rem;
	}
</style>
