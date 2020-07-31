<template>
	<view class="content">
		<!-- tabbar -->
		<tab-bar :tabBars="tabBars" @tabSel="updetaList"></tab-bar>
		<!-- 图文列表 -->
		<block v-for="(item,index) in list" :key="index">
			<pt-list :item="item"></pt-list>
		</block>
	</view>
</template>

<script>
	import ptList from '../../components/index/pt-list.vue';
	import tabBar from '../../components/index/tab-bar.vue'
	export default {
		data() {
			return {
				tabBars: [{
						id: 1,
						name: '关注'
					},
					{
						id: 2,
						name: '推荐'
					},
					{
						id: 3,
						name: '体育'
					},
					{
						id: 4,
						name: '热点'
					},
					{
						id: 5,
						name: '财经'
					},
					{
						id: 6,
						name: '娱乐'
					}
				],
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
		onLoad() {

		},
		methods: {
			updetaList(index) {
				console.log(index)
			}
		},
		components: {
			ptList,
			tabBar
		}
	}
</script>

<style lang="scss" scoped>
</style>
