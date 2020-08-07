<template>
	<view>
		<!--  -->
		<view class="chat-list">

		</view>
		<!--  -->
		<user-chat-bottom @sendMsg="sendMsg"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	export default {
		components: {
			userChatBottom
		},
		data() {
			return {

			}
		},
		methods: {
			sendMsg(msg) {
				if (msg == '') return;
				console.log(msg)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
