<template>
	<view>
		<view class="user-set-list">
			<view class="set-item">
				<view class="left">
					头像
				</view>
				<view class="conter">
					<image :src="userpic" mode="aspectFill"></image>
					<view class="right iconfont icon-bi" @tap="changeAvatar"></view>
				</view>
			</view>
			<view class="set-item">
				<view class="left">
					昵称
				</view>
				<view class="conter">
					<!-- <view>ClycleGene</view> -->
					<input type="text" v-model="username" />
					<view class="right iconfont icon-bi"></view>
				</view>
			</view>
			<view class="set-item">
				<view class="left">
					性别
				</view>
				<view class="conter">
					<view>{{sex | fitSex}}</view>
					<view class="right iconfont icon-bi" @tap="UpdateInfo('sex')"></view>
				</view>
			</view>
			<view class="set-item">
				<view class="left">
					生日
				</view>
				<picker mode="date" :start="startDate" :end="endDate" @change="bindChangeDate" :value="birthday">
					<view class="conter">
						<view>{{birthday}}</view>
						<view class="right iconfont icon-bi"></view>
					</view>
				</picker>
			</view>
			<view class="set-item">
				<view class="left">
					情感
				</view>
				<view class="conter">
					<view>{{qg}}</view>
					<view class="right iconfont icon-bi" @tap="UpdateInfo('qg')"></view>
				</view>
			</view>
			<view class="set-item">
				<view class="left">
					职业
				</view>
				<view class="conter">
					<view>{{job}}</view>
					<view class="right iconfont icon-bi" @tap="UpdateInfo('job')"></view>
				</view>
			</view>
			<view class="set-item">
				<view class="left">
					户籍
				</view>
				<view class="conter" @tap="showThreePicker">
					<view>{{city}}</view>
					<view class="right iconfont icon-bi"></view>
				</view>
				<mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" :pickerValueDefault="defaultCity" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
			</view>
		</view>
		<button class="bigBtn" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	let sex = ['女', '男', '不限']
	let qg = ['未婚', '已婚']
	let job = ['IT', '其他']
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				userpic: '../../static/img/mock/13.jpg',
				username: 'ClycleGene',
				sex: 2,
				qg: '未婚',
				job: 'it',
				birthday: '1997-08-01',
				city: '湖北省-荆州市-监利县',
				defaultCity: [16, 8, 3]
			}
		},
		filters: {
			fitSex(sex) {
				switch (sex) {
					case 1:
						return '男';
					case 0:
						return '女';
					case 2:
						return '不限';
				}
			}
		},
		computed: {
			startDate() {
				return this.getDate('start')
			},
			endDate() {
				return this.getDate('end')
			}
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				console.log(e)
				this.city = e.label
				this.defaultCity = e.value
			},
			// city selected
			showThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 监听日期变化
			bindChangeDate(e) {
				this.birthday = e.target.value
			},
			// 监听城市选择器变化
			changeCity(e) {
				console.log(e)
			},
			// 修改头像
			changeAvatar() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						// console.log(res)
						this.userpic = res.tempFilePaths[0];
					}
				})
			},
			// 单列选择
			UpdateInfo(key) {
				let list = []
				switch (key) {
					case 'sex':
						list = sex;
						break;
					case 'qg':
						list = qg;
						break;
					case 'job':
						list = job;
						break;
				}
				uni.showActionSheet({
					itemList: list,
					success: res => {
						switch (key) {
							case 'sex':
								this.sex = res.tapIndex;
								break;
							case 'qg':
								this.qg = qg[res.tapIndex];
								break;
							case 'job':
								this.job = job[res.tapIndex];
								break;
						}
					}
				})
			},
			submit() {
				console.log('submit')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-set-list {
		display: flex;
		flex-direction: column;
		padding: 40upx;

		view {
			color: grey;
		}

		.set-item {
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: space-between;
			margin: 20upx 0;

			view {
				font-size: 35upx;
			}

			.conter {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				image {
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
					margin: 0 10upx;
				}

				view:first-child {
					margin: 0 20upx;
					color: black;
				}

				input {
					text-align: right;
					margin: 0 20upx;
					color: black;
				}
			}
		}
	}
</style>
