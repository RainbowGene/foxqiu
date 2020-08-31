<template>
	<view class="user-space-head u-ajc">
		<image :src="userinfo.bgimg" mode="widthFix" lazy-load></image>
		<view class="head-info">
			<image :src="userinfo.userpic" mode="widthFix" lazy-load></image>
			<view>{{userinfo.username}}
				<tag-sex :sex="userinfo.sex" :age="userinfo.age"></tag-sex>
			</view>
			<view class="iconfont icon-add-sy head-btn u-ajc" @tap="changeGz" :class="userinfo.isgz?'head-btn-dis':''">{{userinfo.isgz?'取关':'关注'}}</view>
		</view>
	</view>
</template>

<script>
	import tagSex from '../common/tag-sex.vue'
	export default {
		components:{
			tagSex
		},
		props:{
			userinfo:Object
		},
		data() {
			return {
				isgz: this.userinfo.isgz
			}
		},
		methods:{
			changeGz(){
				if (!this.userinfo.isgz) {
					uni.showToast({
						title: '关注成功！'
					})
					return this.userinfo.isgz = !this.userinfo.isgz
				}
				uni.showModal({
					content: '确认取消关注？',
					success: (data) => {
						if (data.confirm) {
							uni.showToast({
								title: '取关成功！'
							})
							this.userinfo.isgz = !this.userinfo.isgz
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-space-head {
		position: relative;
		// height: 500upx;
		// overflow: hidden;

		image {
			width: 100%;
		}

		.head-info {
			position: absolute;
			// top: 150upx;
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				margin-top: 30upx;
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
			}

			view:first-of-type {
				margin: 10upx 0;
				font-size: 30upx;
				color: white;
				font-weight: bold;
				text-shadow: 2upx 2upx 10upx #333333;
			}

			view:last-child {
				font-weight: bold;
			}

			.head-btn {
				height: 60upx;
				line-height: 60upx;
				box-sizing: border-box;
				background: #FFE933;
				color: #333333;
				border: 1upx solid #FFE933;
				padding: 0 15upx;
				border-radius: 10upx;
				font-size: 28upx;
			}

			.head-btn-dis {
				background: none;
				color: #FFFFFF;
				border: 1upx solid #FFE933;
			}
		}
	}
</style>
