import { writeFile, mkdir } from 'fs/promises';
import path from 'node:path';
import { ACCEPTED_MIME_TYPES } from '$lib/constants';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { v4 as uuidv4 } from 'uuid';
import { SESSION_KEY, UPLOADS_PATH } from '$env/static/private';
import { prisma } from '$lib/db/prisma';
import { dev } from '$app/environment';

export const POST: RequestHandler = async ({ cookies, request }) => {
	const sessionId = cookies.get(SESSION_KEY || 'sessionId');
	if (!sessionId) {
		throw error(403, 'Unauthenticated');
	}
	const path = getUploadPath();
	const values = await request.formData();
	const keys: string[] = [...values.keys()];
	const dir = uuidv4();

	const filesWritten = await Promise.all(
		keys.map(async (key) => {
			const file = values.get(key) as File;
			if (!(file instanceof File)) {
				throw error(400, 'Invalid file');
			}
			if (
				!file ||
				!file.name ||
				typeof file.name !== 'string' ||
				!ACCEPTED_MIME_TYPES.includes(file.type)
			) {
				throw error(400, 'Invalid file type');
			}

			await mkdir(`${path}/images/${dir}`, { recursive: true });
			const destination = `${path}/images/${dir}/${file.name}`;
			const uri = `/images/${dir}/${file.name}`;

			// TODO: abstract away other file types
			await writeFile(destination, new Uint8Array(await file.arrayBuffer()));
			await copyFileIfInDev(file, dir);

			const userSession = await prisma.sessions.findFirst({
				where: {
					id: sessionId
				},
				include: {
					user: {
						select: {
							id: true
						}
					}
				}
			});

			const user = userSession?.user ?? undefined;

			if (!user) {
				throw error(403, 'Unauthenticated');
			}

			await prisma.files.create({
				data: {
					name: file.name,
					path: destination,
					uri,
					mimeType: file.type,
					addedByUserId: user.id
				}
			});
			return uri;
		})
	);

	return json(filesWritten);
};

export const GET: RequestHandler = async ({ cookies }) => {
	const sessionId = cookies.get(SESSION_KEY || 'sessionId');
	if (!sessionId) {
		throw error(403, 'Unauthenticated');
	}

	const files = await prisma.files.findMany({
		orderBy: {
			dateCreated: 'desc'
		}
	});

	return json(files);
};

const getUploadPath = () => {
	if (!dev) {
		return UPLOADS_PATH || './static';
	}
	return path.resolve(process.cwd(), './static');
};

const copyFileIfInDev = async (file: File, dir: string) => {
	if (dev) {
		const destination = path.resolve(process.cwd(), './build/client/images', dir);
		await mkdir(destination, { recursive: true });
		await writeFile(`${destination}/${file.name}`, new Uint8Array(await file.arrayBuffer()));
	}
};
