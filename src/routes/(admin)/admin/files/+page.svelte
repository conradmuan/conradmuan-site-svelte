<script lang="ts">
	import { notifications } from '$lib/stores/notifications';
	import type { Files } from '@prisma/client';
	import { onMount } from 'svelte';
	import Droppable from '$lib/components/droppable.svelte';

	let filesUpload: FileList;
	let filesApi: Files[] = [];
	let savedFiles: any;

	$: if (filesUpload) {
		sendFiles(filesUpload);
	}

	$: if (savedFiles) {
		getFiles();
	}

	onMount(async () => {
		await getFiles();
	});

	const copyUrl = (url: string) => {
		navigator.clipboard.writeText(url);
		notifications.success(`Link copied to clipboard: ${url}`);
	};

	const getFiles = async () => {
		const response = await fetch('/api/files');
		if (response.ok) {
			filesApi = await response.json();
		}

		if (response.status !== 200) {
			const message = await response.text();
			notifications.danger(`Error: ${message}`);
		}
	};

	const sendFiles = async (fileList: FileList) => {
		const formData = new FormData();
		const files = Array.from(fileList);
		files.forEach((file) => {
			formData.append(file.name, file);
		});

		const response = await fetch('/api/files', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			notifications.success('Files uploaded successfully');
			savedFiles = await response.json();
		}

		if (response.status !== 200) {
			const message = await response.text();
			notifications.danger(`Error: ${message}`);
		}
	};

	const handleDrop = async (event: DragEvent) => {
		event.preventDefault();
		const files = event.dataTransfer && event.dataTransfer.files;
		if (files) {
			await sendFiles(files);
		}
	};
</script>

<Droppable dropHandler={handleDrop}>
	<div class="intro">
		<p>Files are listed here. To add a new file, drag and drop or</p>
		<input
			type="file"
			multiple
			bind:files={filesUpload}
			class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
	</div>
	<div>
		{#each filesApi as file}
			<div class="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow">
				<div class="flex items-center">
					<img src={file.uri} alt={file.name} class="w-12 mr-4" />
					<div>
						<p class="text-sm font-semibold text-gray-700">{file.name}</p>
					</div>
				</div>
				<div class="space-x-2">
					<button class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600" on:click={() => copyUrl(file.uri)}>Copy Link</button>
					<a
						href={file.uri}
						download={file.name}
						class="px-4 py-2 text-sm font-semibold text-white bg-violet-500 rounded-lg hover:bg-violet-600">
						Download
					</a>
				</div>
			</div>
		{/each}
	</div>
</Droppable>

<style>
	.intro {
		margin-bottom: 1rem;
	}
</style>
