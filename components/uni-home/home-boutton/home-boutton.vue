<template>
	<view>
		<!-- 没事不要瞎整 -->
		<view class="page">
			<view class="page">
				<view class="tabControl-box">
					<tabControl :current="contentIndex" :values="twoNavs"  :scrollFlag="true" :isEqually="false"
										 @clickItem="onClickConent"></tabControl>
				</view>
				
					<!-- 使用 scroll-view 来滚动内容区域 -->
				<swiper class="swiper"  @change="scollSwiper" :current="contentIndex">
					<swiper-item v-for="(twoNav, index) in twoNavs" :key="index">
						<scroll-view scroll-y="true" style="height: 100%;">
							<view class="scrlist-box">
								<view class="content-boxs" v-for="item in mockDataList" :key='item._id'>
									<image class="img-boxs" :src='item.imgurl[0].url'></image>
									<view class="text-title">
										{{item.title}}
									</view>
									<view class="price-box">
										<view class="price">
											
											￥{{item.price}}
										</view>
										<view class="shoucang">
											已有{{item.fans.length}}人收藏
										</view>
									</view>
									<view class="photourl-box">
										<view class="photourl">
											<image :src="item.photourl"></image>
										</view>
										<view class="shoucang">
											<view class="nickname">
												{{item.nickname}}
											</view>
											<view class="fensi">粉丝:{{item.fans.length}} 关注:{{item.follow.length}}</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>

</template>

<script>
	import {apiUrl} from '@/aip/index.js'
	import tabControl from "@/components/tabControl-tag/tabControl-tag.vue"
	export default {
		components: {
			tabControl,
		},
		data() {
			return {
				contentIndex: 0,
				datal:{},
				page:0,
				menu:'推荐',
				twoNavs: ['推荐', '最新', '手机数码', '家用电器','女装', '生活百货','运动户外','乐器','美妆','家具/饰品'],
				mockData:[],
				
				mockDataList:[]
			}
		},
		mounted(){
			this.onFind()
		},
		methods: {
			// 选项卡02点击事件
			onClickConent(val) {
				this.contentIndex = val.currentIndex;
				this.menu = this.twoNavs[val]
				this.page=0
				this.onFind();
			},
			// 选项卡02点击事件
			scollSwiper(e) {
				this.contentIndex = e.target.current;
				this.menu = this.twoNavs[e.target.current]
				this.page=0
				this.onFind();
			},
			// suiji() {
			// 	let count = this.mockData.length/2;
			// 	let original = new Array(); //原始数组 //给原始数组original赋值
			// 	let arr =[]
			// 	for (var i = 0; i < count; i++) {
			// 		original[i] = i + 1;
			// 	}
			// 	original.sort(function() {
			// 		return 0.5 - Math.random();
			// 	});
			// 	for (var i = 0; i < count; i++) {
			// 		arr.push(this.mockData[i])
			// 	}
			// 	this.mockDataList = arr
			// },
			onFind(){
				
				if(!this.menu) return
				// console.log(this.menu)
				if (this.menu == '推荐') {
					this.datal={
						page:this.page
					}
					this.getHouqu();
				} else if (this.menu == '最新') {
					this.datal={
						page:this.page
					}
					this.getHouqu();
				} else {
					// let arr = [];
					// for (let i = 0; i < this.mockData.length; i++) {
					// 	if (this.mockData[i]['sort'] == this.menu) {
					// 		arr.push(this.mockData[i]);
					// 	}
					// }
					// this.mockDataList = arr;
					// arr = [];
					this.datal={
						label:this.menu,
						page:this.page,
					};
					this.getHouqu()
				}
			
			},
			getHouqu(){
				uni.request({
					url: `${apiUrl}/squaregetpanning`,
					method:"POST",
					data:this.datal,
					success: res => {
						if(res.data.code==200){
							this.mockDataList= res.data.data
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		box-sizing: border-box;
	}
.swiper{
	width: 100vw;
	height: 81vh;
	margin-top: 0.5rem;
}
.tabControl-box{
	width: 100vw;
	height: 2.6rem;
	
	overflow: hidden;
	box-shadow: 0px 0px 0.5rem #CCCCCC;
	box-sizing: border-box;
}
	
.scrlist-box{
	width: 92vw;
	padding-bottom: 2rem;
	margin: auto;
	display: flex;
	flex-wrap:wrap;
}
.content-boxs{
	width: 45vw;
	margin: 0.5vw;
	padding: 0.3rem;
	box-sizing: border-box;
	box-shadow: 0px 0px 0.5rem #CCCCCC;
}
.img-boxs{
	width: 100%;
	height: 7rem;
	display: block;
	border-radius:0.5rem 0.5rem 0 0;
}
.text-title{
	width: 100%;
	font-size: 0.9rem;
	margin: 0.3rem 0;
	overflow:hidden;
	text-overflow:ellipsis;
	 white-space:nowrap;
}
.price-box{
	display: flex;
	justify-content: space-between;
}
.price{
	color: red;
}
.shoucang{
	font-size: 0.6rem;
	padding-top: 0.4rem;
	box-sizing: border-box;
}
.photourl-box{
	margin-top: 0.5rem;
	display: flex;
	color: #AAAAAA;
}
.photourl image{
	width: 2.5rem;
	text-align: center;
	height: 2.5rem;
	display: inline-block;
	border-radius: 50%;
	margin-right: 0.5rem;

}
.nickname{

	width: calc(45vw - 4rem);
	color: #333333;
	overflow:hidden; 
	text-overflow:ellipsis;
	 white-space:nowrap;
	font-size: 0.7rem;
}
</style>
