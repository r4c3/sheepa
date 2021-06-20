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
  <video autoplay playsinload>
    <track kind="captions" srclang="en" label="english_captions">
    <source src="drive.mp4" type="video/mp4"/>
  </video>
  <div id="text">
    <h1>SHEEPA X DOOM</h1>
    <h2>releasing SEPTEMBER 17, 2021</h2>
  </div>
</div>
{/if}

<style>
  #content {
    min-height: calc(100vh - 108px);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  video {
    object-fit: cover;
    width: 100%;
    height: calc(100vh - 108px);
    opacity: 0.3;
    filter: blur(4px);
  }
  #text {
    position: absolute;
    transform: translateY(-8px);
    text-align: center;
    }
  h1 {
    color: var(--black);
    font-size: 54px;
  }
  h2 {
    color: var(--black);
    font-size: 24px;
  }
</style>
