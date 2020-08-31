<template>
	<view class="home-data">
		<block v-for="(item,index) in datalist" :key="index">
			<view>
				<view>{{item.num}}</view>
				<view>{{item.name}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			datalist:Array
		}
	}
</script>

<style lang="scss" scoped>
	.home-data {
		display: flex;
		padding: 30upx 120upx;
		align-items: center;
		justify-content: space-between;
		text-align: center;
	
		&>view>view:first-child {
			font-size: 40upx;
		}
	
		&>view>view:last-child {
			color: #989898;
		}
	}
</style>
