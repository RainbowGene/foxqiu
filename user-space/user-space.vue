<template>
	<view>
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-data">
			<home-data :datalist="spacelist"></home-data>
		</view>
		<view style="height: 20upx; background: #f4f4f4;"></view>
		<!-- tab 标签 -->
		<swiper-tab :tabIndex="tabIndex" :tabBars="tabBars" scrollStyle="border-bottom:0;" scrollItemStyle="width:33.3%;"
		 @selIndex="selIndex"></swiper-tab>
		<!-- 主页 -->
		<user-space-info v-if="tabIndex==0" :userinfo="userinfo"></user-space-info>
		<block v-for="(item,index) in mockdata" :key="index">
			<template v-if="tabIndex == index">
				<block v-for="(obj,i) in item.list" :key="i">
					<pt-list :item="obj" :index="i"></pt-list>
				</block>
			</template>
		</block>
	</view>
</template>

<script>
	import userSpaceHead from '../components/user-space/user-space-head.vue'
	import homeData from '../components/home/home-data.vue'
	import swiperTab from '../components/index/swiper-tab.vue'
	import userSpaceInfo from "../components/user-space/user-space-info.vue"
	import ptList from "../components/index/pt-list.vue"
	import loadMore from "../components/common/load-more.vue"
	export default {
		components: {
			userSpaceHead,
			homeData,
			swiperTab,
			userSpaceInfo,
			ptList,
			loadMore
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '主页',
						id: 1
					},
					{
						name: '糗事',
						id: 2
					},
					{
						name: '动态',
						id: 3
					}
				],
				userinfo: {
					bgimg: '../static/img/mock/bg.png', // 主页背景
					userpic: '../static/img/mock/13.jpg',
					username: 'Ni是无意过堂风',
					sex: 1,
					age: 23,
					isgz: false,
					regtime: '2018-12-11', // 注册事件
					id: 1591123,
					job: 'it',
					birthday: '1997-08-01',
					city: '湖北省-荆州市-监利县',
					qg: '已婚'
				},
				spacelist: [{
						name: '获赞',
						num: '10k'
					},
					{
						name: '关注',
						num: 11
					},
					{
						name: '粉丝',
						num: 12
					},
				],
				mockdata: [{},
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
				],
			}
		},
		methods: {
			selIndex(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-space-data {
		background: #ffffff;
		position: relative;
		z-index: 10;
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
		margin-top: -15upx;
	}
</style>
