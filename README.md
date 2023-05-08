# My Personal Site

_yay_

I used to build my website and serve it from a `/docs` directory as [Github pages](https://pages.github.com/). But needs have changed (ie, I don't want to build the site everytime I update it) so it is now hosted on a teeny shared server: https://www.conradmuan.com.

In the meantime, I'm keeping the repo to my site public in case it's helpful or useful for someone else building a site in sveltekit.

This site's stack is:

1. [svelte](https://svelte.dev/) and [sveltekit](https://kit.svelte.dev/)
2. [sqlite](https://sqlite.org/index.html) as a db with [Prisma](https://www.prisma.io/) ORM
3. Builds with [node adapter](https://kit.svelte.dev/docs/adapter-node) - so it's meant to be run on your own server.

# Development

I prefer `yarn` but there's nothing wrong with `npm`. Please also refer to `.node-version`.

1. `yarn` install all the things
2. cp `.env.example` to `.env` -- more info on .env below
3. `touch path/to/database-file.db` for your sqlite db
4. `yarn prisma migrate dev` to run migrations
5. `yarn ts-node createUser.ts` to run a user creation script

### .env File

- `DATABASE_URL` - relative path to the `path/to/database-file.db` set above
- `PUBLIC_GAPI_KEY` - Google API key. This site pulls book data using the [google books api](https://developers.google.com/books/docs/v1/reference/volumes/list)
- `SESSION_KEY` - this is the cookie name for local auth

# Prod

- `yarn build` - will create a `/build` directory
- `node -r dotenv/config build` to run the production version
- using `pm2`: `pm2 start ecosystem.config.cjs`

\*Note: `ecosystem.config.cjs` is a pm2 config file specific to my site.
