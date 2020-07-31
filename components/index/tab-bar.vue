<template>
	<!-- tabbar:使用官方的 -->
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab">
			<block v-for="(item,index) in tabBars" :key="item.id">
				<view class="swiper-tab-list" @click="tabtap(index)" :class="{'active':tabIndex==index}">{{item.name}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array
		},
		data() {
			return {
				tabIndex: 0
			}
		},
		methods: {
			// 点击发送事件
			tabtap(index) {
				this.tabIndex = index;
				this.$emit("tabSel",index)
			}
		}
	}
</script>

<style lang="scss">
	.uni-tab-bar {
		margin-top: 10upx;

		.uni-swiper-tab {
			.swiper-tab-list {
				color: #969696;
				font-weight: bold;
			}

			.active {
				color: #343434;

				.swiper-tab-line {
					border-top: 6upx solid #FEDE33;
					border-bottom: 6upx solid #FEDE33;
					width: 70upx;
					margin: 0 auto;
					border-radius: 20upx;
				}
			}
		}
	}
</style>
