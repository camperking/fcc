<script>
	import { onMount } from 'svelte'

	//const quoteURL = "./quotes.txt" 
	const quoteURL = "/fcc/randomQuote/quotes.txt" // for release
	let quotes
	$: actualQuote = ""
	$: actualAuthor = ""

	const tweetURL = ""

	onMount(() => {
		fetch(quoteURL).then(response => {
			if (response.ok) {
				return response.text()	
			} else {
				throw new Error("couldn't load")
			}
		}).then(res => {
			quotes = JSON.parse(res)
			quotes = quotes.quotes
			setRandomQuote()
		})
	})

	function setRandomQuote() {
		let rand = Math.floor(Math.random() * Math.floor(4))
			actualQuote = quotes[rand].quote
			actualAuthor = quotes[rand].author
	}
</script>


<main>
		<div id="quote-box">
			<div id="text">"{actualQuote}"</div>
			<div id="author">{actualAuthor}</div>
			<div class="controls">
				<button id="new-quote" on:click={setRandomQuote}>random quote</button>
				<a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text={"\""+actualQuote+"\" "+actualAuthor}">tweet</a>
			</div>
		</div>
		<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 50%;
		margin: 0 auto;
	}

	#quote-box {
		margin-top: 50%;
		background-color: antiquewhite;
		text-align: left;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	#text {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	#author {
		margin-bottom: 1rem;
	}

	.controls {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

</style>