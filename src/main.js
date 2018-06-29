/**
 * Stock Watcher Entry Point - main.js
 */


import Vue         from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'


Vue.use(VueResource)
Vue.config.productionTip = false


new Vue({
	el: '#app',
	render: h => h(App),

	data: {
		stocks: [],
	},
	methods: {
		/**
		 * Generic API request, so I don't have to keep repeating the request URL.
		 *
		 * @param  {string}  path            The request path.
		 * @param  {string}  [method='GET']  The request method; currently only accepts 'GET'.
		 * @returns  {Promise}  Promise resolving with the request response on success.
		 */
		request(path, method='GET') {
			if (method === 'GET')
				return this.$http.get(`https://api.iextrading.com/1.0/stock/${path}`)
		},
		/**
		 * Get a stock from the API given the stock symbol.
		 *
		 * @param  {string}  symbol  The stock's symbol (e.g. 'GOOG' or 'AAPL').
		 * @returns  {Promise}  Promise resolving with the request response on success.
		 */
		getStock(symbol) {
			return this.request(`${symbol.toLowerCase()}/batch?types=company,previous,price,logo`)
		},

		/**
		 * Add a stock object to the store.
		 *
		 * @param  {Object}  stock           The stock object.
		 * @param  {string}  stock.symbol    The stock's symbol.
		 * @param  {Object}  stock.company   Data on the company, including it's full name.
		 *                                   @see {@link https://iextrading.com/developer/docs/#company}
		 * @param  {Object}  stock.previous  Data on the previous day.
		 *                                   @see {@link https://iextrading.com/developer/docs/#previous}
		 * @param  {number}  stock.price     The current stock price.
		 *                                   @see {@link https://iextrading.com/developer/docs/#price}
		 * @param  {string}  stock.logo      A URL pointing to the company's logo.
		 *                                   @see {@link https://iextrading.com/developer/docs/#logo}
		 */
		addStock(stock) {
			console.group('Adding stock: ' + stock.symbol.toUpperCase())
			console.dir(stock)
			this.stocks.push(stock)
			console.groupEnd()
		},
		/**
		 * Remove a stock with a given symbol from the store.  Continues without output if the symbol
		 * did not exist.
		 *
		 * @param  {string}  symbol  The stock symbol to remove.
		 */
		removeStock(symbol) {
			console.group('Removing stock: ' + symbol.toUpperCase())
			this.stocks = this.stocks.filter(stock => stock.symbol !== symbol)
			console.groupEnd()
		},
	},
})
