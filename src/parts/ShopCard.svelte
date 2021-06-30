<script>
    export let product = {}
</script>

<div id="card" style="--img: url(shop_r/{product.imgUrl});"><a href="/#/shop/{product.id}">
    <div id="image"/>
    <div id="content">
       <h4>{product.title}</h4>
       <p>${product.price}</p>
    </div></a>
</div>

<style>
    #card {
        border: 2px solid var(--black);
        height: 400px;
        transition: all ease 0.3s;
    }
    #card:hover {
        background-color: black;
    }
    #image {
        background: var(--img);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 320px;
    }
    #content {
        position: relative;
        padding: 8px;
        padding-top: 6px;
    }
    h4 {
        text-transform: uppercase;
        color: var(--black);
    }
    p {
        color: var(--black);
        width: 100%;
        position: absolute;
        top: 52px;
        left: -8px;
        text-align: right;
    }
    @media all and (max-width: 600px) {
        h4, p {
            font-size: 3vw;
        }
    }
</style>