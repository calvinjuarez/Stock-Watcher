<template>
<form class="form form-small  add-stock" id="add-stock" v-on:submit.prevent="handleSubmit()">
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
		/**
		 * Handle submission of the add-stock form.
		 */
		handleSubmit() {
			const symbol = this.symbol.toLowerCase()
			const _finally = (() => { this.$el.disabled = false; }) // Safari and Edge don't do .finally() yet, according to MDN.  :/  Neither does Node, for that matter.

			this.$el.disabled = true;

			if (this.$root.stocks.find(stock => stock.symbol === symbol))
				console.warn('Stock not added \'cause it\'s already present.') // TODO: Message duplicate entry better to the user.
			else
				this.$root.getStock(symbol)
					.then(response => {
						const { company, previous, price, logo } = response.body

						this.$root.addStock({ symbol, company, previous, price, logo })
						this.$el.querySelector('#add-stock-symbol').value = ''

						_finally()
					})
					.catch(error => {
						console.error(error.message) // TODO: Message failure to the user better.

						_finally()
					})
		},
	},
}
</script>

<style>
/*form*/.add-stock {
	margin-top:    var(--padding-v-more);
	margin-bottom: var(--padding-v-more);
}
/*input*/.add-stock-symbol {}
/*button*/.add-stock-submit {
	min-width: 10em;
	color: var(--white);
	text-transform: uppercase;
	background-color: var(--green);
}
</style>
