<template>
	<view>
		<!-- tabbar组件 -->
		<swiper-tab :tabIndex="tabIndex" :tabBars="tabBars" @selIndex="selIndex"></swiper-tab>
		<!-- 滑块内容 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,i) in recentList" :key="i">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(i)">
						<template v-if="items.list.length>0">
							<!-- 话题列表 -->
							<block v-for="(item,j) in items.list" :key="j">
								<topic-list :item="item"></topic-list>
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
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	import topicList from "../../components/news/topic-list.vue"
	export default {
		components: {
			swiperTab,
			loadMore,
			noThing,
			topicList
		},
		data() {
			return {
				tabBars: [{
					name: '关注',
					id: 1
				}, {
					name: '推荐',
					id: 2
				}, {
					name: '体育',
					id: 3
				}, {
					name: '热点',
					id: 4
				}, {
					name: '财经',
					id: 5
				}],
				tabIndex: 0,
				swiperHeight: 50,
				recentList: [{
						loadtext: "上拉加载更多",
						list: [{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							},
							{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							},
							{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							},
							{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							},
							{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							},
							{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							},
							{
								imgurl: '../../static/img/mock/15.jpg',
								title: '#淘宝记录铺#',
								desc: '120斤到150斤，我的反转人生',
								dynamic: 23,
								browse: 750
							}
						]
					},
					{
						loadtext: "无更多数据",
						list: []
					},
					{
						loadtext: "无更多数据",
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

		methods: {
			selIndex(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			loadMore(i) {
				// this.recentList[i].loadtext = "上拉加载更多..."
				this.recentList[i].loadtext = "加载中..."
				// this.recentList[i].loadtext = "到底啦!"
				setTimeout(() => {
					let obj = {
						imgurl: '../../static/img/mock/15.jpg',
						title: '#淘宝记录铺#',
						desc: '120斤到150斤，我的反转人生',
						dynamic: 23,
						browse: 750
					}
					//this.recentList[i].loadtext = "到底啦!"
					this.recentList[i].list.push(obj)
					this.recentList[i].loadtext = "上拉加载更多!"
				}, 1000)
			}
		}
	}
</script>

<style>

</style>
