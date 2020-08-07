<template>
	<view class="paper-con">
		<!-- 操作菜单 -->
		<paper-popup :czshow="czshow" @clear="clear" @addfriend="addfriend" @hidepop="hidepop"></paper-popup>
		<block v-for="(item,index) in friendList" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<load-more :loadtext="loadtext" v-if="loadshow"></load-more>
	</view>
</template>

<script>
	import paperList from '../../components/paper/paper-list.vue'
	import loadMore from '../../components/common/load-more.vue'
	import paperPopup from '../../components/paper/paper-popup.vue'
	export default {
		components: {
			paperList,
			loadMore,
			paperPopup
		},
		data() {
			return {
				loadtext: '上拉加载更多',
				loadshow: false,
				czshow: false,
				friendList: [{
						avatar: '../../static/img/mock/22.jpg',
						username: 'JIA一勺',
						time: '13:58',
						msg: '赵丽颖《知否》一句话打脸,“歪比歪比，歪比巴卜”',
						num: 3
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					},
					{
						avatar: '../../static/img/mock/22.jpg',
						username: '刘德华',
						time: '17:58',
						msg: '这波啊这波，这波是大荒星陨',
						num: 0
					}
				]
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		onReachBottom() {
			// 查完数据
			this.loadtext = '正在加载'
			this.loadshow = true
			setTimeout(() => {
				var obj = {
					avatar: '../../static/img/mock/22.jpg',
					username: '刘德华',
					time: '17:58',
					msg: '这波啊这波，这波是大荒星陨',
					num: 0
				}
				this.friendList.push(obj)
				this.loadtext = '上拉加载更多'
				this.loadshow = false
			}, 1000)
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				return uni.navigateTo({
					url: '../user-list/user-list'
				})
			}
			if (e.index == 1) return this.czshow = true // right btn
		},
		methods: {
			getData() {
				// 获取数据赋值
				setTimeout(() => {
					console.log('狼来了')
				}, 500)
				// 关闭刷新标志
				uni.stopPullDownRefresh()
				this.hidepop()
			},
			addfriend() {
				console.log('addf')
				this.hidepop()
			},
			clear() {
				console.log('clear')
				this.hidepop()
			},
			hidepop() {
				this.czshow = false
			},
			showpop() {
				this.czshow = true
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
