<template>
	<!-- 无内容 -->
	<view class="nothing animate__animated animate__fadeIn">
		<image src="~@/static/img/nodata.png" mode="widthFix"></image>
	</view>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.nothing {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffffff;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		image {
			width: 60%;
		}
	}
</style>
