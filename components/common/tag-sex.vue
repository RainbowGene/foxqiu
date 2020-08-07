<template>
	<!-- tag-sex-age -->
	<view class="c-sex">
		<view class="sex-icon iconfont" :class="sex?'icon-nan bg-lan':'icon-nv bg-nv'">{{age}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			sex: Number,
			age: Number
		}
	}
</script>

<style lang="scss" scoped>
	.c-sex {
		display: inline-block;
		// border-radius: 25%;
		// border-radius: 20upx/50%;
		// padding: 0 10upx;

		.bg-lan {
			background: #7aa6e9;
			border-radius: 20upx/50%;
			padding: 0 10upx;
		}

		.bg-nv {
			background: pink;
			border-radius: 20upx/50%;
			padding: 0 10upx;
		}

		&>view {
			font-size: 10upx;
			color: white;
		}
	}
</style>
