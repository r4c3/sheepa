<script>
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

  import Data from "../../public/shop.json"
  import ShopCard from "../parts/ShopCard.svelte"
  const items = Data.uniques
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
  <div id="grid">
    <a href="/#/shop"><div id="card"><h1>BACK TO REGULAR SHOP</h1></div></a>
    <a href="/#/collections/uniques"><div id="card">
      <h1>ABOUT UNIQUES</h1>
      <p>uniques, one-of-ones, originals, whatever. all items on this section of the shop have a quantity of one; once the item is purchased, it will be out of stock.</p>
    </div></a>
    {#each items as item}
      <ShopCard title={item.title} price={item.price} imgUrl={item.imgUrl} id={item.id}/>
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
  #grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(245px, 280px));
    gap: 12px;
    padding: 12px;
  }
  #card {
    border: 2px solid var(--black);
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
  p {
    font-size: 20px;
    color: var(--black);
    text-align: center;
    text-transform: lowercase;
  }
</style>