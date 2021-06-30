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
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
  <div id="filter">
    <div>
      <h2>CATEGORIES</h2>
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <h3>DOMEPIECES</h3>
      </label>
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <h3>TORSO</h3>
      </label>
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <h3>PANTS & SHORTS</h3>
      </label>
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <h3>FOOTPIECES</h3>
      </label>
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <h3>OTHER</h3>
      </label>
    </div>
    <div>
      <h2>LOCAL PICKUP</h2>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>AUBURN, AL</h3>
      </label>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>COLUMBUS, GA</h3>
      </label>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>HARRIS COUNTY, GA</h3>
      </label>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>ATLANTA, GA</h3>
      </label>
    </div>
    <div>
      <h2>SHIPPING</h2>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>U.S.</h3>
      </label>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>CAN & MEX</h3>
      </label>
      <label class="container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <h3>REST OF GLOBE</h3>
      </label>
    </div>
    <button id="update">UPDATE CATALOG</button>
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

  #filter div {
    margin-bottom: 12px;
  }
  #update:hover {
    background-color: black;
  }
  #update {
    border: 2px solid var(--black);
    background-color: transparent;
    margin-top: 6px;
    font-size: 20px;
    color: var(--black);
    padding: 8px;
    transition: 0.2s ease all;
  }
  h2 {
    color: var(--black);
    margin-bottom: 4px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
  .checkmark {
    height: 15px;
    width: 15px;
    border: 2px solid var(--black);
    margin-right: 6px;
    transition: 0.2s ease all;
  }
  .checkmark:hover {
    background-color: black !important;
  }
  .container input:checked ~ .checkmark {
    background-color: var(--black);
  }
  input[type="checkbox"] {
    margin-right: 8px;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  #content {
    min-height: calc(100vh - 108px);
    width: 100%;
    display: flex;
  }
  #filter {
    width: calc(28% - 26px);
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--black);
    padding: 12px 12px;
  }
  h3 {
    width: 100%;
    color: var(--black);
    margin-bottom: 4px;
    position: relative;
    transform: translateY(2px);
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
    #filter {
      border-right: 0px;
      border-bottom: 2px solid var(--black);

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
  @media all and (max-width: 600px) {
    h1 {
      font-size: 6vw;
    }
  }
</style>