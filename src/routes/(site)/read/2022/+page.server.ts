import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

export async function load() {
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

	const books = await prisma.book.findMany({
		where: {
			dateCreated: {
				lte: new Date('2022-12-31')
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

	if (!read || !books) {
		throw error(404);
	}

	return { read, books };
}
