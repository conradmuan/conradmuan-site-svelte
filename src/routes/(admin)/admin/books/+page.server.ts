import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function load() {
	try {
		const books = await prisma.book.findMany({
			include: {
				authors: {
					include: {
						author: true
					}
				},
				categories: {
					include: {
						bookCategory: true
					}
				}
			}
		});
		return { books };
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
