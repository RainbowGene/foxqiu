<template>
	<view>
		<!-- 话题介绍组件 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
		<!-- tabbar 切换 -->
		<swiper-tab :tabIndex="tabIndex" :tabBars="tabBars" scrollStyle="border-bottom:none;" scrollItemStyle="width:50%;"
		 @selIndex="selIndex"></swiper-tab>
		<!-- 滚动 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,i) in mockdata" :key="i">
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
	import topicInfo from "../../components/topic/topic-info.vue"
	import swiperTab from "../../components/index/swiper-tab.vue"
	import loadMore from '../../components/common/load-more.vue'
	import ptList from '../../components/index/pt-list.vue'
	export default {
		components: {
			topicInfo,
			swiperTab,
			loadMore,
			ptList
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '默认',
						id: 1
					},
					{
						name: '最新',
						id: 2
					}
				],
				topicInfo: {
					imgurl: '../../static/img/mock/15.jpg',
					title: '#忆往事，寄余生#',
					desc: '如果你在电梯遇见马云，怎么打招呼让他注意到你...',
					dtnum: 123,
					today: 23
				},
				mockdata: [{
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
					}
				]
			}
		},
		methods: {
			// 获取数据
			getData() {
				
			},
			selIndex(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载
			loadMore(i) {
				// this.mockdata[i].loadtext = "上拉加载更多..."
				this.mockdata[i].loadtext = "加载中..."
				// this.mockdata[i].loadtext = "到底啦!"
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
					//this.mockdata[i].loadtext = "到底啦!"
					this.mockdata[i].list.push(obj)
					this.mockdata[i].loadtext = "上拉加载更多!"
				}, 1000)
			}
		},
		// 上拉刷新事件
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000)
		},
		onLoad() {
			// 根据视口大小设置滑动组件高度
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>
