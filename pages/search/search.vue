<template>
	<view>
		<template v-if="list.length>0">
			<block v-for="(item,index) in list" :key='index'>
				<pt-list :item="item"></pt-list>
			</block>
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="isSearch && list.length<1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import ptList from '../../components/index/pt-list.vue'
	import noThing from '../../components/common/no-thing.vue'
	import loadMore from '../../components/common/load-more.vue'
	import {
		debounce,
		throttle
	} from '../../common/js/debthr.js'
	export default {
		components: {
			ptList,
			noThing,
			loadMore
		},
		data() {
			return {
				isSearch: false,
				searchText: '',
				loadtext: '上拉加载',
				list: []
			}
		},
		// 页面触底
		onReachBottom() {
			this.loadMore()
		},
		mounted() {
			this.clearBack()
			// this.getData('')
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
			if (e.index == 0) { // 第一个按钮,取消按钮
				uni.navigateBack({
					delta: 1
				})
			}
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(e) {
			this.searchHandle(e.text)
		},
		// 监听搜索框文本变化 
		onNavigationBarSearchInputChanged(e) {
			// 防抖 1s之内的多次触发，只执行一次
			this.searchHandle(e.text)
		},
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked(e) {
			this.searchHandle(e.text)
		},
		// 监听页面下拉刷新
		onPullDownRefresh() {
			this.getData()
			uni.stopPullDownRefresh()
		},
		methods: {
			// 搜索事件(防抖)
			searchHandle: debounce(function(val) {
				if (val.replace(/^\s*|\s*$/g, "")) { // 去除两边空格
					this.searchText = val
					this.getData(this.searchText)
				} else {
					// 值为空
				  	this.list = []
				}   
			}),
			// 数据查询
			getData(val) {
				// this.list = []
				// this.isSearch = false
				uni.showLoading()
				setTimeout(() => {
					// 请求服务器响应数据(模拟)
					let arr = [{
						avatar: '../../static/img/mock/15.jpg',
						username: '大灰熊',
						isgz: true,
						title: "起飞",
						type: 'img', // img 图文， video 视频：有播放样式
						cover: '../../static/img/mock/1.jpg',
						infonnum: {
							index: 2, // 0 未点评，1 点赞，2点踩
							dingnum: 11,
							cainum: 1
						},
						commentnum: 376,
						sharenum: 22
					}, {
						avatar: '../../static/img/mock/12.jpg',
						username: '小白龙',
						isgz: false,
						title: "起飞",
						type: 'video', // img 图文， video 视频：有播放样式
						cover: '../../static/img/mock/2.jpg',
						playnum: 215543,
						long: "2:17",
						infonnum: {
							index: 1, // 0 未点评，1 点赞，2点踩
							dingnum: 22,
							cainum: 2
						},
						commentnum: 576,
						sharenum: 22
					}]
					this.isSearch = true
					uni.hideLoading()
					this.list = arr
				}, 1000)
			},
			clearBack() {
				var a = document.getElementsByClassName('uni-page-head-hd')[0]
				a.style.display = 'none';
			},
			loadMore() {
				// this.loadtext = "上拉加载更多..."
				this.loadtext = "加载中..."
				// this.loadtext = "到底啦!"
				setTimeout(() => {
					let obj = {
						avatar: '../../static/img/mock/12.jpg',
						username: '小白龙',
						isgz: false,
						title: "起飞",
						type: 'video', // img 图文， video 视频：有播放样式
						cover: '../../static/img/mock/2.jpg',
						playnum: 215543,
						long: "2:17",
						infonnum: {
							index: 1, // 0 未点评，1 点赞，2点踩
							dingnum: 22,
							cainum: 2
						},
						commentnum: 576,
						sharenum: 22
					}
					//this.loadtext = "到底啦!"
					this.list.push(obj)
					this.loadtext = "上拉加载更多!"
				}, 1000)
			}
		}
	}
</script>

<style>

</style>
