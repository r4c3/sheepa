<script>
  import { store } from "../data.js"
  import { fade } from 'svelte/transition'
  let visible = false;
  import { onMount } from 'svelte'
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  onMount(async () => {
    await sleep(350)
    visible = true
    window.scrollTo({top: 0, behavior: "smooth"});
  })
  import ShopCard from "../parts/ShopCard.svelte"
import { products } from "../cart.js";
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
  <div id="filter">
    <h3>CATEGORIES</h3>
    <h3 class="tab">HEADWEAR</h3>
    <h3 class="tab">SHORT SLEEVE</h3>
    <h3 class="tab">LONG SLEEVE</h3>
    <h3 class="tab">SHORTS</h3>
    <h3 class="tab">PANTS</h3>
    <h3 class="tab">FOOTWEAR</h3>
    <h3 class="tab">ACCESSORIES</h3>
    <h3 class="tab">OTHER</h3>
    <h3>LOCAL PICKUP</h3>
    <h3 class="tab">AUBURN, AL</h3>
    <h3 class="tab">CATAULA, GA</h3>
    <h3 class="tab">COLUMBUS, GA</h3>
    <h3 class="tab">HAMILTON, GA</h3>
    <h3>SHIPPING</h3>
    <h3 class="tab">U.S.</h3>
    <h3 class="tab">NORTH AMERICA</h3>
    <h3 class="tab">INTERNATIONAL</h3>
  </div>
  <div id="grid">
    <a href="/#/uniques"><div id="card"><h1>GO TO UNIQUES</h1></div></a>
    {#each $store as product}
      {#if product.collection != "UNIQUES"}
        <ShopCard product={product}/>
      {/if}
    {/each}
  </div>
</div>
{/if}

<style>
  #content {
    min-height: calc(100vh - 108px);
    width: 100%;
    display: flex;
  }
  #filter {
    width: calc(28% - 26px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid var(--black);
    padding: 12px 12px;
  }
  h3 {
    width: 100%;
    color: var(--black);
    margin-bottom: 4px;
  }
  .tab {
    margin-left: 42px;
  }
  #grid {
    width: 72%;
    height: min-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 12px;
  }
  #card {
    border: 2px solid var(--black);
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 0.3s;
    padding: 0px 12px;
  }
  #card:hover {
    background-color: black;
  }
  h1 {
    color: var(--black);
    text-align: center;
    transform: translateY(-12px);
  }
  @media all and (max-width: 1100px) {
    #grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media all and (max-width: 900px) {
    #content {
      flex-direction: column;
    }
    #grid, #filter {
      width: calc(100% - 24px)
    }
  }
  @media all and (min-width: 1100px) {
    #grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media all and (min-width: 1400px) {
    #grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media all and (min-width: 2100px) {
    #grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media all and (min-width: 2900px) {
    #grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media all and (min-width: 3400px) {
    #grid {
      grid-template-columns: repeat(7, 1fr);
    }
  }
</style>