import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function load() {
	try {
		const fields = await prisma.customFields.findMany();
		return fields;
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
