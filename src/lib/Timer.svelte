<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let seconds = 0
	export let timeDisplayClasses = ''
	export let startButtonClasses = ''
	export let resetButtonClasses = ''
	let active = false
	let interval = null
	let countdown = seconds > 0
	let resetSeconds = countdown ? seconds : 0

	const dispatch = createEventDispatcher()

	$: if (countdown && seconds === 0) {
		stop()
		dispatch('finished')
	}

	function formatTime(totalSeconds: number): string {
		const hours = Math.floor(totalSeconds / 3600)
		const minutes = Math.floor((totalSeconds - hours * 3600) / 60)
		const seconds = totalSeconds - hours * 3600 - minutes * 60

		return (
			(hours < 10 ? '0' + hours : hours) +
			':' +
			(minutes < 10 ? '0' + minutes : minutes) +
			':' +
			(seconds < 10 ? '0' + seconds : seconds)
		)
	}

	function start() {
		active = true
		interval = setInterval(() => {
			seconds = seconds + (countdown ? -1 : 1)
		}, 1000)
		dispatch('started')
	}

	function stop() {
		clearInterval(interval)
		active = false
		dispatch('stopped')
	}

	function reset() {
		stop()
		seconds = resetSeconds
		dispatch('reset')
	}
</script>

<div class={timeDisplayClasses}>{formatTime(seconds)}</div>

<button
	class={startButtonClasses}
	disabled={countdown && seconds < 1}
	on:click={() => (active ? stop() : start())}
>
	{active ? 'Pause' : 'Start'}
</button>

<button class={resetButtonClasses} on:click={reset}>Reset</button>
