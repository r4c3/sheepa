<script>
    export let title
    export let price
    export let imgUrl
    export let id
</script>

<div id="card" style="--img: url(shop_r/{imgUrl});"><a href="/#/shop/{id}">
    <div id="image"/>
    <div id="content">
       <h4>{title}</h4>
       <p>${price}</p>
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
        background-size: cover;
        background-repeat: no-repeat;
        height: 320px;
    }
    #content {
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
        text-align: right;
    }
</style>