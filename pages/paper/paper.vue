<template>
	<view class="paper-con">
		<block v-for="(item,index) in friendList" :key="index">
			<view class="con-item">
				<view class="item-img">
					<image :src="item.avatar" mode="widthFix"></image>
				</view>
				<view class="item-con">
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
							{{item.msg}}
						</view>
						<view v-if="item.isdu">
							{{item.isdu.num}}
						</view>
						<view v-else></view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				friendList: [{
						avatar: '../../static/img/mock/22.jpg',
						username: 'JIA一勺',
						time: '13:58',
						msg: '赵丽颖《知否》一句话打脸,“歪比巴卜，阿巴阿巴”',
						isdu: {
							num: 2
						}
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						isdu: false
					}
				]
			}
		},
		methods: {

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
				padding: 0 20upx;
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
					}
				}

				.con-b {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.con-t-msg {
						flex: 1;
					}

					view:last-child {
						width: 60upx;
						text-align: center;
					}
				}
			}
		}
	}
</style>
