<template>
	<!-- 图文组件 -->
	<view class="pt-list">
		<view class="item-avatar">
			<view>
				<image :src="item.avatar" mode="widthFix" lazy-load></image>
				<text>{{item.username}}</text>
			</view>
			<view>
				<button type="default">
					<view v-if="!item.isgz" class="iconfont icon-add-sy"></view>
					<text>{{item.isgz?'已关注':'关注'}}</text>
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
				<view class="iconfont icon-xiaolian" :class="{'active':item.infonnum.index==1}"></view>
				<text>{{item.infonnum.dingnum}}</text>
				<view class="iconfont icon-kulian" :class="{'active':item.infonnum.index==2}"></view>
				<text>{{item.infonnum.cainum}}</text>
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
