<script>
    export let title
    export let imgUrl
</script>

<div id="card" style="--img: url(dl/{imgUrl});"><a href="/dl/{imgUrl}" download>
    <div id="image"/>
    <div id="content">
       <h4>{title}</h4>
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
        background-repeat: round;
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
</style>