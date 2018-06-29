<template>
<form class="form  add-stock" id="add-stock" v-on:submit.prevent="handleSubmit()" :disabled="fetching">
	<label class="for-screenreaders" for="add-stock-symbol">Enter stock symbol</label>
	<input class="form-control  add-stock-symbol" id="add-stock-symbol" name="add-stock-symbol" type="text" placeholder="Enter stock symbol..." v-model="symbol" required>
	<button class="button  form-button  add-stock-submit" id="add-stock-submit" name="add-stock-submit" type="submit">Add</button>
</form>
</template>

<script>
import { INFORM, SUCCEED, WARN, ERR } from '../constants/messageSeverity' // eslint-disable-line no-unused-vars

export default {
	name: 'formAddStock',
	data: () => ({
		symbol: '',
		fetching: false
	}),
	methods: {
		/**
		 * Handle submission of the add-stock form.
		 */
		handleSubmit() {
			if (this.fetching) return // don't submit if we're fetching already

			const symbol = this.symbol.toUpperCase() // enforce uppercase
			const _finally = (() => { // Safari and Edge don't do .finally() yet, according to MDN.  :/  Neither does Node, for that matter.  When support is enough, use .finally() instead
				this.fetching = false
			})

			if (this.$root.stocks.find(stock => stock.symbol === symbol) !== undefined) {
				this.$root.addMessage(`🤑 You're already watching "${symbol}".`, WARN)

				return // exit early with a message
			}

			this.fetching = true

			this.$root.getStock(symbol)
				.then(response => {
					const { company, previous, price, logo } = response.body

					this.symbol = '' // resets the input value, too
					this.$root.addStock({ symbol, company, previous, price, logo })
					this.$root.addMessage(`😎 Success!  You're now watching "${symbol}".`, SUCCEED)


					_finally()
				})
				.catch(error => {
					this.$root.addMessage(`😢 Wah wah!  We couldn't find a stock with the symbol "${symbol}" in our data.`, ERR)

					console.error(error) // pass the error to developers

					_finally()
				})
		},
	},
}
</script>

<style>
/*form*/.add-stock {
	display: flex;
	width: var(--add-stock-form-width-xs);
	margin-top:    var(--padding-v-more);
	margin-bottom: var(--padding-v-more);
	margin-left:  auto;
	margin-right: auto;
	padding-left:  var(--padding-h-less);
	padding-right: var(--padding-h-less);
}
@media (min-width: 500px) {
	.add-stock {
		width: var(--add-stock-form-width-sm);
	}
}
/*input*/.add-stock-symbol {
	flex: 1 0 auto;
	margin-right: var(--padding-h-less);
}
/*button*/.add-stock-submit {
	flex: 0 1 6em;
	color: var(--white);
	text-transform: uppercase;
	background-color: var(--green);
	border-color: var(--gray);
}
@media (min-width: 500px) {
	/*button*/.add-stock-submit {
		flex: 0 1 10em;
	}
}
</style>
