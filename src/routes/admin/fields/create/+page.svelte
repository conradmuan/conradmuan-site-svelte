<script lang="ts">
	import type { SaveFields } from './types';
	import Editor from '$lib/components/editor.svelte';
	import { notifications } from '$lib/stores/notifications';

	const onSave = async ({ name, value }: SaveFields) => {
		const response = await fetch('/api/fields', {
			method: 'POST',
			body: JSON.stringify({ name, value }),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (response.status > 299) {
			notifications.danger(`Error: ${response.statusText}`);
			return;
		}

		notifications.success('Success!');
		return;
	};
</script>

<div class="p-4 mb-4 border-pink-400 border">
	<p>
		Fields can be loose pieces of content meant to be queried and put together by the frontend as a
		page. The page can be the entire field itself or a collection of fields.
	</p>
</div>

<Editor {onSave} />
