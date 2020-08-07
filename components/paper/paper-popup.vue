<template>
	<view>
		<!-- 操作菜单 -->
		<!-- caidanmengban -->
		<view class="paper-mask" v-show="czshow" @tap="hidepop"></view>
		<view v-show="czshow" class="paper-popup">
			<view class="pop-t iconfont icon-soushuo" hover-class="pop-t-h" @tap="addfriend">
				<view>加糗友</view>
			</view>
			<view class="pop-b iconfont icon-qingchu" hover-class="pop-t-h" @tap="clear">
				<view>清除已读</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			czshow: Boolean
		},
		methods: {
			addfriend() {
				this.$emit('addfriend')
			},
			clear() {
				this.$emit('clear')
			},
			hidepop() {
				this.$emit('hidepop')
			},
		}
	}
</script>

<style lang="scss" scoped>
	// mengban
	.paper-mask {
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;
		z-index: 8;
	}

	.paper-popup {
		position: fixed;
		margin-right: 5upx;
		width: 35%;
		z-index: 9;
		right: 0;
		top: var(--window-top)+5upx;
		background: #ffffff;
		box-shadow: 1upx 1upx 5upx 5upx #cccccc;

		view>view {
			font-size: 40upx;
		}

		.pop-t {
			font-size: 40upx;
			display: flex;
			align-items: center;
			padding: 10upx;
		}

		.pop-b {
			font-size: 40upx;
			display: flex;
			align-items: center;
			padding: 10upx;
		}

		.pop-t-h {
			background: #eeeeee;
		}
	}
</style>
