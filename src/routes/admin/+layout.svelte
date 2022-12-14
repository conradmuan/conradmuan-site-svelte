<script lang="ts">
	import Flash from '$lib/components/notifications.svelte';
</script>

<main class="container">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-2">
		<div class="lg:col-span-3 bg-slate-300 shadow-lg lg:h-screen p-8">
			<ul>
				<li><a href="/admin">Admin</a></li>
				<li>
					<a href="/admin/posts">Posts</a>
				</li>
				<li>
					<a href="/admin/fields">Fields</a>
				</li>
			</ul>
		</div>
		<div class="lg:col-span-9 p-8"><slot /></div>
	</div>
</main>

<Flash />

<style>
	a {
		text-decoration: underline;
	}
	li ul {
		margin-left: 1rem;
	}
</style>
