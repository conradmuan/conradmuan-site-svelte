<script lang="ts">
	import type { CustomFields } from '@prisma/client';

	export let data: {
		read: CustomFields[];
	};
	const { read } = data;

	const intro = read.find((rd) => rd.name === 'recently-read-2022-intro');
	const recentRead = read.find((rd) => rd.name === 'recently-read-2022');
	const currentRead = read.find((rd) => rd.name === 'currently-reading');
</script>

{@html intro?.valueRendered}
{@html currentRead?.valueRendered}
{@html recentRead?.valueRendered}
