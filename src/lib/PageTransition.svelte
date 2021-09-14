<script>
	import { cubicInOut } from 'svelte/easing'
	let duration = 250
	let delay = 0

	const transitionIn = () => ({
		duration,
		delay,
		easing: cubicInOut,
		css: (t) => `opacity: ${t}`,
	})

	const transitionOut = () => ({
		duration,
		delay,
		easing: cubicInOut,
		css: (t) => `opacity: ${t}`,
	})
</script>

<div in:transitionIn out:transitionOut>
	<slot />
</div>
