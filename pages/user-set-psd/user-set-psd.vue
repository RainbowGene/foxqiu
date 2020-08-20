<template>
	<view class="set-pwd-body">
		<input type="text" password class="uni-input" placeholder="输入旧密码" v-model="oldpsd" />
		<input type="text" password class="uni-input" placeholder="输入新密码" v-model="newpsd" />
		<input type="text" password class="uni-input" placeholder="再次输入新密码" v-model="vnewpsd" />
		<button class="bigBtn" :disabled="!isVail" :loading="loading" :class="isVail?'':'disable-btn'" @tap="submit" type="primary">确认修改</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isVail: false,
				oldpsd: '',
				newpsd: '',
				vnewpsd: '',
				loading: false
			}
		},
		watch: { // 监听三个输入框
			oldpsd(val) {
				this.change()
			},
			newpsd(val) {
				this.change()
			},
			vnewpsd(val) {
				this.change()
			}
		},
		methods: {
			change() {
				if (this.oldpsd && this.newpsd && this.vnewpsd) return this.isVail = true
				return this.isVail = false
			},
			// 验证
			check() {
				if (this.oldpsd && this.newpsd && this.vnewpsd) {
					if (this.vnewpsd === this.newpsd) return true
					uni.showToast({
						title: "两次输入不一致",
						icon: "none"
					})
					return false
				} else {
					uni.showToast({
						title: "请填写完整",
						icon: "none"
					})
					return false
				}
			},
			async submit() {
				this.loading = true
				if (!this.check()) return this.loading = false;
				await setTimeout(() => {
					uni.showToast({
						title: "提交成功",
						icon: "success"
					})
					this.loading = false
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.set-pwd-body {
		margin: 40upx;

		input {
			font-size: 30upx;
			border-bottom: 1upx solid #f4f4f4;
		}

		.disable-btn {
			background: #f4f4f4 !important;
			border: 1upx solid #eeeeee !important;
			color: #909090 !important;
		}
	}
</style>
