import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
export const prerender = false;

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const { pathname } = url;
	if (!locals.user) {
		throw redirect(302, '/login?redirect=' + pathname);
	}
};
