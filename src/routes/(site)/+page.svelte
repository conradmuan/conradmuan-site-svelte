<script lang="ts">
	import type { CustomFields, Posts } from '.prisma/client';
	import Homepage from '$lib/components/homepage.svelte';

	export let data: {
		homeFields: CustomFields[];
		posts: Posts[];
	};
	const { homeFields, posts } = data;
</script>

<Homepage {homeFields} />
