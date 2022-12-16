import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
	const fields = await prisma.customFields.findFirst({
		where: {
			name: 'homepage'
		}
	});
	if (fields) {
		return fields;
	}

	return { fields: [] };
}
