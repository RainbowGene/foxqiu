<template>
	<view class="r-con animate__animated animate__fadeInLeft" @tap="opendetail">
		<view class="con-left">
			<image :src="item.imgurl" mode="widthFix"></image>
		</view>
		<view class="con-right">
			<view class="con-title">{{item.title}}</view>
			<view class="con-text">{{item.desc}}</view>
			<view class="con-bro">动态 {{item.dynamic}} 今日 {{item.browse}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		methods:{
			opendetail(){
				uni.navigateTo({
					url:'../../pages/topic-detail/topic-detail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.r-con {
		margin-top: 20upx;
		display: flex;
		align-items: center;
	
		.con-left {
			width: 30%;
	
			image {
				width: 100%;
				border-radius: 20upx;
			}
		}
	
		.con-right {
			flex: 1;
			padding-left: 20upx;
	
			view {
				margin-bottom: 10upx;
			}
	
			.con-title {
				font-size: 40upx;
			}
	
			.con-text {
				font-size: 36upx;
				color: #9e9e9e;
			}
	
			.con-bro {
				font-size: 36upx;
				color: #9e9e9e;
			}
		}
	}
</style>
