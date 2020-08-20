<template>
	<view class="user-chat-bottom">
		<input type="text" placeholder="this input message" v-model="text" />
		<view class="icon iconfont icon-fabu" @tap="sendMsg"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {
			sendMsg() {
				this.$emit('sendMsg', this.text)
				this.text = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-chat-bottom {
		padding: 10upx 20upx;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		background: #FFFFFF;

		input {
			flex: 1;
			margin-right: 10upx;
			font-size: 35upx;
			padding: 8upx 15upx;
			border-radius: 20upx;
			background: #f7f7f7;
			// border: 1upx solid;
		}

		view {
			width: 120upx;
			text-align: center;
			// border: 1upx solid;
			font-size: 40upx;
		}
	}
</style>
