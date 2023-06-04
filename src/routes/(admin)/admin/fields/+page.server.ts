import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const fields = await prisma.customFields.findMany();
		return { fields };
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
};
