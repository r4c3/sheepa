<script>
    import { location } from 'svelte-spa-router'
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';
    let visible = false;
    let right;
    let thisItemData
    const loc = $location.substring(6)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function handleSizeSelect(size) {
        sizeSelected = size
        quantityRemaining = thisItemData.availability[size]
    }
    onMount(async () => {
        await sleep(350)
        visible = true
        window.scrollTo({top: 0, behavior: "smooth"});
    })
    import Data from "../../public/shop.json"
    const items = Data.shop
    for (let i = 0; i < items.length; i++) {
        if (loc == items[i].id) {
            thisItemData = items[i]
        }
    }
    let sizeSelected = "NONE"
    let quantityRemaining = "N/A"
    function addToCart() {
        if (localStorage.getItem("cart") == null) {
            localStorage.setItem("cart", "[]")
        }
        const old = JSON.parse(localStorage.getItem("cart"))
        old.push(thisItemData.id)
        localStorage.setItem("cart", JSON.stringify(old))
    }
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
    <div id="left">
        {#each thisItemData.productImages as image}
            <img id="productImage" src="shop_r/{image}" alt="{image} product"/>
        {/each}
    </div>
    <div id="right" bind:this={right}>
        <div id="preSize">
            <h2 id="itemTitle">{thisItemData.title}</h2>
        <div id="description"><p>{thisItemData.description} Part of the <a href="/#/collections/{thisItemData.collection}">{thisItemData.collection}</a> collection.</p></div>
            <h2>${thisItemData.price}</h2>
        </div>
        {#if thisItemData.shoeSizing}
            <div class="sizeGrid">
                <button on:click={() => handleSizeSelect(6)}>6</button>
                <button on:click={() => handleSizeSelect(6.5)}>6.5</button>
                <button on:click={() => handleSizeSelect(7)}>7</button>
                <button on:click={() => handleSizeSelect(7.5)}>7.5</button>
                <button on:click={() => handleSizeSelect(8)}>8</button>
                <button on:click={() => handleSizeSelect(8.5)}>8.5</button>
                <button on:click={() => handleSizeSelect(9)}>9</button>
                <button on:click={() => handleSizeSelect(9.5)}>9.5</button>
                <button on:click={() => handleSizeSelect(10)}>10</button>
                <button on:click={() => handleSizeSelect(10.5)}>10.5</button>
                <button on:click={() => handleSizeSelect(11)}>11</button>
                <button on:click={() => handleSizeSelect(11.5)}>11.5</button>
                <button on:click={() => handleSizeSelect(12)}>12</button>
                <button on:click={() => handleSizeSelect(12.5)}>12.5</button>
                <button on:click={() => handleSizeSelect(13)}>13</button>
                <button on:click={() => handleSizeSelect(13.5)}>13.5</button>
            </div>
        {:else}
            <div class="sizeGrid">
                <button on:click={() => handleSizeSelect("XS")}>XS</button>
                <button on:click={() => handleSizeSelect("S")}>S</button>
                <button on:click={() => handleSizeSelect("M")}>M</button>
                <button on:click={() => handleSizeSelect("L")}>L</button>
                <button on:click={() => handleSizeSelect("XL")}>XL</button>
            </div>
        {/if}
        <h2 class="gridText">SIZE SELECTED: {sizeSelected}</h2>
        <h2 class="gridText" id="quantity">QUANTITY REMAINING: {quantityRemaining}</h2>
        <div id="addToCart" on:click={addToCart}><h1>ADD TO CART</h1></div>
        <div id="bottomLinks">
            <button on:click={handleSizeSelect(6)}>COPY W2C LINK</button>
            <button>SUBMIT TO FEED</button>
            <button>ALL {thisItemData.category}</button>
            <button>{thisItemData.collection} COLLECTION</button>
            <button>SHIPPING CALCULATOR</button>
            <button>SIZING CHART</button>
        </div>
        <div id="final">
            <h2>ID: {thisItemData.id}</h2>
            <h2>TOTAL PRODUCED: {thisItemData.totalProduced}</h2>
            <h2>LOCAL SHIPPING: {thisItemData.localShipping}</h2>
            <h2>U.S. SHIPPING: {thisItemData.usShipping}</h2>
            <h2>GLOBAL SHIPPING: {thisItemData.globalShipping}</h2>
        </div>
    </div>
</div>
{/if}

<style>
    button:hover {
        background-color: black !important;
    }
    button {
        cursor: pointer;
        transition: all 0.1s ease;
    }
    #final {
        height: auto;
        padding: 12px;
        border-top: 2px solid var(--black);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #bottomLinks button {
        height: 50px;
        width: 100%;
        color: var(--black);
        background-color: var(--bg_color);
        border: 2px solid var(--black);
        font-size: 20px;
        outline: none;
    }
    #bottomLinks {
        padding: 12px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    #addToCart:hover h1 {
        color: var(--white);
    }
    #addToCart h1 {
        font-size: 70px;
        color: var(--bg_color);
        transition: all 0.15s linear;
        transform: translateY(-2px);
    }
    #addToCart {
        width: 100%;
        height: 250px;
        background-color: var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    #quantity {
        margin-bottom: 12px;
    }
    .gridText {
        margin-left: 12px;
        margin-bottom: 4px;
    }
    #preSize {
        border-bottom: 2px solid var(--black);
        padding: 0px 12px 8px 12px;
        text-align: justify;
    }
    .sizeGrid {
        padding: 12px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
    }
    .sizeGrid button {
        height: 50px;
        width: 100%;
        color: var(--black);
        background-color: var(--bg_color);
        border: 2px solid var(--black);
        font-size: 20px;
        outline: none;
    }
    #content {
        min-height: calc(100vh - 108px);
        max-width: 1520px;
        display: flex;
        align-items: center;
    }
    @media all and (min-width: 1520px) {
        #content {
            border-left: 2px solid var(--black);
            border-right: 2px solid var(--black);
        }
    }
    #left {
        width: calc(50% - 1px);
        height: 1252px;
        margin: 12px 0px;
        overflow-y: scroll;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        gap: 12px;
    }
    #right {
        width: calc(50% - 1px);
        min-height: calc(100vh - 108px);
        border-left: 2px solid var(--black);
        padding: 12px 0px 0px 0px;
    }
    #itemTitle {
        transform: translateY(-4px);
    }
    #description {
        margin: 6px 0px 12px 0px;
        height: 198px;
        display: flex;
        align-items: center;
    }
    p {
        color: var(--black);
    }
    h2 {
        color: var(--black);
        text-transform: uppercase;
    }
    #productImage {
        width: calc(100% - 24px);
        height: auto;
        transition: all 0.2s ease;
    }
    a {
        color: var(--black);
    }
</style> 