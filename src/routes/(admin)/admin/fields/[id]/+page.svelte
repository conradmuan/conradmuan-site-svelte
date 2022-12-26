<script lang="ts">
	import { goto } from '$app/navigation';
	import Editor from '$lib/components/editor.svelte';
	import { Modes } from '$lib/components/types/modes';
	import { notifications } from '$lib/stores/notifications';
	import type { CustomFields } from '.prisma/client';

	export let data: CustomFields;
	const { id, name, value } = data;
	const source = { name, value: value ?? '' };

	const handleUpdate = async ({ name, value }: { name: string; value: string }) => {
		const resp = await fetch('/api/fields', {
			method: 'PATCH',
			body: JSON.stringify({ id, name, value }),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (resp.status > 299) {
			notifications.warning(`Something went wrong: ${resp.status} ${resp.statusText}`);
			return;
		}
		notifications.success('Success');
		return;
	};

	const handleDelete = async () => {
		if (window.confirm('Delete this field? This is non recoverable')) {
			const resp = await fetch('/api/fields/', {
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

			goto('/admin/fields');
			return;
		}
	};
</script>

<Editor {source} mode={Modes.PREVIEW} onSave={handleUpdate} />
<button type="button" class="button-danger" on:click={handleDelete}>Delete</button>
