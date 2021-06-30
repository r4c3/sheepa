<script>
    import { fade } from 'svelte/transition'
    let visible = false;
    import FileCard from '../parts/FileCard.svelte'
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
    const files = Data.files
    console.log(files)
</script>

{#if visible}
<h1>CLICK CARD TO DOWNLOAD FILE</h1>
<div transition:fade={{duration: 176}} id="grid">
    {#each files as file}
        <FileCard title={file.title} imgUrl={file.link}/>
    {/each}
</div>
{/if}

<style>
    #grid {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(245px, 280px));
        justify-content: space-around;
        gap: 12px;
        margin: 12px;
    }
    h1 {
        color: var(--black);
        user-select: none;
        margin-top: 18px;
        margin-bottom: 10px;
        font-size: 36px;
    }
    @media all and (max-width: 800px) {
        h1 {
            font-size: 4.7vw;
        }
    }
</style>
  