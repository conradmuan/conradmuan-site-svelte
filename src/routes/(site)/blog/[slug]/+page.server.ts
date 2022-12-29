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

	if (!post) {
		throw error(404);
	}

	const metadata = {
		title: `Conrad Muan - Blog - ${post.title}`,
		description: `${post.content?.substring(0, 140)}...`
	};

	return { post, metadata };
};
