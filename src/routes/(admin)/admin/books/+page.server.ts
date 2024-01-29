import { error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';
import { PAGINATION_LIMIT } from '$lib/constants';

export async function load({ url }) {
	const { searchParams } = url;
	const page = (searchParams.get('page') as unknown as number) ?? 1;
	const take = PAGINATION_LIMIT;
	const skip = (page - 1) * PAGINATION_LIMIT;
	try {
		const books = await prisma.book.findMany({
			take,
			skip,
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
			},
			orderBy: {
				dateCreated: 'desc'
			}
		});

		const count = await prisma.book.count();
		const pages = count / PAGINATION_LIMIT;

		return { books, pages, currentPage: page };
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}
