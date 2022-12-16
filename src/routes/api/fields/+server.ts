import { marked } from 'marked';
import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function GET({ url }: { url: URL }) {
	const fields = url.searchParams.get('fields')?.split(',');
	const id = url.searchParams.get('id');
	if (fields && fields.length > 0) {
		try {
			const query = await prisma.customFields.findMany({
				where: {
					name: { in: fields }
				}
			});
			return json(query);
		} catch (e) {
			throw error(400, (e as Error).toString());
		}
	}

	if (id) {
		try {
			const query = await prisma.customFields.findFirst({
				where: {
					id: parseInt(id, 10)
				}
			});
			return json(query);
		} catch (e) {
			throw error(400, (e as Error).toString());
		}
	}

	const customFields = await prisma.customFields.findMany();
	return json(customFields);
}

export async function POST({ request }: { request: Request }) {
	const { name, value } = await request.json();
	const valueRendered = marked(value);
	try {
		const field = await prisma.customFields.create({
			data: {
				name,
				value,
				valueRendered,
				dateCreated: new Date()
			}
		});
		return json(field);
	} catch (e) {
		throw error(400, (e as Error).toString());
	}
}

export async function PATCH({ request }: { request: Request }) {
	const { id, name, value } = await request.json();
	const valueRendered = marked(value);
	try {
		const field = await prisma.customFields.update({
			where: {
				id: parseInt(id, 10)
			},
			data: {
				name,
				value,
				valueRendered,
				dateUpdated: new Date()
			}
		});
		return json(field);
	} catch (e) {
		throw error(500, (e as Error).toString());
	}
}

export async function DELETE({ request }: { request: Request }) {
	const { id } = await request.json();
	try {
		const field = await prisma.customFields.delete({
			where: {
				id
			}
		});
		return json(field);
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
