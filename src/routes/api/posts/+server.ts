import { marked } from 'marked';
import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function GET() {
	try {
		const post = await prisma.posts.findMany({
			where: {
				published: true
			}
		});
		return json(post);
	} catch (err) {
		throw error(400, (err as Error).toString());
	}
}

export async function POST({ request }: { request: Request }) {
	const { title, content, published, slug } = await request.json();
	const titleRendered = marked(title);
	const contentRendered = marked(content);
	try {
		const post = await prisma.posts.create({
			data: {
				title,
				titleRendered,
				content,
				slug,
				contentRendered,
				published,
				dateCreated: new Date()
			}
		});
		return json(post);
	} catch (e) {
		throw error(400, (e as Error).toString());
	}
}

export async function PATCH({ request }: { request: Request }) {
	const { id, title, content, published, slug } = await request.json();
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
				slug,
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
