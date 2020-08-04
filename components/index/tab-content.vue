<template>
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
</template>

<script>
	import ptList from './pt-list.vue';
	import loadMore from '../common/load-more.vue'
	import noThing from '../common/no-thing.vue'
	export default {
		props: {
			swiperHeight: Number,
			newsList: Array,
			tabIndex: Number
		},
		methods: {
			tabChange(e) {
				this.$emit('selIndex', e.detail.current)
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
		},
		components: {
			ptList,
			loadMore,
			noThing
		}
	}
</script>
<style lang="scss" scoped>
</style>
