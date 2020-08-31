<template>
	<view>
		<!-- 功能列表 -->
		<view class="home-list">
			<view class="list-body">
				<block v-for="(item,index) in itemlist" :key="index">
					<home-list-item :item="item" :index="index"></home-list-item>
				</block>
			</view>
		</view>
		<button class="bigBtn" type="primary">退出登录</button>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'
	export default {
		components: {
			homeListItem
		},
		data() {
			return {
				itemlist: [{
						name: '账号与安全',
						type: 'navigateTo',
						link: '../user-set-psd/user-set-psd'
					},
					{
						name: '绑定邮箱',
						type: 'navigateTo',
						link: '../user-set-email/user-set-email'
					},
					{
						name: '资料编辑',
						type: 'navigateTo',
						link: '../user-set-info/user-set-info'
					},
					{
						name: '小纸条',
						type: 'switchTab',
						link: "../../pages/paper/paper"
					},
					{
						name: '清除缓存',
						type: '',
						link: ''
					},
					{
						name: '意见反馈',
						type: 'navigateTo',
						link: '../user-set-help/user-set-help'
					},
					{
						name: '关于',
						type: 'navigateTo',
						link: '../user-set-about/user-set-about'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.home-list {
		margin: 40upx 0;
		padding: 20upx 40upx;
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx solid #EEEEEE;

		.list-body {
			display: flex;
			flex-direction: column;
		}
	}
</style>
