/**
 * Stock Watcher Entry Point - main.js
 */

import Vue         from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'


let store = {
	stocks: [],
	addStock(stock) {
		console.group('Adding stock:')
		console.dir(stock)
		this.stocks.push(stock)
		console.groupEnd()
	},
	removeStock(symbol) {
		this.stocks = this.stocks.filter(stock => stock.symbol !== symbol)
	},
}


Vue.use(VueResource)
Vue.config.productionTip = false


new Vue({
	el: '#app',
	render: h => h(App),
	data: store,
})
