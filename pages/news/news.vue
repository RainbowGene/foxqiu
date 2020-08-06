<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar class="navbar" :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="center">
				<block v-for="(item,index) in tabBars" :key="item.id">
					<view :class="{'active':tabindex==index}" @tap="selTab(index)">
						{{item.name}}
						<view v-if="tabindex==index" class="tab_line"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont icon-bi"></view>
				</view>
			</block>
		</uni-nav-bar>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<view class="common-list">
				<!-- 左侧头像 -->
				<view class="list-avatar">
					<image :src="item.userpic" mode="widthFix" lazy-load></image>
				</view>
				<!-- 右侧内容 -->
				<view class="list-content">
					<view class="con-head">
						<view class="head-left">
							<view class="username">{{item.username}}</view>
							<view class="age" :class="item.sex==0?'red':'lan'">
								<view :class="item.sex==0?'icon-nv red':'icon-nan lan'" class="icon iconfont"></view>
								<view>{{item.age}}</view>
							</view>
						</view>
						<view class="head-right">
							<button type="default">
								<view :class="item.isgz?'':'icon-add-sy'" class="icon iconfont"></view>
								<view>{{item.isgz?'已关注':'关注'}}</view>
							</button>
							<view class="icon iconfont icon-guanbi1"></view>
						</view>
					</view>
					<view class="con-text">
						<view class="txt">
							{{item.comment}}
						</view>
					</view>
					<!-- 一般图片 -->
					<view v-if="!item.share&&!item.video" class="con-video">
						<image :src="item.cover" mode="widthFix" lazy-load></image>
					</view>
					<!-- 一般视频 -->
					<view v-if="item.video" class="con-video">
						<image :src="item.cover" mode="widthFix" lazy-load></image>
						<view class="add icon icon-add-sy"></view>
						<view class="desc">Design</view>
						<view class="btn icon iconfont icon-liulan"></view>
						<view class="player">20w 次播放 2:47</view>
						<view class="year">2019</view>
					</view>
					<!-- 转发动态样式 -->
					<view v-if="item.share" class="con-zf">
						<image :src="item.share.sharepic" mode="widthFix"></image>
						<view class="text">{{item.share.title}}
						</view>
					</view>
					<!-- 底栏 -->
					<view class="con-footer">
						<view class="foot-l">
							<view>{{item.address}}</view>
						</view>
						<view class="foot-r">
							<view class="icon iconfont icon-forward">{{item.sharenum}}</view>
							<view class="icon iconfont icon-xiaoxi">{{item.commentnum}}</view>
							<view class="icon iconfont icon-zan1">{{item.zannum}}</view>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import uniNavBar from '../../components/navbar/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				tabindex: 0,
				tabBars: [{
						name: "关注",
						id: 'gz'
					},
					{
						name: "话题",
						id: 'ht'
					}
				],
				list: [{ // 图片
						userpic: '../../static/img/mock/13.jpg',
						username: '三余先生',
						sex: 0, // 0 女 1 男
						age: 18,
						isgz: false,
						title: '我是标题',
						comment: '六道快手家常菜，好吃又下饭，家人都说好',
						cover: '../../static/img/mock/1.jpg',
						video: false,
						share: false,
						address: '深圳 龙华',
						sharenum: 20,
						commentnum: 789,
						zannum: 1200
					},
					{ // 视频
						userpic: '../../static/img/mock/13.jpg',
						username: '三余先生',
						sex: 0, // 0 女 1 男
						age: 18,
						isgz: true,
						title: '我是标题',
						comment: '六道快手家常菜，好吃又下饭，家人都说好',
						cover: '../../static/img/mock/1.jpg',
						video: {
							looknum: '23w',
							long: '2:47'
						},
						share: false,
						address: '深圳 龙华',
						sharenum: 20,
						commentnum: 789,
						zannum: 1200
					},
					{ // 分享
						userpic: '../../static/img/mock/13.jpg',
						username: '三余先生',
						sex: 0, // 0 女 1 男
						age: 18,
						isgz: false,
						title: '我的转发信息',
						comment: '六道快手家常菜，好吃又下饭，家人都说好',
						cover: '../../static/img/mock/1.jpg',
						video: false,
						share: {
							title: '文章标题',
							sharepic: '../../static/img/mock/1.jpg'
						},
						address: '深圳 龙华',
						sharenum: 20,
						commentnum: 789,
						zannum: 1200
					}
				]
			}
		},
		methods: {
			// 切换tab栏
			selTab(num) {
				this.tabindex = num
			}
		},
		components: {
			uniNavBar
		}
	}
</script>

<style lang="scss" scoped>
	// 列表样式
	.common-list {
		display: flex;
		// margin: 30upx;
		padding: 30upx;
		border-bottom: 16upx solid #EEEEEE;

		.list-avatar {
			width: 20%;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}

		.list-content {
			width: 80%;
			padding-left: 20upx;

			.con-head {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.head-left {
					display: flex;
					align-items: center;

					.username {
						color: grey;
						font-size: 35upx;
					}

					.age {
						display: flex;
						border-radius: 50%;
						padding: 0 5upx;
						margin-left: 10upx;

						view {
							font-size: 4upx;
						}

						&.lan {
							background: yellow;
						}

						&.red {
							background: pink;
						}
					}
				}

				.head-right {
					display: flex;

					button {
						display: flex;
						align-items: center;
						margin-right: 10upx;

						.icon {
							display: flex;
							justify-content: center;
							margin-right: 10upx;
						}
					}
				}
			}

			.con-text {
				margin-top: 10upx;

				view {
					font-size: 35upx;
				}
			}

			.con-video {
				margin-top: 10upx;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 100%;
					min-height: 400upx;
					border-radius: 20upx;
				}

				view {
					position: absolute;
					color: white;

					&.add {
						left: 20upx;
						top: 20upx;
					}

					&.year {
						bottom: 20upx;
						left: 20upx;
					}

					&.desc {
						right: 20upx;
						top: 20upx;
					}

					&.btn {
						font-size: 120upx;
						// opacity: 0.5;
					}

					&.player {
						right: 20upx;
						bottom: 20upx;
					}
				}
			}

			.con-zf {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #EEEEEE;
				border-radius: 20upx;
				margin: 10upx 0;

				// padding: 10upx;
				image {
					width: 200upx;
					height: 150upx;
					margin: 10upx;
					border-radius: 10upx;
				}

				view {
					flex: 1;
					font-size: 15upx;
				}
			}

			.con-footer {
				margin-top: 10upx;
				display: flex;
				justify-content: space-between;
				color: grey;

				.foot-l {}

				.foot-r {
					display: flex;
					align-items: center;

					view {
						font-size: 30upx;
						margin-right: 10upx;
					}
				}
			}
		}
	}

	// 导航条样式
	.navbar {
		.nav-left {
			margin-left: 32upx;

			view {
				color: #FF9619;
				font-size: 40upx;
			}
		}

		.nav-right {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			view {
				font-size: 40upx;
			}
		}

		.center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: -20upx;

			view {
				font-size: 35upx;
				padding: 0 15upx;
				font-weight: bold;
				color: #969696;
				display: flex;
				flex-direction: column;
				position: relative;
			}

			.active {
				color: black !important;

				.tab_line {
					position: absolute;
					bottom: 0;
					right: 0;
					left: 0;
					margin: 0 15upx;
					border-bottom: 4upx solid #FF9619;
				}
			}
		}
	}
</style>
