<template>
	<view class="uni-comment-list" :class="item.fid>0?'u-comment-list-child':''">
		<view class="uni-comment-face">
			<image :src="item.userpic" mode="widthFix"></image>
		</view>
		<view class="uni-comment-body">
			<view class="uni-comment-top">
				<text>{{item.username}}</text>
			</view>
			<view class="uni-comment-content">
				{{item.data}}
			</view>
			<view class="uni-comment-date">
				<view>{{item.time}}</view>
				<!-- <view class="uni-comment-replay-btn">
					5回复
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
	.u-comment-list-child {
		padding: 10upx 15upx;
		background: #F4F4F4;
		box-sizing: border-box;
		width: auto;
		margin: 0;
		margin-left: 70upx;
	}
</style>
