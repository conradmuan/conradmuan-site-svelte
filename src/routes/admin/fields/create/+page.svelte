<script lang="ts">
	import type { SaveFields } from './types';
	import Editor from '$lib/components/editor.svelte';

	const onSave = async ({ name, value }: SaveFields) => {
		const response = await fetch('/api/fields', {
			method: 'POST',
			body: JSON.stringify({ name, value }),
			headers: {
				'content-type': 'application/json'
			}
		});

		const result = await response.json();
		console.log(result);
	};
</script>

<Editor {onSave} />
