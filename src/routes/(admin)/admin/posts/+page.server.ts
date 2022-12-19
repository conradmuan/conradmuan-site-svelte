import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function load() {
	try {
		const posts = await prisma.posts.findMany();
		return posts;
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
