<script>
	import marked from 'marked'
	let text = "# Welcome to my Svelte Markdown Previewer\n## Subheading\nSome Code \`<div></div>\` <br>"+ 
				"A large **code** block \`\`\`function add(x, y) { return x + y }\`\`\`<br>"+
				"A [link](https://svelte.dev/)\n"+
				"1. first item\n2. second item\n3. third item \n \n"+
				"> Block Quotes!\n \n" +
				"![Svelte Logo](https://svelte.dev/svelte-logo-horizontal.svg)"
	console.log(text)
</script>

<main>
		<textarea id="editor" bind:value={text}></textarea>
		<div id="preview">{@html marked(text)}</div>
		<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>