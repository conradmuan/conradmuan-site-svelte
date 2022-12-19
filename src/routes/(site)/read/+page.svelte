<script lang="ts">
	import type { CustomFields } from '@prisma/client';
	export let data: {
		read: CustomFields;
	};
	const { read } = data;
</script>

{@html read.valueRendered}
