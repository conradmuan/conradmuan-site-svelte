<script lang="ts">
	import type { CustomFields } from '.prisma/client';
	export let data: {
		[key: string]: CustomFields;
	};
	const fields: CustomFields[] = Object.values(data);
</script>

<div>
	<a type="button" class="button mb-4" href="/admin/fields/create">Create Field</a>
</div>

{#if fields.length === 0}
	<h1>No fields yet. <a href="/admin/fields/create">Create some?</a></h1>
{/if}
{#if fields.length > 0}
	{#each fields as field}
		<div class="flex border-b border-slate-500 py-2">
			<div class="flex-none px-2">
				<p>{field.id}</p>
			</div>
			<div class="flex-initial w-52 px-2">
				<h1 class="truncate">{field.name}</h1>
			</div>
			<div class="px-2 flex-1">
				<p>{field.value}</p>
			</div>
			<div>
				<a type="button" href="/admin/fields/{field.id}" class="button no-underline">View / Edit</a>
			</div>
		</div>
	{/each}
{/if}
