<template>
<div class="stocks" v-if="Object.keys(stocks).length > 0">
	<template v-for="(stock, i) in stocks">
	<Stock :key="i" :stock="stock" />
	</template>
</div>
<div class="stocks stocks-empty" v-else>
	<p>No stocks yet!</p>
</div>
</template>

<script>
import Stock from './Stock.vue'

export default {
	name: 'stocks',
	props: {
		stocks: Array,
	},
	components: {
		Stock,
	},
}
</script>

<style>
.stocks {
	display: grid;
	grid-gap: var(--padding-h);
	grid-template-columns: repeat(auto-fill, var(--stock-card-width));
	justify-content: center;
	align-items: stretch;
	margin-top:    var(--padding-v-more);
	margin-bottom: var(--padding-v-more);
	padding-left:  var(--padding-h-more);
	padding-right: var(--padding-h-more);
}
.stocks-empty {
	grid-template-columns: var(--stock-card-width);
	color: var(--gray);
	font-size: var(--size-h2);
	font-weight: bold;
}
</style>
