<script lang="ts">
	import Timer from '$lib/Timer.svelte'

	let message = ''
</script>

<Timer
	seconds={5}
	on:finished={() => (message = 'Finished')}
	on:started={() => (message = 'Started')}
	on:stopped={() => (message = 'Stopped')}
	on:reset={() => (message = 'Reset')}
	timeDisplayClasses="time-display"
	startButtonClasses="button button-start"
	resetButtonClasses="button button-reset"
/>

<div class="message">{message}</div>

<style global>
	.time-display {
		font-size: xx-large;
		color: rgb(66, 106, 180);
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}

	.button {
		cursor: pointer;
		margin-top: 1rem;
		margin-right: 0.6rem;
		height: 1.6rem;
		width: 4rem;
		border-radius: 28px;
	}

	.button-start {
		background-color: #bfdbf7;
		border: 1px solid #70b1f3;
	}

	.button-reset {
		background-color: #f7a2aa;
		border: 1px solid #ce5d66;
		margin-top: 1rem;
	}

	.message {
		margin-top: 1rem;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
</style>
