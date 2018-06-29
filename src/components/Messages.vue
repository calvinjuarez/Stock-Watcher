<template>
<aside class="messages">
	<ul class="messages-list" v-if="messages">
		<template v-for="(message, i) in messages">
		<Message :key="i" :message="message"/>
		</template>
	</ul>
</aside>
</template>

<script>
import Message from './Message.vue'

export default {
	name: 'messages',
	props: {
		messages: Array,
	},
	components: {
		Message,
	},
}
</script>

<style>
.messages {
	margin-left:  var(--padding-h-less);
	margin-right: var(--padding-h-less);
}
@media (min-width: 700px) {
	.messages {
		margin-left:  var(--padding-h-more);
		margin-right: var(--padding-h-more);
	}
}
.messages-list {
	list-style-type: none;
	display: block;
	margin: 0;
	padding: 0;
}
</style>
