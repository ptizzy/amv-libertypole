<script>
	import { page } from '$app/stores';
</script>

<header>

	<nav>
		<ul>
      <li class:active={$page.path === '/'}>
          <a class="btn-back" href="/">
          <img id="back-tails" src='/btn-back-tails.svg'>
          <img id="back-shadow" src='/btn-back-shadow.svg'>
          <img id="back-main" src='/btn-back-main.svg'>
          </a>
      </li>
      <li class:active={$page.path === '/'}>
        <a class="btn-home" sveltekit:prefetch href="/">
          <img id="home-tails" src='/btn-home-tails.svg'>
          <img id="home-shadow" src='/btn-home-shadow.svg'>
          <img id="home-main" src='/btn-home-main.svg'>
        </a>
      </li>
      <li class:active={$page.path === '/'}>
        <a class="btn-forward" sveltekit:prefetch href="/">
          <img id="forward-tails" src='/btn-forward-tails.svg'>
          <img id="forward-shadow" src='/btn-forward-shadow.svg'>
          <img id="forward-main" src='/btn-forward-main.svg'>
        </a>
      </li>
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
  }

  .btn-back #back-shadow {
    position: absolute;
    mix-blend-mode: multiply;
  }

  .btn-back #back-main {
    position: absolute;
    isolation: isolate;
  }

  .btn-home {
    width: 204px;
    height: 133px;
  }

  .btn-home #home-shadow {
    position: absolute;
    mix-blend-mode: multiply;
  }

  .btn-home #home-main {
    position: absolute;
    isolation: isolate;
  }

  .btn-forward {
    width: 141px;
    height: 108px;
  }

  .btn-forward #forward-shadow {
    position: absolute;
    mix-blend-mode: multiply;
  }

  .btn-forward #forward-main {
    position: absolute;
    isolation: isolate;
  }

</style>
