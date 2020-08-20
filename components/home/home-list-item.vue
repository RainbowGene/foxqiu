<template>
	<view class="list-item" @tap="navTo">
		<view>
			<view v-if="item.icon" class="iconfont" :style="'color:'+item.color" :class="item.icon"></view>{{item.name}}
		</view>
		<view>
			<view class="iconfont icon-fanhui2"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			navTo() {
				switch (this.item.type) {
					case "navigateTo":
						if (this.item.link) {
							uni.navigateTo({
								url: this.item.link
							})
						}
						break;
					case "switchTab":
						if (this.item.link) {
							uni.switchTab({
								url: this.item.link
							})
						}
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-item {
		margin: 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 0;

		view {
			display: flex;
			font-size: 35upx;
			line-height: 35upx;

			&>view:first-child {
				margin-right: 10upx;
			}
		}
	}
</style>
