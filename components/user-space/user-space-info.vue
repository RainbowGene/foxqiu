<template>
	<view class="user-space-userinfo">
		<view class="user-space-userinfo-item">
			<view>账号信息</view>
			<view>糗龄:{{getRegTime}}</view>
			<view>糗百ID:{{userinfo.id}}</view>
		</view>
		<view class="user-space-userinfo-item">
			<view>个人信息</view>
			<view>星座:{{getCon}}</view>
			<view>职业:{{userinfo.job}}</view>
			<view>故乡:{{userinfo.city}}</view>
			<view>情感:{{userinfo.qg}}</view>
		</view>
	</view>
</template>

<script>
	import {
		getConstellation,
		getTimeDiff
	} from "../../common/js/time.js"
	export default {
		props: {
			userinfo: Object
		},
		computed: {
			getRegTime() {
				return getTimeDiff(this.userinfo.regtime)
			},
			getCon() {
				return getConstellation(this.userinfo.birthday)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.user-space-userinfo {
		padding: 0 60upx;

		.user-space-userinfo-item {
			padding: 20upx 0;
			border-bottom: 1px solid #eeeeee;

			view {
				color: #aaaaaa;
			}

			view:first-child {
				color: #333333;
				font-size: 35upx;
				padding: 15upx 0;
			}
		}
	}
</style>
