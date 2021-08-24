<script>
	import { page } from '$app/stores';
  import { onMount } from 'svelte'
  import { nav_current, nav_section, nav_prev, nav_next } from '$lib/stores.js'
	import Colonies from '$lib/colonies.json';
  import BackImage from '$lib/header/btn-back_svg.svelte'
  import NextImage from '$lib/header/btn-forward_svg.svelte'
  import HomeImage from '$lib/header/btn-home_svg.svelte'

  onMount(() => {
    addEventListener('sveltekit:navigation-start', (e) => {
      let _path = e.target.location.pathname.split('/')
      getNavs(_path[_path.length-1])
      nav_section.set( $nav_current !== '' ? _path[_path.length-2] : '')
      console.log($nav_section)

    }) 
  })

  let getNavs = (current) => {
    console.log('current', current)
    let _current = current == '' ? 'home' : current
    console.log('_current', _current)
    nav_current.set( _current )
  }
</script>

<header>

	<nav>
		<ul>
      <li>
        {#if $nav_prev && $nav_section != 'declaration'}
          <a class="btn-back" sveltekit:prefetch href="/colonies/{$nav_prev}">
              <BackImage />
            </a>
        {/if}
      </li>
      <li>
        {#if $nav_current !== 'home'}
          <a class="btn-home" sveltekit:prefetch href="/">
              <HomeImage />
          </a>
        {/if}
      </li>
      <li>
        {#if $nav_next && $nav_section != 'declaration'}
          <a class="btn-forward" sveltekit:prefetch href="/colonies/{$nav_next}">
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
