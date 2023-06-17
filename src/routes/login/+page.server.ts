import bcrypt from 'bcryptjs';
import { uuid } from 'uuidv4';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';
import { SESSION_KEY } from '$env/static/private';

import { prisma } from '$lib/db/prisma';

const SESSION_EXPIRES = 1000 * 60 * 60 * 24 * 7; // 7 days

export const load: PageServerLoad = ({ cookies, url }) => {
	// Reminder for why I'm doing this
	// https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie
	// Double submit cookie technique
	const XSRF_TOKEN = `XSRF-${uuid()}`;
	cookies.set('XSRF-TOKEN', XSRF_TOKEN);

	const redirect = url.searchParams.get('redirect');

	return {
		xsrf_token: XSRF_TOKEN,
		redirect
	};
};

export const actions: Actions = {
	default: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		// See https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie
		const xsrf_token = data.get('xsrf_token');
		const XSRF_TOKEN = cookies.get('XSRF-TOKEN');

		if (!email || !password || !xsrf_token) {
			throw error(400, 'Missing email or password');
		}

		if (xsrf_token.toString() !== XSRF_TOKEN) {
			throw error(400, 'Invalid XSRF token');
		}
		const user = await prisma.users.findFirst({
			where: {
				email: email.toString()
			},
			select: {
				id: true,
				password: true
			}
		});

		const checkedPassword = await bcrypt.compare(password.toString(), user?.password ?? '');

		if (!user || !checkedPassword) {
			throw error(400, 'User not found');
		}

		// Now that we have a user, let's create a session
		const dateExpires = new Date(Date.now() + SESSION_EXPIRES);
		const session = await prisma.sessions.create({
			data: {
				userId: user.id,
				dateExpires
			}
		});

		cookies.set(SESSION_KEY || 'sessionId', session.id, {
			expires: dateExpires
		});

		throw redirect(307, url.searchParams.get('redirect') ?? '/login');
	}
};
