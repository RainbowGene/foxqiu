<template>
	<!-- tabbar:使用官方的 -->
	<view v-if="tabBars" class="uni-tab-bar">
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
	import ptList from './pt-list.vue';
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number
		},
		methods: {
			tabtap(index) {
				this.$emit('selIndex', index)
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	// 这个高度等于视口高度 - tabbar 高度
</style>
