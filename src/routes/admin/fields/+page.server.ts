import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load({ params }: { params: { slug: string } }) {
	const fields = await prisma.customFields.findMany();
	return {
		fields
	};
}
