<template>
	<!-- 图文组件 -->
	<view class="pt-list animate__animated animate__backInUp" @tap="openDetail">
		<view class="item-avatar">
			<view>
				<image :src="item.avatar" mode="widthFix" lazy-load></image>
				<text>{{item.username}}</text>
			</view>
			<view>
				<button type="default" @click="attention(item)">
					<view v-if="!isguanzhu" class="iconfont icon-add-sy"></view>
					<text>{{isguanzhu?'已关注':'关注'}}</text>
				</button>
			</view>
		</view>
		<view class="list-title">{{item.title}}</view>
		<view class="list-cover">
			<image :src="item.cover" mode="widthFix" lazy-load></image>
			<template v-if="item.type=='video'">
				<view class="video-player iconfont icon-liulan"></view>
				<view class="video-info">{{item.playnum}} 播放 {{item.long}}</view>
			</template>
		</view>
		<view class="list-caozuo">
			<view class="left-icon">
				<view class="iconfont icon-xiaolian" @tap="taplike(1)" :class="{'active':infonnum.index==1}"></view>
				<text>{{infonnum.dingnum}}</text>
				<view class="iconfont icon-kulian" @tap="taplike(2)" :class="{'active':infonnum.index==2}"></view>
				<text>{{infonnum.cainum}}</text>
			</view>
			<view class="right-icon">
				<view class="iconfont icon-xiaoxi"></view>
				<text>{{item.commentnum}}</text>
				<view class="iconfont icon-forward"></view>
				<text>{{item.sharenum}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		data() {
			return {
				isguanzhu: this.item.isgz,
				infonnum: this.item.infonnum
			}
		},
		methods: {
			// 赞/踩
			taplike(num) {
				switch (this.infonnum.index) {
					case 0:
						if (num == 1) {
							this.infonnum.dingnum++
							this.infonnum.index = 1
						} else {
							this.infonnum.cainum++
							this.infonnum.index = 2
						}
						break;
					case 1:
						if (num == 2) {
							this.infonnum.dingnum--
							this.infonnum.cainum++
							this.infonnum.index = 2
						} else {
							this.infonnum.dingnum--
							this.infonnum.index = 0
						}
						break;
					case 2:
						if (num == 1) {
							this.infonnum.cainum--
							this.infonnum.dingnum++
							this.infonnum.index = 1
						} else {
							this.infonnum.cainum--
							this.infonnum.index = 0
						}
						break;
				}
			},
			// 关注
			attention() {
				if (!this.isguanzhu) {
					uni.showToast({
						title: '关注成功!'
					})
					this.isguanzhu = !this.isguanzhu
				} else {
					uni.showModal({
						content: '确认取关?',
						success: (res) => {
							if (res.confirm) {
								this.isguanzhu = !this.isguanzhu
								uni.showToast({
									title: '取关成功!'
								})
							}
						}
					})
				}
			},
			// 进入详情页
			openDetail() {
				uni.navigateTo({
					// 将对象转为字符串
					url: "../../pages/detail/detail?detailData=" + JSON.stringify(this.item)
				})
			}
		}
	}
</script>

<style lang="scss">
	.pt-list {
		display: flex;
		flex-direction: column;
		padding: 20upx;
		border-bottom: 2upx solid grey;

		.item-avatar {
			display: flex;
			align-items: center;
			justify-content: space-between;

			&>view:first-child {
				display: flex;
				align-items: center;
				font-size: 36upx;
				color: #999999;
			}

			&>view:last-child button {
				display: flex;
				align-items: center;
				font-size: 36upx;
				height: 80upx;
				background: #eee;
			}

			image {
				width: 90upx;
				border-radius: 50%;
			}

			text {
				margin: 0 20upx;
			}
		}

		.list-title {
			margin: 10upx 0;
			font-size: 48upx;
		}

		.list-cover {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFFFFF;

			image {
				border-radius: 20upx;
				width: 100%;
			}

			.video-player {
				font-size: 120upx;
				position: absolute;
			}

			.video-info {
				position: absolute;
				right: 20upx;
				bottom: 20upx;
				background: grey;
				border-radius: 30upx;
				padding: 0 20upx;
			}
		}

		.list-caozuo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #999999;
			margin-top: 15upx;

			.left-icon {
				display: flex;
				align-items: center;
			}

			.right-icon {
				display: flex;
				align-items: center;
			}

			.iconfont {
				margin: 0 10upx;
			}

			.active,
			.active+text {
				color: #C5F61C;
			}
		}
	}
</style>
