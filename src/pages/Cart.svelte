<script>
    import { fade } from 'svelte/transition'
    import CartGridItem from "../parts/CartGridItem.svelte"
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
    let cartData = JSON.parse(localStorage.getItem("cart"))
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
    <h1>SHOPPING CART</h1>
    {#if cartData.length > 0}
    <div id="block">
        {#each cartData as id, i}
            <CartGridItem id={id} ind={i}/>
        {/each}
    </div>
    {:else}
        <h2>YOUR CART IS CURRENTLY EMPTY. <a href="/#/shop">CLICK HERE TO VISIT THE SHOP.</a></h2>
    {/if}
</div>
{/if}

<style>
    h1 {
        color: var(--black);
        font-size: 40px;
        margin-bottom: 10px;
    }
    h2 {
        color: var(--black);
        user-select: none;
        cursor: pointer;
    }
    a {
        color: inherit;
    }
    a:hover {
        text-decoration: underline;
    }
    #content {
        min-height: calc(100vh - 108px);
        width: calc(100% - 24px);
        padding: 12px 12px;
    }
    #block {
        width: 100%;
        display: block;
    }
</style>
  