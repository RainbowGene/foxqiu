<template>
	<view class="content">
		<!-- tabbar组件 -->
		<swiper-tab :tabIndex="tabIndex" :tabBars="tabBars" @selIndex="selIndex"></swiper-tab>
		<!-- 滑块内容组件 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,i) in newsList" :key="i">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(i)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item,j) in items.list" :key="j">
								<pt-list :item="item"></pt-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<no-thing></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTab from '../../components/index/swiper-tab.vue';
	import ptList from '../../components/index/pt-list.vue'
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components: {
			swiperTab,
			loadMore,
			ptList,
			noThing
		},
		data() {
			return {
				swiperHeight: 500,
				tabIndex: 0,
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
				newsList: [{
						loadtext: '上拉加载更多...',
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
					},
					{
						loadtext: '上拉加载更多...',
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
					},
					{
						loadtext: '上拉加载更多...',
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
					},
					{
						loadtext: '上拉加载更多...',
						list: []
					},
					{
						loadtext: '上拉加载更多...',
						list: []
					},
					{
						loadtext: '上拉加载更多...',
						list: []
					}
				]
			}
		},
		onLoad() {
			// 根据视口大小设置滑动组件高度
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
				}
			})
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 1: // 发布
					uni.navigateTo({
						url: '../add-input/add-input'
					})
					break;
			}
		},
		// 监听搜索框点击
		onNavigationBarSearchInputClicked() {
			// 保留当前页，跳转到某页
			uni.navigateTo({
				url: '../search/search'
			})
		},
		methods: {
			selIndex(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载
			loadMore(i) {
				// this.newsList[i].loadtext = "上拉加载更多..."
				this.newsList[i].loadtext = "加载中..."
				// this.newsList[i].loadtext = "到底啦!"
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
					//this.newsList[i].loadtext = "到底啦!"
					this.newsList[i].list.push(obj)
					this.newsList[i].loadtext = "上拉加载更多!"
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-tab-bar {
		margin-top: 10upx;

		.uni-swiper-tab {
			.swiper-tab-list {
				color: #969696;
				font-weight: bold;
			}

			.active {
				color: #343434;

				.swiper-tab-line {
					border-top: 6upx solid #FEDE33;
					border-bottom: 6upx solid #FEDE33;
					width: 70upx;
					margin: 0 auto;
					border-radius: 20upx;
				}
			}
		}
	}

	// 这个高度等于视口高度 - tabbar 高度
</style>
