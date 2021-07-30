<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>

	<nav>
		<ul>
			<li><a class="btn-back" href="javascript:history.back()"></a></li>
			<li class:active={$page.path === '/'}><a class="btn-home" sveltekit:prefetch href="/"></a></li>
			<li class:active={$page.path === '/todos'}><a class="btn-forward" sveltekit:prefetch href="/todos"></a></li>
		</ul>
	</nav>

</header>

<style>
	header {
    position: absolute;
    width: 100%;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
    margin: 120px 0;
	}

  nav ul li {
  }

	svg {
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		margin: 0 78px;
		text-decoration: none;
		transition: color 0.2s linear;
	}

  .btn-back {
    width: 141px;
    height: 108px;
    background-image: url('/btn-back.svg');
  }

  .btn-home {
    width: 204px;
    height: 133px;
    background-image: url('/btn-home.svg');
  }

  .btn-forward {
    width: 141px;
    height: 108px;
    background-image: url('/btn-forward.svg');
  }

</style>
