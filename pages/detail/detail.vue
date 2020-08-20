<template>
	<view id="cview">
		<detail-info :item="detail"></detail-info>

		<!-- 评论区 -->
		<view class="u-comment-title">
			最新评论 {{comment.count}}
		</view>
		<view class="uni-comment u-comment">
			<block v-for="(item,index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<!-- 输入框区 -->
		<!-- 占位区 -->
		<view v-if="bottomTop" :style="'height:'+bottomTop+ ';'"></view>
		<user-chat-bottom id="botbar" @sendMsg="sendMsg"></user-chat-bottom>

		<!-- 分享 -->
		<more-share :isShow="isShareShow" @togle="togle"></more-share>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue'
	import commentList from '../../components/detail/comment-list.vue'
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import moreShare from '../../components/common/more-share.vue'
	import {
		_GetDateStr
	} from '../../common/js/time.js'
	export default {
		components: {
			detailInfo,
			commentList,
			userChatBottom,
			moreShare
		},
		data() {
			return {
				isShareShow: false,
				detail: {},
				comment: {
					count: 4, // 总条数
					list: [] // 当前评论数
				},
				bottomTop: 100
			}
		},
		onLoad(e) { // 可以接收传来的参数
			this.initData(JSON.parse(e.detailData))
		},
		// 监听导航右侧按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.togle()
			}
		},
		methods: {
			togle() {
				this.isShareShow = !this.isShareShow
			},
			// 初始化数据对象
			async initData(obj) {
				// 修改窗口标题
				uni.setNavigationBarTitle({
					title: obj.title
				})
				this.mockData()

				const query = await uni.createSelectorQuery().in(this);
				query.select('#botbar').boundingClientRect(data => {
					this.bottomTop = data.height + 'px' // 底部发送信息框
				}).exec();
			},
			// 模拟数据
			mockData() {
				this.detail = { // 图片
					userpic: '../../static/img/mock/13.jpg',
					username: '三余先生',
					sex: 0, // 0 女 1 男
					age: 18,
					isgz: false,
					title: '我是标题',
					comment: '六道快手家常菜，好吃又下饭，家人都说好',
					cover: '../../static/img/mock/1.jpg',
					moreCover: ['../../static/img/mock/1.jpg', '../../static/img/mock/2.jpg'], // 多张数组
					video: false,
					share: false,
					address: '深圳 龙华',
					sharenum: 20,
					commentnum: 789,
					zannum: 1200,
					time: '26天前'
				}

				let arr = [{
						id: 1,
						fid: 0, // 0 一级评论 
						userpic: "../../static/img/mock/13.jpg",
						username: "Gene",
						time: "1597889394",
						data: "我这条评论怎么样？"
					},
					{
						id: 2,
						fid: 1, // 1 二级评论 
						userpic: "../../static/img/mock/13.jpg",
						username: "Gene",
						time: "1597889481",
						data: "可以，起飞"
					},
					{
						id: 3,
						fid: 1,
						userpic: "../../static/img/mock/13.jpg",
						username: "Gene",
						time: "1597889481",
						data: "可以，起飞"
					},
					{
						id: 4,
						fid: 0,
						userpic: "../../static/img/mock/13.jpg",
						username: "Gene",
						time: "1597889481",
						data: "可以，起飞"
					}
				]
				for (let i = 0; i < arr.length; i++) {
					arr[i].time = _GetDateStr(arr[i].time)
				}
				this.comment.list = arr
			},
			async sendMsg(text) {
				if (text == '') return;
				let obj = {
					id: 2,
					fid: 0,
					userpic: "../../static/img/mock/13.jpg",
					username: "Gene",
					time: _GetDateStr(new Date().getTime() / 1000),
					data: text
				}
				this.comment.list.push(obj)

				// 计算总高度,下滑到底部
				const query = await uni.createSelectorQuery().in(this);
				query.select('#cview').boundingClientRect(data => {
					// console.log(data.height) // 总高度
					uni.pageScrollTo({
						scrollTop: data.height
					})
				}).exec();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-comment-title {
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}

	.u-comment {
		padding: 10upx 15upx;
	}
</style>
