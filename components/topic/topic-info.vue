<template>
	<!-- 话题介绍组件 -->
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.imgurl" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="info-t">
				<image :src="topicInfo.imgurl" mode="widthFix" lazy-load></image>
				<view>
					{{topicInfo.title}}
				</view>
			</view>
			<view class="info-c">
				<view>动态 {{topicInfo.dtnum}}</view>
				<view>今日 {{topicInfo.today}}</view>
			</view>
			<view class="info-b">
				{{topicInfo.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			topicInfo: Object
		}
	}
</script>

<style lang="scss" scoped>
	.topic-bg {
		width: 100%;
		height: 400upx;
		position: relative;
		overflow: hidden;

		image {
			position: absolute;
			width: 100%;
			filter: blur(10px);
		}
	}

	.topic-info {
		position: relative;
		padding: 0 25upx;

		.info-t {
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				width: 250upx;
				height: 250upx;
				border-radius: 20upx;
				position: absolute;
				top: -125upx;
				left: 30upx;
			}

			view {
				font-size: 35upx;
				margin-left: 280upx;
				margin-top: 10upx;
				flex: 1;
			}
		}

		.info-c {
			margin-top: 60upx;
			display: flex;
			align-items: center;

			view {
				color: #CDCDCD;
			}
		}

		.info-b {
			color: #A3A3A3;
			font-size: 35upx;
			padding-bottom: 10upx;
		}
	}
</style>
