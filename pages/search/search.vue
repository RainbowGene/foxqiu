<template>
	<view>
		搜索
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
			if (e.index == 0) { // 第一个按钮,取消按钮
				uni.navigateBack({
					delta: 1
				})
			}
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text)
		},
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked(e) {
			console.log(e.text)
		},
		methods: {

		}
	}
</script>

<style>

</style>
