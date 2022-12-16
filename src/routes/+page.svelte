<script lang="ts">
	import type { CustomFields } from '.prisma/client';
	import Homepage from '$lib/components/homepage.svelte';
	import Instagram from '$lib/icons/instagram.svg.svelte';
	import Email from '$lib/icons/email.svg.svelte';
	import Twitter from '$lib/icons/twitter.svg.svelte';
	import LinkedIn from '$lib/icons/linkedIn.svg.svelte';

	export let data: {
		[key: string]: CustomFields;
	};
	const homeFields = Object.values(data);
</script>

<svelte:head>
	<title>Conrad Aidan Muan - Software developer and Human Being</title>
	<meta name="description" content="Software developer and Human Being." />
</svelte:head>

<div class="h-screen flex flex-col">
	<header class="mb-32 md:mb-40 lg:mb-64">
		<h1 class="my-name absolute">Conrad Aidan Muan</h1>
	</header>
	<main class="my-container mx-auto px-4 leading-relaxed mb-auto">
		<h2 class="text-xl mb-4">Hello, here are some things about me:</h2>
		<Homepage {homeFields} />
	</main>
	<footer class="w-full">
		<div class="my-container mx-auto px-4 py-10">
			<h2 class="text-lg sm:text-xl">Contact</h2>
			<ul class="sm:flex sm:space-x-4">
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
		top: -0.3em;
		transform: rotate(-5deg);
	}
	.my-container {
		max-width: 980px;
	}
</style>
