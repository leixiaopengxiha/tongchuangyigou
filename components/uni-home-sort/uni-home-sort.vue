<template>
	<view class="container">
		<view class="nav-boxs">
			<view class="nav">
				<view class="box" :class="{'selector': item.title==menu}"  v-for="(item,index) in navLeft" :key='index' @click="addSelect(item.title)">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="showBox">
			<view class="introduction">
				{{menu}}
			</view>
			<view class="mock">
				<view v-if='mockDataList.length==0'>
					暂无数据
				</view>
				<view v-else class="flex" v-for='(item,index) in mockDataList' :key='index'>
					<image :src="item.imgurl[0].url" mode=""></image>
					<text class="shop">{{item.title}}</text>
					<view class="borderBox">
						<text style="font-size: 12px;color: #FF779D;">￥</text>
						<text style="font-size: 16px;color: #FF779D;">{{item.price}}</text>
						<text style="float: right;font-size: 12px;margin-top: 0.5vh;">已有{{item.follow}}人收藏</text>
					</view>
					<view class="user">
						<image :src="item.photourl" class="userIcon" mode=""></image>
						<view class="userInfo">
							<text class="userName">{{item.nickname}}</text>
							<view class="fansBox">
								<text class="fans">粉丝:{{item.fans}}</text>
								<text class="collect">关注:{{item.follow}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {apiUrl} from '@/aip/index.js'
	export default {

		data() {
			return {
				menu: '全部',
				navLeft: [{
					num: 0,
					name: '全部',
					title: '全部',
				},{
					num: 1,
					name: '热门推荐',
					title: '推荐',
				}, {
					num: 2,
					name: '数码产品',
					title: '数码产品',
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
				},{
					num: 14,
					name: '图书文具',
					title: '图书文具',
					
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
				mockData: [],
				mockDataList:[]
			}
		},
		 onLoad: function (option) {
				this.menu = option.id
				
		    },
		mounted(){
			this.getHouqu();
			
		},
		
		methods: {
			addSelect(content) {
				this.menu = content;
				this.onFind()
			},
		
			onFind(){
				if(this.menu=='全部'){
					this.mockDataList = this.mockData
				}else if(this.menu=='推荐'){
					let arr = []
					for(let i=0;i<this.mockData.length;i++){
						if(this.mockData[i].label==this.menu){
							arr.push(this.mockData[i])
						}
					}
					this.mockDataList = arr
					arr = []
				}else{
					let arr = []
					for(let i=0;i<this.mockData.length;i++){
						if(this.mockData[i]['sort']==this.menu){
							arr.push(this.mockData[i])
						}
					}
					this.mockDataList = arr
					arr = []
				}
			
			},
			getHouqu(){
				uni.request({
					url: `${apiUrl}/squaregetpanning`,
					method:"POST",
					success: res => {
						if(res.data.code==200){
							this.mockData= res.data.data
							this.onFind()
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
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
		color: #FFFFFF !important;
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
