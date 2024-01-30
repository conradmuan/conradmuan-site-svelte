# Short Term TODOs

- [ ] pagination on book search
- [ ] pagination on book list
- [ ] double check google light house optimization
- [ ] better build script
    - [ ] automatically switch from green to blue
- [ ] WYSIWYG for content types
- [ ] update sveltekit
- [ ] probably replace .server.ts so that requests are reactive instead of full page load

# Medium term TODOs
- [ ] the admin site does full page reloads and doesn't feel like a SPA

# Long Term TODOs
Block content types are a good idea. But we shouldn't need to do a build in order to change which blocks go where. The user should be able to set where blocks go. That means that we should have another layer of abstraction above the CMS backend.

- CMS
  - CMS schema (done)
- Site (like a theme)
  - Site schema

Having a site schema would negate the (site) group route in sveltekit. The (site) group route had application defined routes that should go into a site schema. But since sveltekit is a file based router, how would we allow for user defined routes? Maybe rest parameters https://kit.svelte.dev/docs/advanced-routing#further-reading - this seems to work but will definitely require a matcher. How will this work for SEO / prerendering

Another thing to consider is that we need to dynamically import a site's components. See https://www.reddit.com/r/sveltejs/comments/16klv65/comment/k15dc57/ and again, how does that affect prerendering?
