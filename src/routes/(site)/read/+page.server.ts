import type { Load } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';

const hasBooks = async (year: number) => {
	const book = await prisma.book.count({
		where: {
			dateCreated: {
				lte: new Date(`${year.toString()}-12-31`),
				gt: new Date(`${(year - 1).toString()}-12-31`)
			}
		},
		take: 1
	});
	return book === 1;
};

export const load: Load = async () => {
	// This is a super bad query, O(n)
	// check if a post exists between now and 2022
	const nowYear = new Date().getFullYear();

	const years: number[] = [];
	for (let year = nowYear; year > 2021; year--) {
		years.push(year);
	}

	const yearsWithBooks = (
		await Promise.all(
			years.map(async (year) => {
				return (await hasBooks(year)) ? year : null;
			})
		)
	).filter(Boolean);

	return { years: yearsWithBooks };
};
