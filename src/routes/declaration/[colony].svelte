<script>
  import { nav_current } from '$lib/stores.js'
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
	import Colonies from '$lib/colonies.json';
  import PageTransition from '$lib/PageTransition.svelte';
  import Delegates from '$lib/declaration/Delegates.svelte'

  let colony
  $: {
    if ($nav_current !== 'home') {
      colony = $nav_current
    }
  }
  
  onMount(() => {
    if ($nav_current !== 'home') colony = $nav_current
  })

</script>

<!-- <PageTransition> -->
  <section class="container" style="background-image:url('/bg-delegates_popup.webp'), url('/bg-colony.webp');">
      <img class="doc-header" src="/img/declaration/declaration_header.webp">
      <div class="doc"></div>
      <img transition:fade class="colony-img" src="/img/declaration/colony-{colony}.webp">
      {#if $nav_current == 'pa'}
        <div transition:fade class="blurb blurb-pa">
          Franklin also served on the committee to draft the Declaration of Independence.
        </div>
      {/if}
      {#if $nav_current == 'ct'}
        <div transition:fade class="blurb blurb-ct">
          Roger Sherman also served on the committee to draft the Declaration of Independence.
        </div>
      {/if}
      {#if $nav_current == 'ma'}
        <div transition:fade class="blurb blurb-ma">
          John Adams was on the committee to draft the Declaration and later served as the first Vice President and second President of the new United States of America.
        </div>
      {/if}
      {#if $nav_current == 'va'}
        <div transition:fade class="blurb blurb-va">
          Thomas Jefferson served on the committee to draft the Declaration of Independence and was its primary author.
        </div>
      {/if}
      {#if $nav_current == 'ny'}
        <div transition:fade class="blurb blurb-ny">
          Livingston's cousin Robert served on the committee to draft the Declaration of Independence, but was recalled to New York before he could sign so Philip signed in his place.
        </div>
      {/if}
      <Delegates />
  </section>
  <!-- </PageTransition> -->


<style>
	section {
		display: grid;
    grid-template-columns: 100px 880px 100px;
    grid-template-rows: 250px 90px 790px 200px 214px;
    min-height: 1920px;
    background-image: no-repeat;
	}

  section .doc-header {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 18px auto;
  }

  section .doc {
    width: 880px;
    grid-column-start: 2;
    grid-row-start: 3;
    grid-row-end: 6;
    background-image: url('/img/declaration/declaration.webp');
    background-repeat: no-repeat;
    background-position: top;
  }

  section .colony-img {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 4;
    margin: 0 22px;
  }
  section .delegates-row1 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
  }

  section .delegates-row2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
  }

  .blurb {
    font-family: MinionVariableConcept;
    font-size: 18px;
    color: white;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 5;
    text-align: center;
    line-height: 16px;
    
  }

  .blurb-pa {
    width: 340px;
    justify-self: end;
    align-self: start;
    margin: -70px 169px 0 0;
  }

  .blurb-ct {
    width: 184px;
    justify-self: end;
    align-self: center;
    margin: -128px 210px 0 0;
  }

  .blurb-ma {
    width: 256px;
    justify-self: center;
    align-self: center;
    margin: -44px 24px 0 0;
  }

  .blurb-va {
    width: 126px;
    justify-self: start;
    align-self: center;
    margin: 0 0 0 52px;
  }

  .blurb-ny {
    width: 272px;
    justify-self: end;
    align-self: center;
    margin: -124px 145px 0 0;
  }


</style>
