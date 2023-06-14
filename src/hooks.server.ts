import type { Handle } from '@sveltejs/kit';
import { prisma } from '$lib/db/prisma';
import { SESSION_KEY } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(SESSION_KEY || 'sessionId');
	if (event.url.pathname.startsWith('/admin') && sessionId) {
		const userSession = await prisma.sessions.findFirst({
			where: {
				id: sessionId,
				dateExpires: {
					gt: new Date()
				}
			},
			include: {
				user: {
					select: {
						id: true,
						username: true,
						email: true,
						dateCreated: true
					}
				}
			}
		});

		event.locals.user = userSession?.user ?? undefined;
	}

	const response = await resolve(event);
	return response;
};
