<script lang="ts">
	import { goto } from '$app/navigation';
	import Editor from '$lib/components/editor.svelte';
	import { notifications } from '$lib/stores/notifications';

	let published: boolean = false;

	const onSave = async ({ name, value, slug }: { name: string; value: string; slug: string }) => {
		const title = name;
		const content = value;
		const resp = await fetch('/api/posts', {
			method: 'POST',
			body: JSON.stringify({ title, content, slug, published }),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (resp.status > 299) {
			notifications.danger(`Error ${resp.status}: ${resp.statusText}`);
			return;
		}

		notifications.success('Success');
		goto('/admin/posts');
		return;
	};
</script>

<div class="mb-4">
	<a href="/admin/posts" class="button">Back</a>
</div>

<Editor height="full" {onSave} />
<label for="published"
	><input
		type="checkbox"
		name="published"
		id="published"
		class="mx-2"
		bind:checked={published}
	/>Published</label
>

{#if published}
	<div class="p-4 border border-green-600 mt-4">This post will go live!</div>
{/if}
