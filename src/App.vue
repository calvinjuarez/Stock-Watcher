<template>
	<div id="app">
		<img src="./assets/logo.png">
		<Example msg="Pass props as attributes."/>
	</div>
</template>

<script>
import Example from './components/Example.vue'

export default {
	name: 'app',
	components: {
		Example
	}
}
</script>

<style>
:root {
	--white:      #fff;
	--gray-light: #ddd;
	--black:      #444; /* "re-mapped" for convenience */

	--font-droid: "Droid Serif";
	--font-serif: Cambria, Georgia, Times, serif;
	--font-emoji: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	--font-stack: var(--font-droid), var(--font-serif), var(--font-emoji);
}
#app {
	font-family: var(--font-stack);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
