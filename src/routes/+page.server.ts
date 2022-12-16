import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
	const homeFields = await prisma.customFields.findMany({
		where: {
			OR: [
				{ name: 'home-page-cv' },
				{
					name: 'currently-reading'
				},
				{
					name: 'recently-read-2022'
				}
			]
		}
	});
	if (homeFields) {
		return homeFields;
	}

	return {};
}
