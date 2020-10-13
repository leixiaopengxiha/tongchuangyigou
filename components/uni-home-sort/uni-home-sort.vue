<template>
	<view class="container">
		<view class="nav-boxs">
			<view class="selector">
				{{menu}}
			</view>
			<view class="nav">
				<view class="box" v-for="(item,index) in navLeft" :key='index' @click="addSelect(item.title)">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="showBox">
			<view class="introduction">
				{{menu}}
			</view>
			<view class="mock">
				<view class="flex" v-for='(item,index) in mockData' :key='index'>
					<image :src="item.shopUrl" mode=""></image>
					<text class="shop">{{item.shop}}</text>
					<view class="borderBox">
						<text style="font-size: 12px;color: #FF779D;">￥</text>
						<text style="font-size: 16px;color: #FF779D;">{{item.price}}</text>
						<text style="float: right;font-size: 12px;margin-top: 0.5vh;">已有{{item.collect}}人收藏</text>
					</view>
					<view class="user">
						<image :src="item.userUrl" class="userIcon" mode=""></image>
						<view class="userInfo">
							<text class="userName">{{item.userName}}</text>
							<view class="fansBox">
								<text class="fans">粉丝:{{item.fans}}</text>
								<text class="collect">关注:{{item.follower}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'sort',
		data() {
			return {
				menu: '推荐',
				navLeft: [{
					num: 1,
					name: '热门推荐',
					title: '推荐',
				}, {
					num: 2,
					name: '手机数码',
					title: '手机数码',
				}, {
					num: 3,
					name: '家用电器',
					title: '家用电器',
				}, {
					num: 4,
					name: '女装',
					title: '女装',
				}, {
					num: 5,
					name: '生活百货',
					title: '生活百货',
				}, {
					num: 6,
					name: '运动户外',
					title: '运动户外',
				}, {
					num: 7,
					name: '乐器',
					title: '乐器',
				}, {
					num: 8,
					name: '美妆',
					title: '美妆',
				}, {
					num: 9,
					name: '家具/饰品',
					title: '家具/饰品',
				}, {
					num: 10,
					name: '儿童玩具',
					title: '儿童玩具',
				}, {
					num: 11,
					name: '宠物用品',
					title: '宠物用品',
				}, {
					num: 12,
					name: '园艺用品',
					title: '园艺用品',
				}, {
					num: 13,
					name: '健身器材',
					title: '健身器材',
				}],
				mockData: [{
					id: 1,
					shopUrl: '../../static/img/chanpin2@2x.png',
					shop: '阿狸布偶一对',
					price: 23,
					collect: 18,
					userUrl: '../../static/img/icon.jpg',
					userName: '饕餮',
					fans: 123,
					follower: 18,
				},  {
					id: 2,
					shopUrl: '../../static/img/chanpin2@2x.png',
					shop: '阿狸布偶一对',
					price: 23,
					collect: 18,
					userUrl: '../../static/img/icon.jpg',
					userName: '饕餮',
					fans: 123,
					follower: 18,
				} , {
					id: 2,
					shopUrl: '../../static/img/chanpin2@2x.png',
					shop: '阿狸布偶一对',
					price: 23,
					collect: 18,
					userUrl: '../../static/img/icon.jpg',
					userName: '饕餮',
					fans: 123,
					follower: 18,
				} , {
					id: 2,
					shopUrl: '../../static/img/chanpin2@2x.png',
					shop: '阿狸布偶一对',
					price: 23,
					collect: 18,
					userUrl: '../../static/img/icon.jpg',
					userName: '饕餮',
					fans: 123,
					follower: 18,
				} ,{
					id: 3,
					shopUrl: '../../static/img/chanpin2@2x.png',
					shop: '阿狸布偶一对',
					price: 23,
					collect: 18,
					userUrl: '../../static/img/icon.jpg',
					userName: '饕餮',
					fans: 123,
					follower: 18,
				}]
			}
		},
		methods: {
			addSelect(content) {
				this.menu = content;
			}
		},
	}
</script>

<style scoped>
	.user {
		width: 100%;
		height: 20%;
		color: #B2B2C9;
	}

	.userIcon {
		float: left;
		width: 25%;
		height: 80%;
		border-radius: 50%;
		margin: 4%;
	}
	.userInfo{
		width: 55%;
		height: 80%;
		margin-top: 3%;
		margin-right: 8%;
		float: right;
	}
	.userName{
		display: block;
		height: 2vh;
		line-height: 2vh;
		font-size: 10px;
	}
	.fansBox{
		width: 100%;
		margin-left: 3%;
	}
	.fans{
		float: left;
		font-size: 4px;
	}
	.collect{
		font-size: 4px;
	}
	.fans,.collect{
		font-size: 6px;
		display: block;
		margin-left: 0;
	}
	.container {
		width: 100vw;
		height: 94.5vh;
	}

	.nav-boxs {
		width: 20%;
		height: 100%;
		float: left;
	}

	.selector {
		width: 100%;
		height: 3vh;
		background: #28D2D1;
		text-align: center;
		line-height: 3vh;
		color: #EEEEEE;
		font-size: 14px;
	}

	.box {
		width: 100%;
		height: 5vh;
		line-height: 5vh;
		text-align: center;
		color: #B2B2C9;
		font-size: 14px;
	}

	.showBox {
		width: 80%;
		height: 100%;
		overflow: scroll;
		float: right;
	}

	.introduction {
		width: 95%;
		height: 3vh;
		line-height: 3vh;
		padding-left: 5%;
		color: #B2B2C9;
		font-size: 14px;
	}

	.mock {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		
	}

	.flex {
		width: 42%;
		height: 21vh;
		margin-left: 5%;
		margin-top: 5%;
		border-radius: 8%;
		box-shadow: 1px 1px 1px 1px #B2B2C9;
	}

	.flex>image {
		width: 100%;
		height: 55%;
	}

	.shop {
		display: block;
		width: 95%;
		height: 1.8vh;
		margin-left: 5%;
		line-height: 1.8vh;
		font-size: 14px;
		color: #B2B2C9;
	}

	.borderBox {
		width: 90%;
		height: 2.5vh;
		line-height: 2.5vh;
		color: #B2B2C9;
		border-bottom: 0.5px solid #B2B2C9;
		margin-left: 5%;
	}
</style>
