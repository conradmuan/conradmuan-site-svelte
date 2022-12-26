import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';
import type { Authors, BookCategories } from '@prisma/client';

export async function POST({ request }: { request: Request }) {
	const { title, subtitle, description, thumbnail, publishedDate, authors, categories } =
		await request.json();
	try {
		const authorRecords: Authors[] = await Promise.all(
			authors.map(async (author: string) => {
				return prisma.authors.upsert({
					create: {
						name: author
					},
					update: {},
					where: { name: author }
				});
			})
		);
		const categoryRecords: BookCategories[] = await Promise.all(
			categories.map(async (category: string) => {
				return prisma.bookCategories.upsert({
					create: {
						category
					},
					update: {},
					where: { category }
				});
			})
		);
		const book = await prisma.book.create({
			data: {
				title,
				subtitle,
				description,
				thumbnail,
				publishedDate,
				authors: {
					create: authorRecords.map((authorRecord) => ({
						authorId: authorRecord.id
					}))
				},
				categories: {
					create: categoryRecords.map((category) => ({
						bookCategoryId: category.id
					}))
				}
			}
		});
		return json(book);
	} catch (err) {
		throw error(500, (err as Error).toString());
	}
}

export async function DELETE({ request }: { request: Request }) {
	const { id } = await request.json();
	try {
		await prisma.authorsOnBook.deleteMany({
			where: {
				bookId: id
			}
		});
		await prisma.bookCategoriesOnBooks.deleteMany({
			where: {
				bookId: id
			}
		});
		const book = await prisma.book.delete({
			where: {
				id
			}
		});
		return json(book);
	} catch (err) {
		console.log(err);
		throw error(500, (err as Error).toString());
	}
}
