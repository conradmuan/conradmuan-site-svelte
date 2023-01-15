import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export const load: Load = async ({ params }) => {
	const { year } = params;

	if (!year) {
		throw error(404);
	}

	const prevYear = (parseInt(year, 10) - 1).toString();
	const books = await prisma.book.findMany({
		where: {
			dateCreated: {
				lte: new Date(`${year}-12-31`),
				gt: new Date(`${prevYear}-12-31`)
			}
		},
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

	if (books.length === 0) {
		throw error(404);
	}

	const read = await prisma.customFields.findMany({
		where: {
			OR: [
				{
					name: 'currently-reading'
				},
				{
					name: 'recently-read-2022-intro'
				}
			]
		}
	});

	if (read.length === 0) {
		throw error(404);
	}

	return { books, read };
};
