<script lang="ts">
	import { marked } from 'marked';
	import type { SaveFields } from 'src/routes/admin/fields/create/types';

	export let source: {
		name: string;
		value: string;
	} = {
		name: '',
		value: ''
	};
	export let height = 'full';
	export let onSave: ({ name, value }: SaveFields) => Promise<void>;

	let { name, value } = source;

	let mode = 'edit';
	let preview = marked(value);

	$: preview = marked(value);

	const handleClick = () => {
		mode = mode === 'preview' ? 'edit' : 'preview';
	};

	const handleSave = async (e: Event) => {
		e.preventDefault();
		if (onSave) {
			await onSave({ name, value });
		}
	};
</script>

{#if mode === 'edit'}
	<input
		type="text"
		name="title"
		id="title"
		class="my-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
		placeholder="Title"
		bind:value={name}
	/>
	<textarea
		name="rawtext"
		id="rawtext"
		bind:value
		style:--height={height === 'full' ? 'auto' : 'calc(100vh - 10vh)'}
	/>
	<button type="button" class="button" on:click={handleClick} disabled={name === '' && value === ''}
		>Preview</button
	>
{/if}
{#if mode === 'preview'}
	<div class="preview p-4" style:--height={height === 'full' ? 'auto' : 'calc(100vh - 10vh)'}>
		<h1 class="mb-1">{name}</h1>
		<div>{@html preview}</div>
	</div>
	<button type="button" class="button" on:click={handleClick}>Edit</button>
{/if}
<button
	type="button"
	class="button-alternative"
	disabled={name === '' && value === ''}
	on:click={handleSave}>Save</button
>

<style>
	#title {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	#rawtext {
		width: 100%;
		height: var(--height);
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		border: 1px solid #cccc;
		background: #1e293b;
		color: #fafafa;
	}
	.preview {
		width: 100%;
		max-width: none;
		height: var(--height);
		border: 1px solid #cccc;
	}
</style>
