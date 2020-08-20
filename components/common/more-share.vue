<template>

	<!-- 分享 -->
	<view class="more-share-model" v-if="isShow" @tap="togle">
		<view class="more-share animate__animated animate__fadeInUp">
			<view class="more-share-title">
				分享到
			</view>
			<scroll-view scroll-x class="more-share-body">
				<block v-for="(item,index) in providerList" :key="index">
					<view class="more-share-item" :class="item.zclass" hover-class="more-share-hover" @tap.stop="share(item)">
						<view class="icon iconfont" :class="item.zicon"></view>
						<view>{{item.name}}</view>
					</view>
				</block>
				<!-- <view class="more-share-item item-wx" hover-class="more-share-hover">
					<view class="icon iconfont icon-weixin"></view>
					<view>微信</view>
				</view> -->
				<!-- <view class="more-share-item item-wb" hover-class="more-share-hover">
					<view class="icon iconfont icon-weibo"></view>
					<view>微博</view>
				</view> -->
				<!-- <view class="more-share-item item-qq" hover-class="more-share-hover">
					<view class="icon iconfont icon-qq"></view>
					<view>QQ</view>
				</view> -->
				<!-- <view class="more-share-item item-py" hover-class="more-share-hover">
					<view class="icon iconfont icon-chuangzuo"></view>
					<view>朋友圈</view>
				</view> -->
				<!-- <view class="more-share-item item-py" hover-class="more-share-hover">
					<view class="icon iconfont icon-chuangzuo"></view>
					<view>other</view>
				</view> -->
			</scroll-view>
			<view class="more-share-cancel" @tap.stop="togle">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShow: Boolean
		},
		data() {
			return {
				shareText: 'uni-app可以同时发布小程序、原生app、h5，邀你一起体验！',
				href: "https://uniapp.dcloud.io",
				image: '',
				shareType: 1, // 1 2 0 5 : 文字 图片 图文 小程序
				providerList: [{
					name: '微信好友',
					id: 'weixin',
					zicon: "icon-weixin",
					zclass: "item-wx",
					sort: 0
				}, {
					name: '朋友圈',
					id: 'weixin',
					zicon: "icon-chuangzuo",
					zclass: "item-py",
					type: 'WXSenceTimeline',
					sort: 1
				}, {
					name: '新浪微博',
					id: 'sinaweibo',
					zicon: "icon-weibo",
					zclass: "item-wb",
					sort: 2
				}, {
					name: 'QQ',
					id: 'qq',
					zicon: "icon-qq",
					zclass: "item-qq",
					sort: 3
				}]
			}
		},
		methods: {
			togle() {
				this.$emit('togle')
			},
			// share
			async share(e) {
				if (!this.shareText && (this.shareType === 1 || this.shareType === 0)) {
					uni.showModal({
						content: '分享内容不能为空',
						showCancel: false
					})
					return;
				}

				if (!this.image && (this.shareType === 2 || this.shareType === 0)) {
					uni.showModal({
						content: '分享图片不能为空',
						showCancel: false
					})
					return;
				}

				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel: false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel: false
						})
					},
					complete: function() {
						console.log('分享操作结束!')
					}
				}

				switch (this.shareType) {
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image :
							'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id: 'gh_33446d7f7a26',
							path: '/pages/tabBar/component/component',
							webUrl: 'https://uniapp.dcloud.io',
							type: 0
						};
						break;
					default:
						break;
				}

				if (shareOPtions.type === 0 && plus.os.name === 'iOS') { //如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if (shareOPtions.type === 1 && shareOPtions.provider === 'qq') { //如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
			compress() { //压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => { // 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if (file.size > 20480) { // 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content: '分享图片太大,需要请重新选择图片!',
										showCancel: false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content: '分享图片太大,需要请重新选择图片!',
							showCancel: false
						})
					});
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 分享样式
	.more-share-model {
		background: rgba(51, 51, 51, 0.49);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;

		.more-share {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 110;
			background: white;
			display: flex;
			flex-direction: column;
			align-items: center;

			.more-share-body {
				display: flex;
				white-space: nowrap;
				width: 100%;
				height: 200upx;
				line-height: 200upx;
				border: 1upx solid #EEEEEE;

				.more-share-hover {
					background: #eeeeee;
				}

				.more-share-item {
					width: 25%;
					display: inline-flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text-align: center;
					box-sizing: border-box;
					height: 100%;

					view:first-child {
						width: 100upx;
						height: 100upx;
						line-height: 100upx;
						text-align: center;
						font-size: 60upx;
						// border: 1px solid;
						border-radius: 50%;
					}

					view:last-child {
						color: grey;
					}

					.icon-weixin {
						color: #2AD198;
					}

					.icon-weibo {
						color: #EE5E5E;
					}

					.icon-qq {
						color: #4A73BA;
					}

					.icon-chuangzuo {
						color: #514D4C;
					}
				}
			}

			.more-share-title,
			.more-share-cancel {
				font-size: 32upx;
				padding: 15upx 0;
			}
		}
	}
</style>
