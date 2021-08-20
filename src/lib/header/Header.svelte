<script>
	import { page } from '$app/stores';
  import { onMount } from 'svelte'
	import Colonies from '$lib/colonies.json';
  import BackImage from '$lib/header/btn-back_svg.svelte'
  import NextImage from '$lib/header/btn-forward_svg.svelte'
  import HomeImage from '$lib/header/btn-home_svg.svelte'

  export let nav_prev = ''
  export let nav_next = ''

  onMount(() => {
    addEventListener('sveltekit:navigation-end', (e) => {
      let _path = e.target.location.pathname.split('/')
      getNavs(_path[_path.length-1])
    }) 
  })

  let getNavs = (current) => {
    if (current) {
      for (let i = 0; i < Colonies.length; i++) {
        if (Colonies[i] == current) {
          nav_prev = i == 0 ? Colonies[Colonies.length-1] : Colonies[i-1]
          nav_next = i == Colonies.length-1 ? Colonies[0] : Colonies[i+1]
        }
      }
    }
    else {
      nav_prev = ''
      nav_next = ''
    }
  }
</script>

<header>

	<nav>
		<ul>
      <li class:active={$page.path === '/'}>
        {#if nav_prev}
          <a class="btn-back" sveltekit:prefetch href="/colonies/{nav_prev}">
              <BackImage />
            </a>
        {/if}
      </li>
      <li class:active={$page.path === '/'}>
        {#if nav_prev && nav_next}
          <a class="btn-home" sveltekit:prefetch href="/">
              <HomeImage />
          </a>
        {/if}
      </li>
      <li class:active={$page.path === '/'}>
        {#if nav_next}
          <a class="btn-forward" sveltekit:prefetch href="/colonies/{nav_next}">
              <NextImage />
          </a>
        {/if}
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
