<template>
<div id="app" class="app">
	<h1>Stock Watcher</h1>
	<FormAddStock/>
	<Stocks/>
</div>
</template>

<script>
import FormAddStock from './components/FormAddStock.vue'
import Stocks from './components/Stocks.vue'

export default {
	name: 'app',
	components: {
		FormAddStock,
		Stocks,
	},
}
</script>

<style>
.app {
	text-align: center;
	margin-top:    var(--padding-v-more);
	margin-bottom: var(--padding-v-more);
}

</style>
