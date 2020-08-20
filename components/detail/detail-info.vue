<template>
	<view class="common-list animate__animated animate__fadeInLeft">
		<!-- 左侧头像 -->
		<view class="list-avatar">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<!-- 右侧内容 -->
		<view class="list-content">
			<view class="con-head">
				<view class="head-left">
					<view class="username">{{item.username}}</view>
					<view class="age" :class="item.sex==0?'red':'lan'">
						<view :class="item.sex==0?'icon-nv red':'icon-nan lan'" class="icon iconfont"></view>
						<view>{{item.age}}</view>
					</view>
				</view>
				<view class="head-right">
					<button type="default" @click="attention">
						<view :class="isgz?'':'icon-add-sy'" class="icon iconfont"></view>
						<view>{{isgz?'已关注':'关注'}}</view>
					</button>
					<!-- <view class="icon iconfont icon-guanbi1"></view> -->
				</view>
			</view>
			<view v-if="item.time" class="head-right-time">
				{{item.time}}
			</view>
			<view class="con-text">
				<view class="txt">
					{{item.comment}}
				</view>
			</view>
			<!-- 一般图片,可能为一张或者多张 -->
			<block v-for="(pic,index) in item.moreCover" :key="index">
				<view v-if="!item.share&&!item.video" class="con-video">
					<image :src="pic" mode="widthFix" lazy-load @tap="imgdetail(index)"></image>
				</view>
			</block>
			<!-- 一般视频 -->
			<view v-if="item.video" class="con-video">
				<image :src="item.cover" mode="widthFix" lazy-load></image>
				<view class="add icon icon-add-sy"></view>
				<view class="desc">Design</view>
				<view class="btn icon iconfont icon-liulan"></view>
				<view class="player">{{item.video.looknum}} 次播放 {{item.video.long}}</view>
				<view class="year">2019</view>
			</view>
			<!-- 转发动态样式 -->
			<view v-if="item.share" class="con-zf">
				<image :src="item.share.sharepic" mode="widthFix"></image>
				<view class="text">{{item.share.title}}
				</view>
			</view>
			<!-- 底栏 -->
			<view class="con-footer">
				<view class="foot-l">
					<view>{{item.address}}</view>
				</view>
				<view class="foot-r">
					<view class="icon iconfont icon-forward">{{item.sharenum}}</view>
					<view class="icon iconfont icon-xiaoxi">{{item.commentnum}}</view>
					<view class="icon iconfont icon-zan1">{{item.zannum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				isgz: this.item.isgz
			}
		},
		methods: {
			attention() {
				if (!this.isgz) {
					uni.showToast({
						title: '关注成功!'
					})
					this.isgz = !this.isgz
				} else {
					uni.showModal({
						content: '确认取关?',
						success: (res) => {
							if (res.confirm) {
								this.isgz = !this.isgz
								uni.showToast({
									title: '取关成功!'
								})
							}
						}
					})
				}
			},
			// 预览图片（图组）
			imgdetail(index) {
				uni.previewImage({
					current: index,
					urls: this.item.moreCover
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/common-list.scss";

	// 重写部分样式
	.common-list {
		border-bottom: 4upx solid #EEEEEE;

		.head-right-time {
			font-size: 16upx;
			color: #CCCCCC;
		}
	}
</style>
