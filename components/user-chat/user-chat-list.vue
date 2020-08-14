<template>
	<view class="user-chat-item">
		<view v-if="item.gstime" class="chat-time">{{item.gstime}}</view>
		<view class="chat-list" :class="item.isme?'user-chat-me':''">
			<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="chat-msg">
				<!-- 文本 -->
				<text v-if="item.type==0">{{item.data}}</text>
				<!-- 图片 -->
				<image v-if="item.type==1" :src="item.data" mode="widthFix" lazy-load></image>
			</view>
			<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
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
	.chat-time {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50upx 0;
		color: #a2a2a2;
		font-size: 24upx;
	}

	.chat-list {
		padding: 10upx;
		display: flex;

		image {
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
			flex-shrink: 0;
		}

		.chat-msg {
			position: relative;
			background: #F4F4F4;
			padding: 15upx;
			margin-left: 20upx;
			margin-right: 100upx;
			border-radius: 20upx;
			display: flex;
			align-items: center;

			&:after {
				position: absolute;
				left: -30upx;
				top: 30upx;
				right: 0;
				content: '';
				width: 0;
				height: 0;
				border: 16upx solid #F4F4F4;
				border-color: transparent #F4F4F4 transparent transparent;
			}

			image {
				max-width: 150upx;
				max-height: 200upx;
			}
		}
	}

	.user-chat-me {
		justify-content: flex-end;

		.chat-msg {
			margin-right: 20upx;
			margin-left: 100upx;

			&:after {
				left: auto;
				right: -30upx;
				border-color: transparent #F4F4F4 transparent transparent;
			}
		}
	}
</style>
