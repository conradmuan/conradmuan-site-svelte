<script lang="ts">
	import { goto } from '$app/navigation';
	import Editor from '$lib/components/editor.svelte';
	import { Modes } from '$lib/components/types';
	import { notifications } from '$lib/stores/notifications';
	import type { Posts } from '.prisma/client';

	export let data: Posts;
	let { id, content, title, published } = data;
	const source = { name: title, value: content ?? '' };

	const handleUpdate = async ({ name, value }: { name: string; value: string }) => {
		const resp = await fetch('/api/posts', {
			method: 'PATCH',
			body: JSON.stringify({ id, title: name, content: value, published }),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (resp.status > 299) {
			notifications.warning(`Something went wrong: ${resp.status} ${resp.statusText}`);
			return;
		}
		notifications.success(`Success!`);
	};

	const handleDelete = async () => {
		if (window.confirm('Delete this post? This is non recoverable')) {
			const resp = await fetch('/api/posts/', {
				method: 'DELETE',
				body: JSON.stringify({ id }),
				headers: {
					'content-type': 'application/json'
				}
			});
			if (resp.status > 299) {
				notifications.warning(`Something went wrong: ${resp.status} ${resp.statusText}`);
				return;
			}

			goto('/admin/posts');
			return;
		}
	};
</script>

<Editor {source} mode={Modes.PREVIEW} height="full" onSave={handleUpdate} />
<button type="button" class="button-danger" on:click={handleDelete}>Delete</button>
<label for="published"
	><input
		type="checkbox"
		name="published"
		id="published"
		class="mx-2"
		bind:checked={published}
	/>Published</label
>
