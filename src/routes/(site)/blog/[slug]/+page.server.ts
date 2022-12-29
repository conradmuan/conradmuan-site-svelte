import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export const load: Load = async ({ params }) => {
	const { slug } = params;
	if (!slug) {
		throw error(404);
	}
	const post = await prisma.posts.findFirst({
		where: {
			slug
		}
	});
	return { post };
};
