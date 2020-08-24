<script>
	import DrumPad from "./DrumPad.svelte"

	const drumKit = [
		{key: "Q", audioURL: "./audio/Q.wav"},
		{key: "W", audioURL: "./audio/W.wav"},
		{key: "E", audioURL: "./audio/E.wav"},
		{key: "A", audioURL: "./audio/A.wav"},
		{key: "S", audioURL: "./audio/S.wav"},
		{key: "D", audioURL: "./audio/D.wav"},
		{key: "Y", audioURL: "./audio/Y.wav"},
		{key: "X", audioURL: "./audio/X.wav"},
		{key: "C", audioURL: "./audio/C.wav"}
	]

	document.addEventListener("keypress", (event) => {
        const key = event.key.toUpperCase()
        try {
			playAudio(key)
        } catch (e) {
            console.log(key + "!")
        }
	})
	
	function DrumPadClicked(key) {
        playAudio(key.detail)
	}
	
	function playAudio(key) {
		document.getElementById(key).play()
		document.getElementById("display").innerHTML = key
	}
</script>

<main>
	<h1>Drum Machine</h1>
	<div id="drum-machine">
		<div class="drum-pads">
			{#each drumKit as drum}
				<DrumPad key={drum.key} audioURL={drum.audioURL} on:click={DrumPadClicked}/>
			{/each}
		</div>
		<div id="display"></div>
	</div>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		font-size: 2rem;
	}

	#drum-machine {
		margin-top: 0vh;
	}

	.drum-pads {
		display: grid;
		grid-template-rows: 4rem 4rem 4rem;
		grid-template-columns: 4rem 4rem 4rem;
		gap: 1rem 1rem;
		width: 14rem;
		margin: 0 auto;
	}

	#display {
		margin-top: 1rem;
	}

</style>