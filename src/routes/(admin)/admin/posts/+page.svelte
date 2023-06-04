<script lang="ts">
	import type { Posts } from '.prisma/client';
	export let data: {
		posts: Posts[];
	};
	const { posts } = data;

	const truncate = (content: string) => `${content.substring(0, 300)}...`;
</script>

<div>
	<a type="button" class="button mb-4" href="/admin/posts/create">Create Post</a>
</div>

{#if posts.length === 0}
	<h1>No posts yet. <a href="/admin/posts/create">Create some?</a></h1>
{/if}
{#if posts.length > 0}
	{#each posts as field}
		<div class="flex border-b border-slate-500 py-2">
			<div class="flex-none px-2">
				<p>{field.id}</p>
			</div>
			<div class="flex-initial w-52 px-2">
				<h1 class="truncate">{field.title}</h1>
			</div>
			<div class="px-2 flex-1">
				<p>{field.content && truncate(field.content)}</p>
			</div>
			<div>
				<a type="button" href="/admin/posts/{field.id}" class="button no-underline">View / Edit</a>
			</div>
		</div>
	{/each}
{/if}
