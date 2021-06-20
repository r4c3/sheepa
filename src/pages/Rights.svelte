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
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
    <h1>All rights reserved.<br/>Is this hypocritical? Yes.</h1>
</div>
{/if}

<style>
h1 {
    color: var(--black);
    transform: translateY(-40px);
    user-select: none;
    cursor: pointer;
    text-align: center;
    width: 72%;
}
#content {
    min-height: calc(100vh - 108px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 12px;
}

</style>
  