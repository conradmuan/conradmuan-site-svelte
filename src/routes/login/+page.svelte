<script lang="ts">
	import { enhance } from '$app/forms';
	import '$lib/style.css';
	import type { PageData } from './$types';
	export let data: PageData;
	const { xsrf_token } = data;
	const action = data.redirect ? `/login?redirect=${encodeURIComponent(data.redirect)}` : '/login';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="robots" content="none" />
</svelte:head>

<main class="container mx-auto">
	<div class="flex w-1/3 justify-center items-center h-screen mx-auto">
		<form {action} method="post" use:enhance>
			<div>
				<label for="email"
					>Email: <input
						type="email"
						id="email"
						name="email"
						class="border border-slate-300"
					/></label
				>
			</div>
			<div>
				<label for="password"
					>Password: <input
						type="password"
						id="password"
						name="password"
						class="border border-slate-300"
					/></label
				>
			</div>
			<input type="hidden" name="xsrf_token" value={xsrf_token} />
			<div>
				<button type="submit" class="bg-slate-300 text-black px-4 py-1">Login</button>
			</div>
		</form>
	</div>
</main>
