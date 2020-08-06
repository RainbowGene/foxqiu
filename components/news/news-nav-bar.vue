<template>
	<!-- 自定义导航栏 -->
	<view>
		<uni-nav-bar :fixed="true" class="navbar" :border="false" :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="center">
				<block v-for="(item,index) in tabBars" :key="item.id">
					<view :class="{'active':tabindex==index}" @tap="selTab(index)">
						{{item.name}}
						<view v-if="tabindex==index" class="tab_line"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont icon-bi"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '../../components/navbar/uni-nav-bar/uni-nav-bar.vue'
	export default {
		props: {
			tabBars: Array,
			tabindex: Number
		},
		methods: {
			// 切换tab栏
			selTab(num) {
				//this.tabindex = num
				this.$emit('selTab', num)
			},
			// 打开发布页
			openAdd() {
				uni.navigateTo({
					url: '../../pages/add-input/add-input'
				})
			}
		},
		components: {
			uniNavBar
		}
	}
</script>

<style lang="scss" scoped>
	// 导航条样式
	.navbar {
		.nav-left {
			margin-left: 32upx;

			view {
				color: #FF9619;
				font-size: 40upx;
			}
		}

		.nav-right {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			view {
				font-size: 40upx;
			}
		}

		.center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: -20upx;

			view {
				font-size: 35upx;
				padding: 0 15upx;
				font-weight: bold;
				color: #969696;
				display: flex;
				flex-direction: column;
				position: relative;
			}

			.active {
				color: black !important;

				.tab_line {
					position: absolute;
					bottom: 0;
					right: 0;
					left: 0;
					margin: 0 15upx;
					border-bottom: 4upx solid #FF9619;
				}
			}
		}
	}
</style>
