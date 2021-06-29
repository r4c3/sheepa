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
                        "link": body.data.children[i].data.permalink,
                        "author": body.data.children[i].data.author.toUpperCase()
                    }
                    postsArray.push(post)
                }
            }
        })
        console.log(postsArray)
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
            <div id="imgBox">
                <img src="{post.imgUrl}" alt="feed post"/>
                <div id="overlay"><p>u/{post.author}</p></div>
            </div>
        {/each}
    </div>
</div>
{/if}

<style>
    p {
        margin-left: 2px;
        font-size: 18px;
    }
    #overlay {
        position: absolute;
        bottom: 0px;
        width: 100%;
        background: var(--black);
        color: var(--bg_color);
    }
    #imgBox {
        position: relative;
        border: 2px solid var(--black);
        border-bottom: 0px;
        margin-bottom: 8px;
    }
    #feed {
        margin: 12px;
        columns: 12 800px;
        column-gap: 8px;
    }
    img {
        display: inline-block;
        width: 100%;
    }
    img {
        max-width: 100%;
    }
    h3 {
        color: var(--bg_color);
        transition: all 0.15s linear;
    }
    h3:hover {
        color: white;
    }
    #submit {
        margin-top: 12px;
        width: 100%;
        height: 26px;
        background-color: var(--black);
        text-align: center;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 1;
    }
    #content {
        min-height: calc(100vh - 108px);
        width: 100%;
        padding: 0px 12px;
    }
    @media all and (max-width: 2450px) {
        #feed {
            columns: 12 570px;
        }
    }
    @media all and (max-width: 1300px) {
        #feed {
            columns: 12 390px;
        }
    }
    @media all and (max-width: 900px) {
        #feed {
            columns: 12 230px;
        }
    }
</style>
  