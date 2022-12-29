import type { Load } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export const load: Load = async () => {
	const posts = await prisma.posts.findMany({
		where: {
			published: true
		}
	});
	return { posts };
};
