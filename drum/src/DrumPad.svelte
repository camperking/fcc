<script>
    export let audioURL
    export let key
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    function play() {
        dispatch("click", key)
    }
</script>

<div class="drumPad" on:click={play}>{key}<audio src={audioURL} id={key}></audio></div>

<style>
    .drumPad {
        width: 4rem;
        height: 3rem;
        text-align: center;
        padding-top: 1rem;
        background-color: lavender;
        border-radius: 0.2rem;
        box-shadow: 0.2rem 0.2rem 0.5rem black;
    }

    .drumPad:active {
        margin-top: 0.2rem;
        box-shadow: 0 0 0.5rem black;
    }
</style>