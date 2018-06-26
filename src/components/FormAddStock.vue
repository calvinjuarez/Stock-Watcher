<template>
<form class="form form-small  add-stock" id="add-stock" v-on:submit.prevent="fetchStock()">
	<label class="for-screenreaders" for="add-stock-symbol">Enter stock symbol</label>
	<input class="form-control  add-stock-symbol" id="add-stock-symbol" name="add-stock-symbol" type="text" placeholder="Enter stock symbol..." v-model="symbol" required>
	<button class="button  form-button  add-stock-submit" id="add-stock-submit" name="add-stock-submit" type="submit">Add</button>
</form>
</template>

<script>
export default {
	name: 'formAddStock',
	data: () => ({
		symbol: '',
	}),
	methods: {
		fetchStock() {
			this.$http.get(`https://api.iextrading.com/1.0/stock/${this.symbol}/batch?types=chart,company&range=1d`)
				.then(response => {
					console.dir(response.body)

					const symbol = this.symbol.toUpperCase()
					const { company, chart } = response.body

					this.$root.addStock({ symbol, company, chart })
				})
				.catch(error => console.error(error.message))
		},
	},
}
</script>

<style>
/*form*/.add-stock {}
/*input*/.add-stock-symbol {}
/*button*/.add-stock-submit {
	min-width: 10em;
	color: var(--white);
	text-transform: uppercase;
	background-color: var(--green);
}
</style>
