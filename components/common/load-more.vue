<template>
	<view class="load-more">
		<text>{{loadtext}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			loadtext: String
		}
	}
</script>

<style lang="scss" scoped>
	.load-more {
		text-align: center;
		color: #aaaaaa;
		padding: 15upx;
	}
</style>
