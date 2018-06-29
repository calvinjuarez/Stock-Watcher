<template>
<article class="card  stock-card">
	<header class="stock-card-header">
		<h3 class="stock-card-name">{{ stock.company.companyName }}</h3>
		<span class="stock-card-symbol">{{ stock.company.symbol }}</span>
	</header>
	<div class="stock-card-content">
		<div class="stock-card-change stock-card-change-positive" v-if="stock.previous.change >= 0">
			<small>&#x25b2; {{ stock.previous.change }} ({{ stock.previous.changePercent }}%)</small>
		</div>
		<div class="stock-card-change stock-card-change-negative" v-else>
			<small>&#x25bc; {{ stock.previous.change }} ({{ stock.previous.changePercent }}%)</small>
		</div>
		<div class="stock-card-price">${{ stock.previous.close }}</div>
	</div>
	<div class="stock-card-chart">
		<input class="minmax-chart" type="range"
		       :min="Math.min(stock.previous.close * 100, stock.previous.low  * 100)"
		       :max="Math.max(stock.previous.close * 100, stock.previous.high * 100)"
		       :value="stock.previous.close * 100" disabled>
		<div>${{ stock.previous.high }}</div>
		<div>${{ stock.previous.low }}</div>
	</div>
</article>
</template>

<script>
export default {
	name: 'stock',
	props: {
		stock: Object,
	},
}
</script>

<style>
.stock-card {
	display: grid;
	grid-template:
		'title   chart' 5em
		'content chart' 5em;
	max-width: var(--stock-card-width);
	text-align: left;
}
	.stock-card-header {
		grid-area: title;
	}
		.stock-card-name {
			margin-bottom: 0;
		}
		.stock-card-symbol {
			color: var(--gray);
			font-weight: bold;
		}
	.stock-card-content {
		grid-area: content;
		align-self: flex-end;
	}
		.stock-card-change {}
		.stock-card-change-positive {
			color: var(--forest);
		}
		.stock-card-change-negative {
			color: var(--red);
		}
	.stock-card-chart {
		grid-area: chart;
	}
.stock-card-meta {
	overflow: scroll;
}
</style>
