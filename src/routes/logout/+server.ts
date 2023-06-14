import { prisma } from '$lib/db/prisma';
import type { RequestHandler } from './$types.js';
import { SESSION_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ cookies }) => {
	const sessionId = cookies.get(SESSION_KEY || 'sessionId');
	cookies.set(SESSION_KEY || 'sessionId', '', { expires: new Date() });
	await prisma.sessions.update({
		where: {
			id: sessionId
		},
		data: {
			dateExpires: new Date()
		}
	});
	return new Response('bye');
};
