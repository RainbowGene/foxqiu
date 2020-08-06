<template>
	<!-- 热门分类 -->
	<view class="topic-cate">
		<view class="cate-title">
			<view>热门分类</view>
			<view @tap="navto">更多<view class="iconfont icon-fanhui2"></view>
			</view>
		</view>
		<view class="cate-con">
			<block v-for="(item,index) in category" :key="index">
				<view>{{item.catename}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			category:Array
		},
		methods:{
			navto(){
				uni.navigateTo({
					url:'../../pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topic-cate {
		padding: 20upx;
		border-top: 4upx solid #EEEEEE;
		border-bottom: 4upx solid #EEEEEE;
	
		.cate-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
	
			view:first-child {
				font-size: 40upx;
			}
	
			view:last-child {
				display: flex;
				align-items: center;
				color: #333333;
				font-size: 32upx;
	
				view:last-child {
					margin-top: 2upx;
				}
			}
		}
	
		.cate-con {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 20upx 0;
	
			view {
				font-size: 35upx;
				background: #EEEEEE;
				color: #9e9e9e;
				border-radius: 10upx;
				padding: 0 20upx;
			}
		}
	}
</style>
