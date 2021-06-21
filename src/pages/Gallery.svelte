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
    const items = Data.files
    console.log(items)
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
    {#each items as item}
        <a href="dl/{item.link}" download><h2>{item.title}</h2></a>
    {/each}
</div>
{/if}

<style>
    h2 {
        color: var(--black);
        transform: translateY(-40px);
        user-select: none;
        cursor: pointer;
    }
    h2:hover {
        text-decoration: underline;
    }
    #content {
        min-height: calc(100vh - 108px);
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 0px 12px;
    }
</style>
  