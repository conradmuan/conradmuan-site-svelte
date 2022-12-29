import type { CustomFields, Posts } from '@prisma/client';
import { prisma } from '$lib/db/prisma';

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
					name: 'quick-cv'
				}
			]
		}
	});
	const posts = await prisma.posts.findMany({
		where: {
			published: true
		},
		orderBy: {
			dateCreated: 'desc'
		},
		take: 3
	});
	if (homeFields) {
		ret.homeFields = homeFields;
	}

	if (posts) {
		ret.posts = posts;
	}

	return ret;
}
