import { PrismaClient, type CustomFields, type Posts } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
	const ret: {
		homeFields: CustomFields[];
		posts: Posts[];
	} = {
		homeFields: [],
		posts: []
	};
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
	const posts = await prisma.posts.findMany({
		where: {
			published: true
		}
	});
	if (homeFields) {
		ret.homeFields = homeFields;
	}

	if (posts) {
		ret.posts = posts;
	}

	return ret;
}
