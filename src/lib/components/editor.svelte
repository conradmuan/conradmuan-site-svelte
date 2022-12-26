<script lang="ts">
	import { marked } from 'marked';
	import { Modes } from './types/modes';
	import type { SaveFields } from 'src/routes/(admin)/admin/fields/create/types';

	export let source: {
		name: string;
		value: string;
		slug?: string;
	} = {
		name: '',
		value: '',
		slug: ''
	};
	export let height: string = 'auto';
	export let onSave: ({ name, value, slug }: SaveFields) => Promise<void> | void = () => {};
	export let mode: Modes = Modes.EDIT;

	let { name, value, slug } = source;
	let preview = marked(value);

	$: preview = marked(value);
	$: slug = slugify(name);

	const handleClick = () => {
		mode = mode === Modes.PREVIEW ? Modes.EDIT : Modes.PREVIEW;
	};

	const handleSave = async (e: Event) => {
		e.preventDefault();
		if (onSave) {
			await onSave({ name, value, slug: slug ?? '' });
		}
	};

	const slugify = (str: string) => {
		const nonAlphaNumeric = /[^A-Za-z0-9\s]/g;
		return str.replace(nonAlphaNumeric, '').replace(' ', '-').toLowerCase();
	};
</script>

{#if mode === 'edit'}
	<input
		type="text"
		name="title"
		id="title"
		class="my-1 block w-full rounded-md shadow-sm sm:text-sm p-2"
		placeholder="Title"
		bind:value={name}
	/>
	<input
		type="text"
		name="slug"
		id="slug"
		class="my-1 block w-full rounded-md shadow-sm sm:text-sm p-2 bg-slate-400 placeholder-white white"
		placeholder="Slug"
		bind:value={slug}
	/>
	<textarea
		name="rawtext"
		id="rawtext"
		bind:value
		class="py-4 px-2 mb-4"
		style:--height={height !== 'full' ? 'auto' : 'calc(100vh - 25vh)'}
	/>
	<button type="button" class="button" on:click={handleClick} disabled={name === '' && value === ''}
		>Preview</button
	>
{/if}
{#if mode === 'preview'}
	<div class="preview p-4 mb-4" style:--height={height !== 'full' ? 'auto' : 'calc(100vh - 25vh)'}>
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
