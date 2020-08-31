<template>

	<view class="my-login-body" @tap="toUser">
		<view class="left">
			<image :src="userObj.userpic" mode="widthFix"></image>
		</view>
		<view class="conter">
			<view class="title">
				{{userObj.username}}
			</view>
			<view class="data">
				总访客 {{userObj.totalnum}} 今日 {{userObj.todaynum}}
			</view>
		</view>
		<view class="right">
			<view class="iconfont icon-fanhui2"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userObj: Object
		},
		methods: {
			toUser() {
				uni.navigateTo({
					url: "../../user-space/user-space"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 已登录的样式
	.my-login-body {
		padding: 20upx 50upx;
		display: flex;
		align-items: center;

		.left {
			width: 20%;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}

		.conter {
			flex: 1;
			padding: 0 10upx;

			.title {
				font-size: 40upx;
			}

			.data {
				color: #bbbbbb;
			}
		}
	}
</style>
