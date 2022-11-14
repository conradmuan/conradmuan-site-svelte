<script>
	import Instagram from '../icons/instagram.svg.svelte';
	import Email from '../icons/email.svg.svelte';
	import Twitter from '../icons/twitter.svg.svelte';
	import LinkedIn from '../icons/linkedIn.svg.svelte';
</script>

<svelte:head>
	<title>Conrad Aidan Muan - Software developer and Human Being</title>
	<meta name="description" content="Software developer and Human Being. F" />
</svelte:head>

<div class="h-screen flex flex-col">
	<header class="mb-32 md:mb-40 lg:mb-64">
		<h1 class="my-name absolute">Conrad Aidan Muan</h1>
	</header>
	<main class="my-container mx-auto px-4 leading-relaxed mb-auto">
		<h2 class="text-xl mb-4">Hello, here are some things about me:</h2>
		<ul class="mb-4">
			<li>
				👨‍💻 Software Developer
				<ul class="ml-8 mb-4">
					<li>
						2022: Senior Product Engineer at{' '}
						<a href="https://facet.ai" target="_blank" class="my-link" rel="noreferrer">
							Facet.ai
						</a>
					</li>
					<li>
						2021 - 2022: Staff Engineer at{' '}
						<a href="https://www.zipper.works" target="_blank" class="my-link" rel="noreferrer">
							Zipper
						</a>
					</li>
					<li>
						2016 - 2021: Sr Software Engineer at{' '}
						<a href="https://slack.com/" target="_blank" class="my-link" rel="noreferrer">
							Slack
						</a>{' '}
						(Platform, Interop and Files)
					</li>
					<li>
						2013 - 2016: Sr Software Engineer at AOL for{' '}
						<a href="https://www.engadget.com/" target="_blank" class="my-link" rel="noreferrer">
							Engadget.com
						</a>
					</li>
				</ul>
			</li>
			<li>🌎 Toronto - San Francisco - Vancouver</li>
			<li>📚 Science Fiction, Fantasy, Horror</li>
		</ul>
		<hr class="my-8" />
		<h2 class="text-xl">👀 Currently Reading</h2>
		<ul class="list-disc ml-8 mb-4">
			<li>Cribsheet - Emily Oster</li>
		</ul>
		<h2 class="text-xl">📚 Recently Read in 2022</h2>
		<p>
			<small>(non-exhaustive)</small>
		</p>
		<ul class="list-disc ml-8">
			<li>1Q84 - Haruki Murakami</li>
			<li>Dark Money - Jane Mayer</li>
			<li>Save the Cat! Writes a Novel</li>
			<li>The First Fifteen Lives of Harry August - Claire North</li>
			<li>Sole Survivor - Dean Koontz</li>
			<li>Dreamcatcher - Stephen King</li>
			<li>Talto - Anne Rice</li>
			<li>Ghost Story - Peter Straub</li>
			<li>Thinking, Fast &amp; Slow - Daniel Kahneman</li>
			<li>Lord of the Flies - William Golding</li>
			<li>The Impossible Girl - Lydia Kang</li>
			<li>Bird by Bird - Ann Lamott</li>
			<li>Leviathan Falls - James S. A. Corey</li>
			<li>On Writing - Stephen King</li>
		</ul>
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
