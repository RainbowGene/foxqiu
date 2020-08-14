<template>
	<view>
		<scroll-view id="scrollview" scroll-y :scroll-top="scrolltop" :scroll-with-animation="true" :style="{height:style.contentH+'px'}">
			<!-- 聊天列表 -->
			<view class="chat-msglist">
				<block v-for="(item,index) in msglist" :key="index">
					<user-chat-list :item="item" :index="index"></user-chat-list>
				</block>
			</view>
		</scroll-view>
		<!-- 消息发送 -->
		<user-chat-bottom id="botbar" @sendMsg="sendMsg"></user-chat-bottom>
	</view>
</template>

<script>
	import {
		_GetDateStr
	} from '../../common/js/time.js'
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import userChatList from '../../components/user-chat/user-chat-list.vue'
	export default {
		components: {
			userChatBottom,
			userChatList
		},
		data() {
			return {
				msglist: [],
				scrolltop: 0,
				style: {
					contentH: 0,
					itemH: 0
				}
			}
		},
		onLoad() {
			this.getData()
		},
		mounted() {
			this.init()
		},
		onReady() {
			this.pageToBottom()
		},
		methods: {
			// 初始化参数
			init() {
				let botbarH = 0
				const query = uni.createSelectorQuery().in(this);
				query.select('#botbar').boundingClientRect(data => {
					// console.log(data) // 底部发送信息框
					botbarH = data.height
				}).exec();
				try {
					const res = uni.getSystemInfoSync()
					// console.log(botbarH)
					this.style.contentH = res.windowHeight - botbarH
				} catch (e) {
					//TODO handle the exception
				}
			},
			//获取数据
			getData() {
				let arr = [{
					isme: false,
					userpic: '../../static/img/mock/12.jpg',
					type: 0, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
					time: '1554970014'
				}, {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 1, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '../../static/img/gonggao.png',
					time: '1597306699'
				}, {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 1, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '../../static/img/gonggao.png',
					time: '1597306699'
				}, {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 1, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '../../static/img/gonggao.png',
					time: '1597306699'
				}, {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 1, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '../../static/img/gonggao.png',
					time: '1597393104'
				}, {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 1, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '../../static/img/gonggao.png',
					time: '1597393188'
				}, {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 1, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: '../../static/img/gonggao.png',
					time: '1597393288'
				}]
				this.formatTime(arr)
				this.msglist = arr
			},
			formatTime(arr) { // 格式化数组时间
				for (let i = arr.length - 1; i >= 0; i--) {
					if (i >= 1 && (parseInt(arr[i].time) - parseInt(arr[i - 1].time)) < 300) {
						// 间隔小于300s不显示
						arr[i].gstime = '' // '' 等于 false
					} else {
						arr[i].gstime = _GetDateStr(arr[i].time)
					}
					// arr[i].time = new Date(arr[i].time * 1000).toLocaleString()
				}
				return arr
			},
			// 滚到底部
			pageToBottom() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#scrollview').boundingClientRect();
				query.selectAll('.user-chat-item').boundingClientRect();
				query.exec(res => {
					res[1].forEach(ret => {
						this.style.itemH += ret.height;
					})
					if (this.style.itemH >= this.style.contentH) { // 大于表示聊天信息很多
						// console.log(this.style.itemH)
						this.scrolltop = this.style.itemH;
					}
				})
			},
			async sendMsg(msg) {
				if (msg == '') return;
				// 构建数据
				let date = new Date().getTime() / 1000
				let obj = {
					isme: true,
					userpic: '../../static/img/mock/13.jpg',
					type: 0, // 0 文本 / 1 图片 / 2语音 / 3 视频
					data: msg,
					time: date
				}
				this.msglist.push(obj)
				this.msglist = await this.formatTime(this.msglist) // 确保添加成功再滑动
				this.pageToBottom()
				// 清空文本框
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat-msglist {
		margin-bottom: 10upx;
	}
</style>
