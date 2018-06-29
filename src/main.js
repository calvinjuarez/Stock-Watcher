/**
 * Stock Watcher Entry Point - main.js
 */


import Vue         from 'vue'
import VueResource from 'vue-resource'

import { INFORM, SUCCEED, WARN, ERR } from './constants/messageSeverity' // eslint-disable-line no-unused-vars

import App from './App.vue'


Vue.use(VueResource)
Vue.config.productionTip = false


new Vue({
	el: '#app',
	render: h => h(App),

	data: {
		stocks: [],
		messages: [],
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
			console.group(`Adding stock with symbol: ${stock.symbol.toUpperCase()}`)
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
			const previousStocksLength = this.stocks.length

			symbol = symbol.toUpperCase() // enforce uppercase

			console.group(`Removing stock with symbol: ${symbol}`)

			this.stocks = this.stocks.filter(stock => stock.symbol.toUpperCase() !== symbol) // .toUpperCase makes the matching case-insensitive

			if (this.stocks.length === previousStocksLength)
				console.warn('No stock was removed.')

			console.groupEnd()
		},

		/**
		 * Add a user-facing message to the messages output.
		 *
		 * TODO: Allow passing an object instead of separate arguments.
		 *
		 * @param  {string}  text                 The text of the message to add.
		 * @param  {string}  [severity='INFORM']  One of 'SUCCEED', 'INFORM', 'WARN', or 'ERR'.
		 *                                        Corresponding constants are provided in
		 *                                        constants/messageSeverity.js for convenience.
		 */
		addMessage(text, severity=INFORM) {
			console.group(`Adding message with text: "${text}"`)
			console.log(`Severity: ${severity}`)

			this.messages.push({ severity, text })

			console.groupEnd()
		},
		/**
		 * Remove a user-facing message to the messages output.
		 *
		 * TODO: Allow passing an object and just pull text out of it.
		 * TODO: Allow passing the index, but only as a number (not a quoted number, since '0' is a
		 * valid---though likely unhelpful---user message).
		 *
		 * @param  {string}  text  The text of the message to remove.
		 */
		removeMessage(text) {
			console.group(`Attempting to remove message with text: "${text}"`)

			const previousMessagesLength = this.messages.length

			this.messages = this.messages.filter(message => text !== message.text)

			if (this.messages.length === previousMessagesLength)
				console.warn('No message was removed.')

			console.groupEnd()
		},

	},
})
