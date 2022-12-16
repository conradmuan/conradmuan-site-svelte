import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

type Params = {
	id: string;
};

export async function load({ params }: { params: Params }) {
	const { id } = params;
	if (!id) {
		throw error(404, 'No id found');
	}

	try {
		const field = await prisma.customFields.findFirst({
			where: {
				id: parseInt(id, 10)
			}
		});
		return field;
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
