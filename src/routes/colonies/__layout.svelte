<script context="module">
	export const prerender = true;
</script>

<script>
  import { nav_current } from '$lib/stores.js'
  import PageTransition from '$lib/PageTransition.svelte';
  
    import DelewareBanner from '$lib/colonies/btn-delegates_banner-de.svg.svelte'
    import PennsylvaniaBanner from '$lib/colonies/btn-delegates_banner-pa.svg.svelte'
    import NewJerseyBanner from '$lib/colonies/btn-delegates_banner-nj.svg.svelte'
    import GeorgiaBanner from '$lib/colonies/btn-delegates_banner-ga.svg.svelte'
    import ConnecticutBanner from '$lib/colonies/btn-delegates_banner-ct.svg.svelte'
    import MassachussettsBanner from '$lib/colonies/btn-delegates_banner-ma.svg.svelte'
    import MarylandBanner from '$lib/colonies/btn-delegates_banner-md.svg.svelte'
    import SouthCarolinaBanner from '$lib/colonies/btn-delegates_banner-sc.svg.svelte'
    import NewHampshireBanner from '$lib/colonies/btn-delegates_banner-nh.svg.svelte'
    import VirginiaBanner from '$lib/colonies/btn-delegates_banner-va.svg.svelte'
    import NewYorkBanner from '$lib/colonies/btn-delegates_banner-ny.svg.svelte'
    import NorthCarolinaBanner from '$lib/colonies/btn-delegates_banner-nc.svg.svelte'
    import RhodeIslandBanner from '$lib/colonies/btn-delegates_banner-ri.svg.svelte'
</script>


<slot></slot>

<PageTransition>
  {#if $nav_current != 'home'}
  <footer>
    <a href="/declaration/{$nav_current}">
    {#if $nav_current == 'de'}
      <DelewareBanner />
    {:else if $nav_current == 'pa'}
      <PennsylvaniaBanner />
    {:else if $nav_current == 'nj'}
      <NewJerseyBanner />
    {:else if $nav_current == 'ga'}
      <GeorgiaBanner />
    {:else if $nav_current == 'ct'}
      <ConnecticutBanner />
    {:else if $nav_current == 'ma'}
      <MassachussettsBanner />
    {:else if $nav_current == 'md'}
      <MarylandBanner />
    {:else if $nav_current == 'sc'}
      <SouthCarolinaBanner />
    {:else if $nav_current == 'nh'}
      <NewHampshireBanner />
    {:else if $nav_current == 'va'}
      <VirginiaBanner />
    {:else if $nav_current == 'ny'}
      <NewYorkBanner />
    {:else if $nav_current == 'nc'}
      <NorthCarolinaBanner />
    {:else if $nav_current == 'ri'}
      <RhodeIslandBanner />
    {/if}
    </a>
  </footer>
  {/if}
</PageTransition>


<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    height: 154px;
    margin: -154px 0 0 0;
	}

	footer a {
		font-weight: bold;
    width: 1003px;
	}
</style>
