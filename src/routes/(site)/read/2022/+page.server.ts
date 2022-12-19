import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function load() {
	const read = await prisma.customFields.findMany({
		where: {
			OR: [
				{
					name: 'recently-read-2022'
				},
				{
					name: 'currently-reading'
				},
				{
					name: 'recently-read-2022-intro'
				}
			]
		}
	});

	if (!read) {
		throw error(404);
	}

	return { read };
}
