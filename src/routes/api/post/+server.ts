import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function GET({ url }: { url: URL }) {
	const id = url.searchParams.get('id');
	if (id) {
		try {
			const post = await prisma.posts.findFirst({
				where: {
					id: parseInt(id, 10)
				}
			});
			return json(post);
		} catch (err) {
			throw error(400, (err as Error).toString());
		}
	}
}
