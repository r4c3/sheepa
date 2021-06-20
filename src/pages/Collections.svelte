<script>
    import { fade } from 'svelte/transition'
    import Data from "../../public/shop.json"
    const collections = Data.collections
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
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
    {#each collections as collection}
    <a href="/#/collections/{collection.title}" id="collectionCard" style="background-image: url(coll_r/{collection.imgUrl})">
        <h1>{collection.title}</h1>
    </a>
    {/each}
</div>
{/if}

<style>
    h1 {
        color: var(--black);
        font-size: 100px;
        padding: 0px 24px;
        background-color: rgba(0, 0, 0, 0.815);
        text-align: center;
    }
    #content {
        min-height: calc(100vh - 108px);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 12px 12px;
        gap: 12px;
    }
    #collectionCard {
        position: relative;
        height: 400px;
        width: calc(100% - 28px);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--black);
        background-position: center;
        background-size: cover;
    }
</style>
  