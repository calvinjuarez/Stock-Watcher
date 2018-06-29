<template>
<article class="card  stock-card">
	<header class="stock-card-header">
		<h3 class="stock-card-name">{{ truncateLongName(stock.company.companyName) }}</h3>
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
	<div class="stock-card-chart  minmax">
		<div class="minmax-chart">
			<input class="minmax-chart-display" type="range" step=".01"
			       :min="Math.min(stock.previous.close, stock.previous.low )"
			       :max="Math.max(stock.previous.close, stock.previous.high)"
			       :value="stock.previous.close" disabled>
		</div>
		<div class="minmax-labels">
			<div class="stock-card-chart-label  minmax-label minmax-label-high">${{ stock.previous.high }}</div>
			<div class="stock-card-chart-label  minmax-label minmax-label-low ">${{ stock.previous.low  }}</div>
		</div>
	</div>
</article>
</template>

<script>
export default {
	name: 'stock',
	props: {
		stock: Object,
	},
	methods: {
		truncateLongName(string, lengthThreshold=18) {
			if (string.length <= lengthThreshold)
				return string

			return `${string.substr(0, lengthThreshold - 3)}...`
		}
	}
}
</script>

<style>
.stock-card {
	display: grid;
	grid-template: 'title chart' 4em
	               'main  chart' 4em; /* CSS vars don't yet work with grid. :/  In production, I'd figure out Less in component styles. */
	max-width: var(--stock-card-width);
	text-align: left;
}
	.stock-card-header {
		grid-area: title;
	}
		.stock-card-name {
			margin-bottom: 0;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.stock-card-symbol {
			color: var(--gray);
			font-weight: bold;
		}
	.stock-card-content {
		grid-area: main;
		align-self: end;
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
		justify-self: end;
		color: var(--gray);
	}
		.stock-card-chart-label {
			color: var(--gray-dark);
		}
.stock-card-meta {
	overflow: scroll;
}
</style>
