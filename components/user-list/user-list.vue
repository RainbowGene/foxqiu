<template>
	<view class="buddy-item animate__animated animate__backInLeft animate__fast">
		<view class="item-l">
			<image :src="item.avatar" mode="widthFix"></image>
		</view>
		<view class="item-c">
			<view class="c-name">
				{{item.name}}
			</view>
			<tag-sex :sex="item.sex" :age="item.age"></tag-sex>
		</view>
		<view class="item-r">
			<view @tap="selitem(index)" class="icon iconfont" :class="item.isgz?'active  icon-xuanze1':'icon-add-sy noactive'"></view>
		</view>
	</view>
</template>

<script>
	import tagSex from '../common/tag-sex.vue'
	export default {
		components: {
			tagSex
		},
		props: {
			item: Object,
			index: Number
		}

	}
</script>

<style lang="scss" scoped>
	.buddy-item {
		padding: 10upx 20upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid #eeeeee;

		.item-l {
			width: 20%;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}

		.item-c {
			flex: 1;

			.c-name {
				font-size: 40upx;
			}
		}

		.item-r {
			text-align: center;
			width: 20%;

			view {
				color: #BEBEBE;

				&.active {
					color: grey;
				}

				&.noactive {
					color: #F87918;
				}
			}
		}
	}
</style>
