<template>
	<view>
		<block v-for="(item,index) in list" :key='index'>
			<pt-list :item="item"></pt-list>
		</block>
	</view>
</template>

<script>
	import ptList from '../../components/index/pt-list.vue'
	export default {
		components:{
			ptList
		},
		data() {
			return {
				list: [{
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
			}
		},
		mounted() {
			this.clearBack()
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
			console.log(e.text)
		},
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked(e) {
			console.log(e.text)
		},
		methods: {
			clearBack() {
				var a = document.getElementsByClassName('uni-page-head-hd')[0]
				a.style.display = 'none';
			}
		}
	}
</script>

<style>

</style>
