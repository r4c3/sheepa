<script>
	let c_mil_green = "#484d43"
	let c_white = "#f0f0f0"
	let c_black = "#ff5e00"
	let c_bg_color = "#1c1c1c"
	import Router from 'svelte-spa-router'
	import Home from './pages/Home.svelte'
	import Shop from './pages/Shop.svelte'
	import Rights from './pages/Rights.svelte'
	import Uniques from './pages/Uniques.svelte'
	import Feed from './pages/Feed.svelte'
	import Header from './parts/Header.svelte'
	import Footer from './parts/Footer.svelte'
	import Files from './pages/Files.svelte';
	import Gallery from './pages/Gallery.svelte';
	import Item from './pages/Item.svelte'
	import Collections from './pages/Collections.svelte';
	import Cart from './pages/Cart.svelte';

	console.log("hello, what are you doing here?")
</script>

<main style="--mil_green: {c_mil_green}; --white: {c_white}; --black: {c_black}; --bg_color: {c_bg_color}">
	<Header/>
	<div id="forcer">
	<Router routes={{
		"/": Home,
		"/shop": Shop,
		"/shop/:id": Item,
		"/uniques": Uniques,
		"/rights": Rights,
		"/feed": Feed,
		"/files": Files,
		"/gallery": Gallery,
		"/collections": Collections,
		"/cart": Cart
	}}/>
	</div>
	<Footer/>
</main>

<style>
	:global(:root) {
		--mil_green: var(--c_mil_green);
		--white: var(--c_white);
		--black: var(--c_black);
	}
	:global(::-webkit-scrollbar) {
		display: none;
	}
	main {
		min-height: 100vh;
		min-width: calc(100vw -12px);
		background-color: var(--bg_color);
	}
	#forcer {
		min-height: calc(100vh - 108px);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
