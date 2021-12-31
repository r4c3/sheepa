<script>
    var countDownDate = new Date("Sep 17, 2021 12:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance / 1000))
    var x = setInterval(function() {
        now = new Date().getTime();
        distance = countDownDate - now;
        seconds = Math.floor((distance / 1000));
    }, 1000);
</script>


<footer>
    <a href="/#/rights"><h4>© 2021</h4></a>
    <a href="https://www.instagram.com/sheepa.co/" target="_blank" rel="noopener noreferrer"><h4>INSTAGRAM</h4></a>
    <a href="/#/files"><h4>FILES</h4></a>
    <h4 on:click={() => (document.body.scrollIntoView())}>BACK TO TOP</h4>
</footer>
<div id="subfooter">
    <h1>{seconds} SECONDS UNTIL NEXT DROP</h1><!--12:00AM EST JUNE 30 2021-->
</div>

<style>
    h1 {
        color: var(--black);
        user-select: none;
        text-transform: uppercase;
        font-size: 30px;
    }
    h4 {
        color: var(--black);
        font-size: 20px;
        letter-spacing: 1px;
        cursor: pointer;
    }
    footer {
        border-top: 2px solid var(--black);
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 12px;
    }
    #subfooter {
        border-top: 2px solid var(--black);
        height: 63px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 12px;
    }
    @media all and (max-width: 740px) {
        h1 {
            font-size: 4vw;
        }
    }
    @media all and (max-width: 600px) {
        h4 {
            font-size: 3vw;
        }
    }
</style>