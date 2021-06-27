<script>
    export let id
    export let ind
    let on = true
    import Data from "../../public/shop.json"
    const items = Data.shop
    let thisItemData
    for (let i = 0; i < items.length; i++) {
        if (id == items[i].id) {
            thisItemData = items[i]
        }
    }
    function removeItem() {
        let cartData = JSON.parse(localStorage.getItem("cart"))
        cartData.splice(ind, ind + 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        on = false
        console.log(cartData)
    }
    function dupeItem() {
        let cartData = JSON.parse(localStorage.getItem("cart"))
        cartData.push(id)
        localStorage.setItem("cart", JSON.stringify(cartData))
    }
</script>

{#if on}
<div id="container" class="cart{ind}">
    <a href="/#/shop/{id}"><img src="shop_r/{thisItemData.imgUrl}" alt="{thisItemData.imgUrl} product preview"/></a>
    <div id="middle">
        <h2>{thisItemData.title}</h2>
        <h3>SIZE: 6</h3>
    </div>
    <div id="end">
        <h3>${thisItemData.price}</h3>
        <button on:click={() => removeItem()}>REMOVE</button>
        <button on:click={() => dupeItem()}>ADD DUPLICATE</button>
    </div>
</div>
{/if}


<style>
    a {
        width: 15%;
    }
    .hidden {
        display: none;
    }
    #container {
        border: 2px solid var(--black);
        margin-bottom: 20px;
        display: flex;
    }
    img {
        width: 100%;
    }
    #middle {
        width: calc(70% - 28px);
        border-left: var(--black) 2px solid;
        border-right: var(--black) 2px solid;
        padding: 8px 14px;
    }
    #end {
        width: calc(15% - 16px);
        padding: 6px 8px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
    h2 {
        color: var(--black);
        text-transform: uppercase;
    }
    h3 {
        color: var(--black);
    }
    button {
        width: 50%;
        color: var(--black);
        background-color: var(--bg_color);
        border: none;
        outline: none;
    }
</style>