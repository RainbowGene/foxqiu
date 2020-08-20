<template>
	<view class="other-login">
		<view class="u-ajc">
			<view class="icon iconfont icon-weixin"></view>
		</view>
		<view class="u-ajc">
			<view class="icon iconfont icon-qq"></view>
		</view>
		<view class="u-ajc">
			<view class="icon iconfont icon-weibo"></view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.other-login {
		padding: 20upx 80upx;
		display: flex;
		justify-content: space-around;
		align-items: center;

		&>view>view {
			width: 100upx;
			height: 100upx;
			line-height: 100upx;
			border-radius: 50%;
			font-size: 55upx;
			text-align: center;
			color: white;
		}

		.icon-qq {
			background: #2caefc;
		}

		.icon-weixin {
			background: #2bd19b;
		}

		.icon-weibo {
			background: #fc7729;
		}
	}
</style>
