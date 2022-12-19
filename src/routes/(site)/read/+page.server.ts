import { prisma } from '$lib/db/prisma';

export async function load() {
	try {
		const read = await prisma.customFields.findFirst({
			where: {
				name: 'read-index'
			}
		});

		return { read };
	} catch (err) {
		return {};
	}
}
