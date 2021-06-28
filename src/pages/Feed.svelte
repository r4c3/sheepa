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
    let postsArray = []
    async function fetchPosts() {
        await fetch("https://www.reddit.com/r/sheepa.json")
        .then(response => response.json())
        .then(body => {
            for (let i = 0; i < body.data.children.length; i++) {
                if (body.data.children[i].post_hint = 'image') {
                    let post = {
                        "imgUrl": body.data.children[i].data.url_overridden_by_dest,
                        "link": body.data.children[i].data.permalink
                    }
                    postsArray.push(post)
                }
            }
        })
    }
    fetchPosts()
</script>

{#if visible}
<div transition:fade={{duration: 176}} id="content">
    <div id="submit">
        <a href="https://www.reddit.com/r/sheepa" target="_blank"><h3>VISIT r/SHEEPA TO SUBMIT TO FEED</h3></a>
    </div>
    <div id="feed">
        {#each postsArray as post}
            <div id="postBox" style="background-image: url({post.imgUrl})"/>
        {/each}
    </div>
</div>
{/if}

<style>
    #feed {
        margin: 12px;
        border: 2px solid var(--black);
    }
    #postBox {
        height: 300px;
        background-position: center;
        background-size: contain;
    }
    h3 {
        color: var(--bg_color);
        transition: all 0.15s linear;
    }
    h3:hover {
        color: white;
    }
    #submit {
        width: 100%;
        height: 26px;
        background-color: var(--black);
        text-align: center;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
    }
    h1 {
        color: var(--black);
        transform: translateY(-40px);
        user-select: none;
        cursor: pointer;
    }
    #content {
        min-height: calc(100vh - 108px);
        width: 100%;
        padding: 0px 12px;
    }
</style>
  