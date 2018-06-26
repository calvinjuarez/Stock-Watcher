<template>
<pre class="text-left">{{ stock.symbol }}
{{ stock.company }}</pre>
</template>

<script>
export default {
	name: 'stock',
	props: {
		stock: Object,
	},
}
</script>

<style></style>
