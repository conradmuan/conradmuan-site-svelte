<script lang="ts">
	import type { CustomFields, Posts } from '.prisma/client';
	import { niceDate } from '$lib/utils/date';
	import Homepage from '$lib/components/homepage.svelte';

	export let data: {
		homeFields: CustomFields[];
		posts: Posts[];
	};
	const { homeFields, posts } = data;
	const quickCv = homeFields.find((field) => field.name === 'quick-cv');
</script>

<Homepage {homeFields} />

<div class="grid grid-cols-2 gap-4">
	<div>
		<h3>👀 Recent Blog Posts</h3>
		{#if posts.length > 0}
			{#each posts as post}
				<div>
					<h4 class="title"><a href={`/blog/${post.slug}`}>{@html post.title}</a></h4>
					<h5 class="date">{niceDate(post.dateCreated)}</h5>
				</div>
			{/each}
		{:else}
			<p>None so far.</p>
		{/if}
	</div>
	<div>
		{#if quickCv}
			{@html quickCv.valueRendered}
		{/if}
	</div>
</div>

<ul class="list-none nav">
	<li>👉</li>
	<li><a href="/blog">Blog Posts</a></li>
	<li><a href="/read/2022">2022 Reads</a></li>
	<li><a href="/read/2023">2023 Reads</a></li>
	<li><a href="/read/2024">2024 Reads</a></li>
</ul>

<style lang="postcss">
	.nav {
		margin: 2rem 0 2rem 0;
		padding: 2rem 0 2rem 0;
		border-top: 1px solid #94a3b8;
	}
	.nav li {
		display: inline;
	}
	.title {
		margin-bottom: 0;
	}
	.date {
		font-size: 0.75rem;
	}
</style>
