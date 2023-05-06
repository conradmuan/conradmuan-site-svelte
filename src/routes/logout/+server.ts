import { prisma } from '$lib/db/prisma';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ cookies }) => {
	const sessionId = cookies.get(process.env.SESSION_KEY || 'sessionId');
	cookies.set(process.env.SESSION_KEY || 'sessionId', '', { expires: new Date() });
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
