<template>
<li class="message" :class="computedClasses">
	<small class="message-text">{{ message.text }}</small>
	<button class="button  message-dismiss" id="message-dismiss" title="Click to dismiss this message." v-on:click="dismiss()">&times;</button>
</li>
</template>

<script>
import { INFORM, SUCCEED, WARN, ERR } from '../constants/messageSeverity' // eslint-disable-line no-unused-vars

export default {
	name: 'message',
	props: {
		message: Object,
	},
	computed: {
		computedClasses: function() {
			return {
				// add type class
				'message-success' : this.message.severity === SUCCEED,
				'message-warning' : this.message.severity === WARN,
				'message-error'   : this.message.severity === ERR,
			}
		}
	},
	methods: {
		/**
		 * Allow dismissing message.
		 */
		dismiss() {
			this.$root.removeMessage(this.message.text)
		},
	},
}
</script>

<style>
:root {
	--message-dismiss-width:  2em;
}
.message {
	position: relative;
	display: block;
	max-width: 520px;
	margin-bottom: var(--padding-v-less);
	margin-left:  auto;
	margin-right: auto;
	padding-top:    var(--message-padding);
	padding-bottom: var(--message-padding);
	padding-left:   var(--message-padding);
	padding-right:  var(--message-padding);
	text-align: left;
	background-color: var(--white);
	border: var(--border-width) solid var(--border-color);
	border-radius: var(--message-border-radius);
}
	.message-text {
		display: inline-block;
		margin-right: var(--message-dismiss-width);
	}
	/*button*/.message-dismiss {
		position: absolute;
		top:    0;
		bottom: 0;
		right:  0;
		width: var(--message-dismiss-width);
		border-color: transparent;
	}
.message-success {
	background-color: var(--green-bg);
	border-color:     var(--green-border);
}
	.message-success .message-dismiss {
		color: var(--green-border);
	}
.message-warning {
	background-color: var(--yellow-bg);
	border-color:     var(--yellow-border);
}
	.message-warning .message-dismiss {
		color: var(--yellow-border);
	}
.message-error {
	background-color: var(--red-bg);
	border-color:     var(--red-border);
}
	.message-error .message-dismiss {
		color: var(--red-border);
	}
</style>
