<template>
	<view>
		<view class="colllist">
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse>
					<uni-collapse-item :title="item.title" :show-animation="true">
						<view class="item-view">
							{{item.content}}
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</block>
		</view>
		<button class="bigBtn" type="primary" @tap="submit">意见反馈</button>
	</view>
</template>

<script>
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	export default {
		components: {
			uniCollapseItem,
			uniCollapse
		},
		data() {
			return {
				list: [{
						title: '客服是什么时候上线？',
						content: '你在干神魔'
					},
					{
						title: '忘记账号密码怎么办？',
						content: ''
					},
					{
						title: '怎么搜索查找关注？',
						content: ''
					},
					{
						title: '客服是什么时候上线？',
						content: ''
					}
				]
			}
		},
		methods: {
			submit() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.colllist {
		padding: 20upx;
		.item-view{
			padding: 30upx;
			background: white;
		}
	}
</style>
