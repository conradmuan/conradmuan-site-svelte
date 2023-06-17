<script lang="ts">
	import { goto } from '$app/navigation';
	import Flash from '$lib/components/notifications.svelte';
	import '$lib/style.css';

	const handleClick = async (e: Event) => {
		e.preventDefault();
		await fetch('/logout', { method: 'GET' });
		goto('/login');
	};
</script>

<svelte:head>
	<title>Admin</title>
	<meta name="robots" content="none" />
</svelte:head>

<main class="container">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:h-screen">
		<div class="lg:col-span-3 relative">
			<div class="absolute bg-slate-300 shadow-lg p-8 lg:inset-y-0 lg:inset-x-0">
				<ul>
					<li><a href="/admin">Admin</a></li>
					<li>
						<a href="/admin/posts">Posts</a>
					</li>
					<li>
						<a href="/admin/fields">Fields</a>
					</li>
					<li><a href="/admin/books">Books</a></li>
					<li><a href="/admin/files">Files</a></li>
					<li><a href="/logout" on:click={handleClick}>Logout</a></li>
				</ul>
			</div>
		</div>
		<div class="lg:col-span-9 p-8"><slot /></div>
	</div>
</main>

<Flash />

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>
