<template>
	<view>
		<!-- 自定义导航条 -->
		<news-nav-bar :tabBars="tabBars" :tabindex="tabindex" @selTab="selTab"></news-nav-bar>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperHeight+'px'}" :current="tabindex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore">
						<!-- 列表 -->
						<block v-for="(item,index) in mockdata.list" :key="index">
							<common-list :item="item" :index="tabindex"></common-list>
						</block>
						<load-more :loadtext="mockdata.loadtext"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list htlist">
						<!-- 搜索框 -->
						<view class="search">
							<input class="uni-input" placeholder-class="topic-search iconfont icon-soushuo" placeholder="搜索内容" />
						</view>
						<!-- 轮播图 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="item in topic.swiper" :key="item.id">
								<swiper-item>
									<image :src="item.imgurl" mode="widthFix"></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<topic-cate :category="topic.category"></topic-cate>
						<!-- 最近更新 -->
						<view class="recent">
							<view class="r-title">最近更新</view>
							<block v-for="(item,index) in topic.recentlist" :key="index">
								<topic-list :item="item"></topic-list>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import commonList from '../../components/common/common-list.vue'
	import newsNavBar from '../../components/news/news-nav-bar.vue'
	import loadMore from '../../components/common/load-more.vue'
	import topicCate from '../../components/news/topic-cate.vue'
	import topicList from '../../components/news/topic-list.vue'
	export default {
		components: {
			commonList,
			newsNavBar,
			loadMore,
			topicCate,
			topicList
		},
		data() {
			return {
				swiperHeight: 500,
				tabindex: 0,
				tabBars: [{
						name: "关注",
						id: 'gz'
					},
					{
						name: "话题",
						id: 'ht'
					}
				],
				topic: {
					swiper: [{
							imgurl: '../../static/img/mock/1.jpg',
							id: 1
						},
						{
							imgurl: '../../static/img/mock/2.jpg',
							id: 2
						},
						{
							imgurl: '../../static/img/mock/3.jpg',
							id: 3
						}
					],
					category: [{
							catename: '最新'
						},
						{
							catename: '游戏'
						},
						{
							catename: '情感'
						},
						{
							catename: '打卡'
						},
						{
							catename: '故事'
						},
						{
							catename: '喜爱'
						}
					],
					recentlist: [{
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
				mockdata: {
					loadtext: '上拉加载更多',
					list: [{ // 图片
							userpic: '../../static/img/mock/13.jpg',
							username: '三余先生',
							sex: 0, // 0 女 1 男
							age: 18,
							isgz: false,
							title: '我是标题',
							comment: '六道快手家常菜，好吃又下饭，家人都说好',
							cover: '../../static/img/mock/1.jpg',
							video: false,
							share: false,
							address: '深圳 龙华',
							sharenum: 20,
							commentnum: 789,
							zannum: 1200
						},
						{ // 视频
							userpic: '../../static/img/mock/13.jpg',
							username: '三余先生',
							sex: 0, // 0 女 1 男
							age: 18,
							isgz: true,
							title: '我是标题',
							comment: '六道快手家常菜，好吃又下饭，家人都说好',
							cover: '../../static/img/mock/1.jpg',
							video: {
								looknum: '23w',
								long: '2:47'
							},
							share: false,
							address: '深圳 龙华',
							sharenum: 20,
							commentnum: 789,
							zannum: 1200
						},
						{ // 分享
							userpic: '../../static/img/mock/13.jpg',
							username: '三余先生',
							sex: 0, // 0 女 1 男
							age: 18,
							isgz: false,
							title: '我的转发信息',
							comment: '六道快手家常菜，好吃又下饭，家人都说好',
							cover: '../../static/img/mock/1.jpg',
							video: false,
							share: {
								title: '文章标题',
								sharepic: '../../static/img/mock/1.jpg'
							},
							address: '深圳 龙华',
							sharenum: 20,
							commentnum: 789,
							zannum: 1200
						}
					]
				}
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
			// 点击切换
			selTab(num) {
				this.tabindex = num
			},
			// 滑动切换
			tabChange(e) {
				this.tabindex = e.detail.current
			},
			// 触底事件
			loadMore() {
				// this.mockdata.loadtext = "上拉加载更多..."
				this.mockdata.loadtext = "加载中..."
				// this.mockdata.loadtext = "到底啦!"
				setTimeout(() => {
					let obj = { // 分享
						userpic: '../../static/img/mock/13.jpg',
						username: '三余先生',
						sex: 0, // 0 女 1 男
						age: 18,
						isgz: false,
						title: '我的转发信息',
						comment: '六道快手家常菜，好吃又下饭，家人都说好',
						cover: '../../static/img/mock/1.jpg',
						video: false,
						share: {
							title: '文章标题',
							sharepic: '../../static/img/mock/1.jpg'
						},
						address: '深圳 龙华',
						sharenum: 20,
						commentnum: 789,
						zannum: 1200
					}
					//this.mockdata.loadtext = "到底啦!"
					this.mockdata.list.push(obj)
					this.mockdata.loadtext = "上拉加载更多!"
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.htlist {
		.search {
			padding: 20upx;

			&>input {
				background: #F4F4F4;
				border-radius: 10upx;
			}

			.topic-search {
				font-size: 30upx;
				display: flex;
				justify-content: center;
			}
		}

		.topic-swiper {
			padding: 0 20upx 20upx 20upx;
			border-radius: 10upx;

			image {
				width: 100%;
			}
		}

		.recent {
			display: flex;
			flex-direction: column;
			padding: 20upx;

			.r-title {
				font-size: 40upx;
			}
		}
	}
</style>
