<template>
	<view class="common-list animate__animated animate__fadeInLeft">
		<!-- 左侧头像 -->
		<view class="list-avatar">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<!-- 右侧内容 -->
		<view class="list-content">
			<view class="con-head">
				<view class="head-left">
					<view class="username">{{item.username}}</view>
					<view class="age" :class="item.sex==0?'red':'lan'">
						<view :class="item.sex==0?'icon-nv red':'icon-nan lan'" class="icon iconfont"></view>
						<view>{{item.age}}</view>
					</view>
				</view>
				<view class="head-right">
					<button type="default" @click="attention">
						<view :class="isgz?'':'icon-add-sy'" class="icon iconfont"></view>
						<view>{{isgz?'已关注':'关注'}}</view>
					</button>
					<view class="icon iconfont icon-guanbi1"></view>
				</view>
			</view>
			<view class="con-text">
				<view class="txt">
					{{item.comment}}
				</view>
			</view>
			<!-- 一般图片 -->
			<view v-if="!item.share&&!item.video" class="con-video">
				<image :src="item.cover" mode="widthFix" lazy-load></image>
			</view>
			<!-- 一般视频 -->
			<view v-if="item.video" class="con-video">
				<image :src="item.cover" mode="widthFix" lazy-load></image>
				<view class="add icon icon-add-sy"></view>
				<view class="desc">Design</view>
				<view class="btn icon iconfont icon-liulan"></view>
				<view class="player">{{item.video.looknum}} 次播放 {{item.video.long}}</view>
				<view class="year">2019</view>
			</view>
			<!-- 转发动态样式 -->
			<view v-if="item.share" class="con-zf">
				<image :src="item.share.sharepic" mode="widthFix"></image>
				<view class="text">{{item.share.title}}
				</view>
			</view>
			<!-- 底栏 -->
			<view class="con-footer">
				<view class="foot-l">
					<view>{{item.address}}</view>
				</view>
				<view class="foot-r">
					<view class="icon iconfont icon-forward">{{item.sharenum}}</view>
					<view class="icon iconfont icon-xiaoxi">{{item.commentnum}}</view>
					<view class="icon iconfont icon-zan1">{{item.zannum}}</view>
				</view>
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
		data(){
			return {
				isgz:this.item.isgz
			}
		},
		methods:{
			attention() {
				if (!this.isgz) {
					uni.showToast({
						title: '关注成功!'
					})
					this.isgz = !this.isgz
				} else {
					uni.showModal({
						content: '确认取关?',
						success: (res) => {
							if (res.confirm) {
								this.isgz = !this.isgz
								uni.showToast({
									title: '取关成功!'
								})
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 列表样式
	.common-list {
		display: flex;
		// margin: 30upx;
		padding: 30upx;
		border-bottom: 16upx solid #EEEEEE;

		.list-avatar {
			width: 20%;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}

		.list-content {
			width: 80%;
			padding-left: 20upx;

			.con-head {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.head-left {
					display: flex;
					align-items: center;

					.username {
						color: grey;
						font-size: 35upx;
					}

					.age {
						display: flex;
						border-radius: 50%;
						padding: 0 5upx;
						margin-left: 10upx;

						view {
							font-size: 4upx;
						}

						&.lan {
							background: yellow;
						}

						&.red {
							background: pink;
						}
					}
				}

				.head-right {
					display: flex;

					button {
						display: flex;
						align-items: center;
						margin-right: 10upx;

						.icon {
							display: flex;
							justify-content: center;
							margin-right: 10upx;
						}
					}
				}
			}

			.con-text {
				margin-top: 10upx;

				view {
					font-size: 35upx;
				}
			}

			.con-video {
				margin-top: 10upx;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 100%;
					min-height: 400upx;
					border-radius: 20upx;
				}

				view {
					position: absolute;
					color: white;

					&.add {
						left: 20upx;
						top: 20upx;
					}

					&.year {
						bottom: 20upx;
						left: 20upx;
					}

					&.desc {
						right: 20upx;
						top: 20upx;
					}

					&.btn {
						font-size: 120upx;
						// opacity: 0.5;
					}

					&.player {
						right: 20upx;
						bottom: 20upx;
					}
				}
			}

			.con-zf {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #EEEEEE;
				border-radius: 20upx;
				margin: 10upx 0;

				// padding: 10upx;
				image {
					width: 200upx;
					height: 150upx;
					margin: 10upx;
					border-radius: 10upx;
				}

				view {
					flex: 1;
					font-size: 15upx;
				}
			}

			.con-footer {
				margin-top: 10upx;
				display: flex;
				justify-content: space-between;
				color: grey;

				.foot-l {}

				.foot-r {
					display: flex;
					align-items: center;

					view {
						font-size: 30upx;
						margin-right: 10upx;
					}
				}
			}
		}
	}
</style>
