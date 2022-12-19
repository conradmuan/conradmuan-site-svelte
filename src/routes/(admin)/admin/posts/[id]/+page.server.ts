import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function load({ params }: { params: { id: string } }) {
	const { id } = params;
	if (!id) {
		throw error(404, 'No id found');
	}

	try {
		const post = await prisma.posts.findFirst({
			where: {
				id: parseInt(id, 10)
			}
		});
		return post;
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
