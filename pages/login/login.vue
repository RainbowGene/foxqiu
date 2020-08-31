<template>
	<view class="login-body">
		<!-- 状态条背景色 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 关闭图标 -->
		<view class="iconfont icon-guanbi1 cancel" @tap="cancel"></view>
		<!-- 顶部背景 -->
		<image class="bgimg" src="../../static/img/mock/bglogo.png" mode="widthFix"></image>

		<view class="from-body">
			<!-- 手机号验证码登录 -->
			<template v-if="isPhoneVail">
				<view class="login-box">
					<view class="phone u-ajc">
						+ 86
					</view>
					<input type="text" class="uni-input phone-input" v-model="phone" placeholder="手机号" />
				</view>
				<view class="login-box u-ajc">
					<input type="text" class="uni-input code-input" v-model="phoneCode" placeholder="请输入验证码" />
					<view class="code" :class="isSend?'code-dis':''" @tap="sendMsg">
						{{isSend?sendTime+'s':'获取验证码'}}
					</view>
				</view>
			</template>
			<template v-else>
				<!-- 常规登录 -->
				<input type="text" class="uni-input" v-model="username" placeholder="用户名/手机号/邮箱" />
				<view class="login-box">
					<input type="text" class="uni-input psd-input" password v-model="password" placeholder="输入密码" />
					<view class="forget u-ajc">
						忘记密码?
					</view>
				</view>
			</template>
			<button class="bigBtn" :class="isVail?'':'disable-btn'" @tap="submit" type="primary">登录</button>
		</view>

		<view class="code-text" @tap="isPhoneVail=!isPhoneVail">
			{{isPhoneVail?'密码登录':'验证码登录'}}
			<view class="iconfont icon-fanhui2"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-line">第三方登录</view>
		<home-other-login></home-other-login>

		<!-- 协议 -->
		<view class="login-rule u-ajc">
			注册即代表您同意<view>《XXXX协议》</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/navbar/uni-status-bar/uni-status-bar.vue'
	import homeOtherLogin from '../../components/home/home-other-login.vue'
	var timeClock;
	export default {
		components: {
			uniStatusBar,
			homeOtherLogin
		},
		data() {
			return {
				isSend: false, // 是否发送验证码
				sendTime: 60,
				isPhoneVail: false, // 切换登录验证
				isVail: false, // 验证框是否填写
				username: '',
				password: '',
				phone: '',
				phoneCode: ''
			}
		},
		watch: { // 监听三个输入框'
			username(val) {
				this.change()
			},
			password(val) {
				this.change()
			},
			phone(val) {
				this.change()
			},
			phoneCode(val) {
				this.change()
			}
		},
		methods: {
			// 返回上页
			cancel() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 提交登录表单
			submit() {

			},
			change() {
				if ((this.username !== '' && this.password !== '')||(this.phone !== '' && this.phoneCode !== '')) return this.isVail = true;
				return this.isVail = false;
			},
			// 发送短信验证码
			async sendMsg() {
				if(this.isSend) return; // 已经发送了不再执行发送
				this.isSend = true
				timeClock = setInterval(() => {
					this.sendTime--
					if (this.sendTime == 0) {
						clearInterval(timeClock)
						this.sendTime = 60
						this.isSend = false      
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-body {
		position: relative;

		.bgimg {
			width: 100%;
		}

		.cancel {
			position: absolute;
			top: 20upx;
			left: 20upx;
			z-index: 9;
			font-size: 40upx;
			font-weight: bold;
		}

		.from-body {
			padding: 20upx;

			input {
				font-size: 30upx;
				padding: 20upx 30upx;
			}

			.disable-btn {
				background: #f4f4f4 !important;
				border: 1upx solid #eeeeee !important;
				color: #909090 !important;
				margin-top: 30upx;
			}

			.login-box {
				position: relative;

				.psd-input {
					padding-right: 200upx;
				}

				.forget {
					position: absolute;
					right: 30upx;
					top: 0upx;
					height: 100%;
					// background: yellow;
				}

				.phone-input {
					padding-left: 110upx;
				}

				.phone {
					position: absolute;
					left: 32upx;
					top: 0;
					height: 100%;
				}

				.code-input {}

				.code {
					margin-right: 20upx;
					text-align: center;
					background: #CCCCCC;
					width: 160upx;
					border-radius: 10upx;
					padding: 5upx;
				}

				.code-dis {
					background: #EEEEEE !important;
					color: grey;
				}
			}
		}

		.code-text {
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 20upx;
			margin-bottom: 100upx;

			view {
				color: #CCCCCC;
			}
		}

		.other-login-line {
			color: #CCCCCC;
			text-align: center;
			margin: 20upx;
			position: relative;

			&:before {
				position: absolute;
				content: "";
				background: #CCCCCC;
				height: 1upx;
				width: 100upx;
				top: 50%;
				left: 25%;
			}

			&:after {
				position: absolute;
				content: "";
				background: #CCCCCC;
				height: 1upx;
				width: 100upx;
				top: 50%;
				right: 25%;
			}
		}

		.login-rule {
			margin-top: 20upx;
			color: #CCCCCC;

			view {
				color: blue;
			}
		}
	}
</style>
