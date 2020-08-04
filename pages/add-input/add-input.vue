<template>
	<view>
		<!-- 发布页 -->
		<!-- 自定义navbar statusBar:不会订到手机屏幕的状态栏上 -->
		<uni-nav-bar class="navbar" :statusBar="true" @clickRight="submit" rightText="发布" left-icon="back" @clickLeft="back">
			<view class="navcon" @tap="changelook">
				{{yinsi}}
				<view class="icon iconfont icon-fanhui1">
				</view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="此处输入..." />
			</view>
		<!-- 上传多图 -->
		<upload-images @upload="uploadimg"></upload-images>
		<!-- 弹出公告 -->
		<uni-popup v-if="isShow" class="popupMessage" ref="popupMessage" type="center">
			<view class="gonggao">
				<image src="../../static/img/gonggao.png" mode="widthFix"></image>
				<view>1.涉及涩情/政治敏感信息</view>
				<view>2.涉及人身攻击</view>
				<view>3.联系方式泄露他人隐私</view>
				<view style="color: red;">一经核实直接封禁</view>
				<button type="default" @click="isShow=false">我知道了</button>
			</view>
		<!--	<uni-popup-message type="info" :message="message"> 
			</uni-popup-message> -->
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from '../../components/navbar/uni-nav-bar/uni-nav-bar.vue'
	import uploadImages from '../../components/common/upload-images.vue'
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '../../components/uni-popup/uni-popup-message.vue'
	let changelook = ['所有人可见', '仅好友可见', '仅自己可见']
	export default {
		data() {
			return {
				yinsi: '所有人可见',
				text:'',
				imglist:[], // 接收上传图片组件的数据
				message:'',
				isShow:true,
				isSave:false
			}
		},
		mounted(){
			this.$refs.popupMessage.open()
		},
		// 监听页面返回，缓存用户为填完的数据
		onBackPress(){
			// 用户无输入直接返回
			if(this.text==''&&this.imglist.length==0) return;
			// 有输入判断是否提示过保存,已提示过直接返回
			if(this.isSave) return; 
			this.save()
			return true
		},
		methods: {
			// 保存为草稿
			save(){
				uni.showModal({
					content:'是否保存为草稿',
					cancelText:'不保存',
					confirmText:'保存',
					success: (res) => {
						if(res.confirm){
							console.log('保存')
						}
						else{
							console.log('直接退出')
						}
						uni.navigateBack({
							delta:1
						})
						this.isSave = true
					}
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			submit() {
				
			},
			// 隐私设置
			changelook() {
				uni.showActionSheet({
					itemList: changelook,
					success: (res) => {
						this.yinsi = changelook[res.tapIndex]
					}
				});
			},
			uploadimg(ilist){
				// console.log('相册更新')
				this.imglist = ilist
			}
		},
		components: {
			uniNavBar,
			uploadImages,
			uniPopup,
			uniPopupMessage
		}
	}
</script>

<style lang="scss" scoped>
	.navbar{
		border-bottom: 8upx solid #BEBEBE;
		.navcon {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-right: 20upx;
		}
	}
	
	.uni-textarea{
		border: 1upx solid #EEEEEE;
	}
	
	.gonggao{
		width: 600upx;
		display: flex;
		flex-direction: column;
		// align-items: center;
		margin: 0 auto;
		font-size: 80upx;
		background: white;
		border-radius: 20upx;
		padding: 0 20upx;
		image{
			width: 50%;
			margin: 0 auto;
		}
		button{
			background: #FFE934;
			margin: 20upx 20upx;
			font-size: 35upx;
			width: 90%;
		}
		view{
			margin: 0 60upx;
			font-size: 40upx;
		}
	}
</style>
