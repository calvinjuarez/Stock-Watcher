<template>
<div class="stocks" v-if="Object.keys(this.$root.stocks).length > 0">
	<article class="stock" v-for="(stock, i) in this.$root.stocks" :key="i">{{ stock }}</article>
</div>
<div class="stocks stocks-empty" v-else>
	<p>No stocks yet!</p>
</div>
</template>

<script>
import Stock from './Stock.vue'

export default {
	name: 'stocks',
	components: {
		Stock,
	},
}
</script>

<style>
.stocks {
	margin-top:    var(--padding-v-more);
	margin-bottom: var(--padding-v-more);
}
.stocks-empty {
	color: var(--gray);
	font-size: var(--size-h2);
	font-weight: bold;
}
</style>
