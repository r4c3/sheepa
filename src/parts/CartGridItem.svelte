<script>
    export let id
    import Data from "../../public/shop.json"
    const items = Data.shop
    console.log(items)
    let thisItemData
    for (let i = 0; i < items.length; i++) {
        if (id == items[i].id) {
            thisItemData = items[i]
        }
    }
    function removeFromCart() {
        
    }
</script>

<div id="container">
    <img src="shop_r/{thisItemData.imgUrl}" alt="{thisItemData.imgUrl} product preview"/>
    <div id="middle">
        <h2>{thisItemData.title}</h2>
        <h3>SIZE: 6</h3>
    </div>
    <div id="end">
        <h3>${thisItemData.price}</h3>
        <button on:click={removeFromCart}>REMOVE</button>
        <button>ADD DUPLICATE</button>
    </div>
</div>


<style>
    #container {
        border: 2px solid var(--black);
        margin-bottom: 20px;
        display: flex;
    }
    img {
        width: 15%;
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