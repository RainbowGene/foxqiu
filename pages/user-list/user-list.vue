<template>
	<view>
		<swiper-tab :tabBars="tabBars" :tabIndex="tabIndex" @selIndex="selIndex" scrollItemStyle="width:33.3%" scrollStyle="border-bottom:none;"></swiper-tab>
		<!-- 滑块内容组件 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,i) in buddylist" :key="i">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(i)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item,j) in items.list" :key="j">
								<user-list :item="item" :index="j"></user-list>
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
		<!-- <block v-for="(item,index) in buddylist" :key="index">
			<user-list :item="item" :index="index"></user-list>
		</block> -->
	</view>
</template>

<script>
	import swiperTab from '../../components/index/swiper-tab.vue'
	import userList from '../../components/user-list/user-list.vue'
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components: {
			swiperTab,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperHeight: 500,
				sellist: [],
				buddylist: [{
						loadtext: 'loading',
						list: [{
								avatar: '../../static/img/mock/13.jpg',
								name: '吉吉国王',
								sex: 1,
								age: 28,
								isgz: true
							},
							{
								avatar: '../../static/img/mock/13.jpg',
								name: '瑶瑶公主',
								sex: 0,
								age: 22,
								isgz: false
							}, {
								avatar: '../../static/img/mock/13.jpg',
								name: '吉吉国王',
								sex: 1,
								age: 28,
								isgz: true
							}, {
								avatar: '../../static/img/mock/13.jpg',
								name: '瑶瑶公主',
								sex: 0,
								age: 22,
								isgz: false
							}
						]
					},
					{
						loadtext: 'loading',
						list: [{
								avatar: '../../static/img/mock/13.jpg',
								name: '吉吉国王',
								sex: 1,
								age: 28,
								isgz: true
							},
							{
								avatar: '../../static/img/mock/13.jpg',
								name: '瑶瑶公主',
								sex: 0,
								age: 22,
								isgz: false
							}, {
								avatar: '../../static/img/mock/13.jpg',
								name: '吉吉国王',
								sex: 1,
								age: 28,
								isgz: true
							}, {
								avatar: '../../static/img/mock/13.jpg',
								name: '瑶瑶公主',
								sex: 0,
								age: 22,
								isgz: false
							}
						]
					},
					{
						loadtext: 'loading',
						list: [{
								avatar: '../../static/img/mock/13.jpg',
								name: '吉吉国王',
								sex: 1,
								age: 28,
								isgz: true
							},
							{
								avatar: '../../static/img/mock/13.jpg',
								name: '瑶瑶公主',
								sex: 0,
								age: 22,
								isgz: false
							}, {
								avatar: '../../static/img/mock/13.jpg',
								name: '吉吉国王',
								sex: 1,
								age: 28,
								isgz: true
							}, {
								avatar: '../../static/img/mock/13.jpg',
								name: '瑶瑶公主',
								sex: 0,
								age: 22,
								isgz: false
							}
						]
					}
				],
				tabBars: [{
						name: '互关',
						id: 1,
						num: 10
					},
					{
						name: '关注',
						id: 2,
						num: 10
					},
					{
						name: '粉丝',
						id: 3,
						num: 10
					}
				],
				tabIndex: 0
			}
		},
		mounted() {
			this.clearBack()
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) return uni.navigateBack({
				delta: 1
			})
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
			clearBack() {
				var a = document.getElementsByClassName('uni-page-head-hd')[0]
				a.style.display = 'none';
			},
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

</style>
