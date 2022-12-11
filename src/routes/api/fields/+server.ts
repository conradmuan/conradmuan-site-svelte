import { PrismaClient } from '@prisma/client';
import { json, error } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function GET({ url }: { url: URL }) {
	const fields = url.searchParams.get('fields')?.split(',');
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

	const customFields = await prisma.customFields.findMany();
	return json(customFields);
}

export async function POST({ request }: { request: Request }) {
	const { name, value } = await request.json();
	try {
		const field = await prisma.customFields.create({
			data: {
				name,
				value,
				dateCreated: new Date()
			}
		});
		return json(field);
	} catch (e) {
		throw error(400, (e as Error).toString());
	}
}
