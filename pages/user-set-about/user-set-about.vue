<template>
	<view class="about-body">
		<!-- 广告位 -->
		<view class="home-adv">
			<image src="../../static/img/mock/qiushilogo.png" mode="widthFix" lazy-load></image>
		</view>
		<!-- 版本号 -->
		<view class="about-version">
			version 1.0.1
		</view>
		<!-- 选项列 -->
		<block v-for="(item,index) in itemlist" :key="index">
			<home-list-item :item="item" :index="index"></home-list-item>
		</block>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	export default {
		components: {
			homeListItem
		},
		data() {
			return {
				itemlist: [{
						name: '新版本检测',
						icon: "",
						color: '',
						type: '',
						link: ''
					},
					{
						name: '仿嗅事百科用户协议',
						icon: "",
						color: '',
						type: '',
						link: ''
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.about-body {
		padding: 120upx 20upx;

		.home-adv {
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				border-radius: 30upx;
			}
		}

		.about-version {
			color: #BEBEBE;
			text-align: center;
			margin-top: 20upx;
		}
	}
</style>
