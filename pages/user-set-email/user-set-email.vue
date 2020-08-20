<template>
	<view class="set-pwd-body">
		<input type="text" class="uni-input" placeholder="输入邮箱" v-model="email" />
		<input type="text" password class="uni-input" placeholder="输入密码" v-model="psd" />
		<button class="bigBtn" :disabled="!isVail" :loading="loading" :class="isVail?'':'disable-btn'" @tap="submit" type="primary">确认绑定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isVail: false,
				email: '',
				psd: '',
				loading: false
			}
		},
		watch: { // 监听三个输入框
			email(val) {
				this.change()
			},
			psd(val) {
				this.change()
			}
		},
		methods: {
			change() {
				if (this.email && this.psd) return this.isVail = true
				return this.isVail = false
			},
			// 验证
			check() {
				if (this.email && this.psd) {
					var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
					if (reg.test(this.email)) return true
					uni.showToast({
						title: "邮箱格式错误",
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
						title: "绑定成功",
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
