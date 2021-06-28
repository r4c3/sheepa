<script>
    import { products, price } from '../cart.js'
    export let product

    const cop = () => {
        product.quantity++
        $products = $products
        $price += product.price
    }

    const drop = () => {
        if (product.quantity > 0) {
            product.quantity--
            $products = $products
            $price -= product.price
        }
    }
    
    const remove = () => {
        $products = $products.filter(item => product.id != item.id)
    }
</script>

<div id="container">
    <a href="/#/shop/{product.id}"><img src="shop_r/{product.imgUrl}" alt="{product.imgUrl} product preview"/></a>
    <div id="middle">
        <h2>{product.title}</h2>
        <h3>SIZE: 6</h3>
        <h3>QUANTITY IN CART: {product.quantity}</h3>
    </div>
    <div id="end">
        <h3>$<span class="itemPrice">{product.price}</span></h3>
        <button on:click={cop}>+</button>
        <button on:click={drop}>-</button>
        <button on:click={remove}>REMOVE</button>
    </div>
</div>

<style>
    a {
        width: 15%;
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