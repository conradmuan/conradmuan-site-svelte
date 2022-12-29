<script>
	import { page } from '$app/stores';
	import Instagram from '$lib/icons/instagram.svg.svelte';
	import Email from '$lib/icons/email.svg.svelte';
	import Twitter from '$lib/icons/twitter.svg.svelte';
	import LinkedIn from '$lib/icons/linkedIn.svg.svelte';

	import '$lib/style.css';
</script>

<svelte:head>
	<title
		>{$page.data.metadata?.title || `Conrad Aidan Muan - Software developer and Human Being`}</title
	>
	<meta
		name="description"
		content={$page.data.metadata?.description || `Software developer and Human Being.`}
	/>
</svelte:head>

<div class="h-screen flex flex-col">
	<header class="mb-32 md:mb-40 lg:mb-64">
		<h1 class="my-name absolute opacity-10">Conrad Aidan Muan</h1>
	</header>
	<main class="container mx-auto px-4 leading-relaxed mb-auto prose lg:prose-xl">
		{#if $page.route.id !== '/(site)'}<a href="/">← Home</a>{/if}
		<slot />
	</main>
	<footer class="container prose lg:prose-xl mx-auto">
		<div class=" px-4 py-10">
			<h2 class="text-lg sm:text-xl">Contact</h2>
			<ul class="sm:flex sm:space-x-4 list-none">
				<li>
					<LinkedIn className={'inline-block'} />{' '}
					<a
						href="https://www.linkedin.com/in/conradmuan/"
						target="_blank"
						class="my-monochrome-link"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<Twitter className={'inline-block'} />{' '}
					<a
						href="https://twitter.com/conradmuan"
						target="_blank"
						class="my-monochrome-link"
						rel="noreferrer"
					>
						Twitter
					</a>
				</li>
				<li>
					<Instagram className={'inline-block'} />{' '}
					<a
						href="https://www.instagram.com/conradmuan/"
						target="_blank"
						class="my-monochrome-link"
						rel="noreferrer"
					>
						Instagram
					</a>
				</li>
				<li><Email className={'inline-block'} /> hi [at] conrad [dot] chat</li>
			</ul>
		</div>
	</footer>
</div>

<style>
	.my-name {
		font-family: 'Old Standard TT', serif;
		font-size: 10.5vw;
		top: -0.66em;
	}
</style>
