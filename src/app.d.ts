// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user: Partial<import('.prisma/client').Users> | undefined;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
