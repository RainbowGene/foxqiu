<template>
	<!-- 好友通讯 item -->
	<view class="con-item animate__animated animate__fadeInLeft">
		<view class="item-img">
			<image :src="item.avatar" mode="widthFix"></image>
		</view>
		<view class="item-con" @tap="openChat">
			<view class="con-t">
				<view class="con-t-name">
					{{item.username}}
				</view>
				<view class="con-t-time">
					{{item.time}}
				</view>
			</view>
			<view class="con-b">
				<view class="con-t-msg">
					{{item.msg | maxstr}}
				</view>
				<view v-if="item.num>0" class="isdu">
					{{item.num}}
				</view>
				<view v-else></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		filters: {
			maxstr(str) {
				return str.length <= 16 ? str : (str.slice(0, 15) + '...')
			}
		},
		methods: {
			openChat() {
				uni.navigateTo({
					url: "../../pages/user-chat/user-chat"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paper-con {
		padding: 20upx;
		display: flex;
		flex-direction: column;

		.con-item {
			display: flex;
			margin: 10upx 0;
			border-bottom: 2upx solid #EEEEEE;

			.item-img {
				width: 20%;

				image {
					width: 100%;
				}
			}

			.item-con {
				padding: 10upx 20upx 0 20upx;
				flex: 1;

				.con-t {
					display: flex;
					justify-content: space-between;
					align-items: center;

					view:first-child {
						font-size: 40upx;
						font-weight: bold;
					}

					view:last-child {
						width: 60upx;
						color: #9e9e9e;
					}
				}

				.con-b {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.con-t-msg {
						flex: 1;
						padding-top: 12upx;
						color: #9e9e9e;
					}

					.isdu {
						width: 50upx;
						height: 50upx;
						line-height: 50upx;
						text-align: center;
						border-radius: 50%;
						background: red;
						color: white;
					}
				}
			}
		}
	}
</style>
