import { marked } from 'marked';
import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function POST({ request }: { request: Request }) {
	const { title, content, published } = await request.json();
	const titleRendered = marked(title);
	const contentRendered = marked(content);
	try {
		const post = await prisma.posts.create({
			data: { title, titleRendered, content, contentRendered, published, dateCreated: new Date() }
		});
		return json(post);
	} catch (e) {
		throw error(400, (e as Error).toString());
	}
}

export async function PATCH({ request }: { request: Request }) {
	const { id, title, content, published } = await request.json();
	const titleRendered = marked(title);
	const contentRendered = marked(content);
	try {
		const post = await prisma.posts.update({
			where: {
				id: parseInt(id, 10)
			},
			data: {
				title,
				titleRendered,
				content,
				contentRendered,
				published,
				dateUpdated: new Date()
			}
		});
		return json(post);
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}

export async function DELETE({ request }: { request: Request }) {
	const { id } = await request.json();
	try {
		const post = await prisma.posts.delete({
			where: {
				id
			}
		});
		return json(post);
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
