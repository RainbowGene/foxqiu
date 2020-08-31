<template>
	<view>
		<template v-if="!isLogin">
			<!-- 未登录 -->
			<view class="my-head u-ajc">登陆，体验更多功能！</view>
			<!-- 第三方登录组件 -->
			<home-other-login></home-other-login>
			<!-- 账号密码登陆 -->
			<view class="u-ajc" @tap="navToLogin">
				账号密码登陆<view class="icon iconfont icon-fanhui2"></view>
			</view>
		</template>

		<!-- 已登陆 -->
		<template v-if="isLogin">
			<homeLoginInfo :userObj="loginObj"></homeLoginInfo>
		</template>
		<!-- 数据组件 -->
		<home-data :datalist="homedata"></home-data>
		<!-- 广告位 -->
		<view class="home-adv">
			<image src="../../static/img/mock/adv.png" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list">
			<view class="list-body">
				<block v-for="(item,index) in itemlist" :key="index">
					<home-list-item :item="item" :index="index"></home-list-item>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	import homeLoginInfo from '../../components/home/home-login-info.vue'
	import homeOtherLogin from '../../components/home/home-other-login.vue'
	import homeData from '../../components/home/home-data.vue'
	export default {
		components: {
			homeListItem,
			homeLoginInfo,
			homeOtherLogin,
			homeData
		},
		data() {
			return {
				isLogin: true,
				loginObj: { // 登录后的数据
					userpic: '../../static/img/mock/13.jpg',
					username: 'Ni是无意过堂风',
					totalnum: 0,
					todaynum: 0
				},
				homedata: [{
						name: '糗事',
						num: 0
					},
					{
						name: '动态',
						num: 0
					},
					{
						name: '评论',
						num: 0
					},
					{
						name: '收藏',
						num: 0
					}
				],
				itemlist: [{
						name: '浏览历史',
						icon: "icon-liulan",
						color: 'orange',
						type: '',
						link: ''
					},
					{
						name: '糗百认证',
						icon: "icon-VIP1",
						color: "green",
						type: '',
						link: ''
					},
					{
						name: '审核糗事',
						icon: "icon-biji1",
						color: 'orange',
						type: '',
						link: ''
					}
				]
			}
		},
		methods: {
			navToLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateTo({
					url: "../user-set/user-set"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-head {
		padding: 20upx;
	}

	.home-adv {
		display: flex;
		align-items: center;
		justify-content: center;

		image {
			border-radius: 30upx;
		}
	}

	.home-list {
		margin: 60upx 40upx;
		// padding: 20upx 40upx;
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx solid #EEEEEE;

		.list-body {
			display: flex;
			flex-direction: column;
		}
	}
</style>
