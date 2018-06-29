<template>
<aside class="messages">
	<ul v-if="messages">
		<Message v-for="(message, i) in messages" :key="i" :message="message"/>
	</ul>
</aside>
</template>

<script>
export default {
	name: 'messages',
	props: {
		messages: Array,
	},
}
</script>

<style></style>
