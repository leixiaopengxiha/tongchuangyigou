<template>
	<view>
			<view class="box1" v-for="(tuijian,index) in doushuma" :key="index" @tap="openTaohuoInfo" :data-taohuoInfoid='tuijian._id'>
				<view class="title">
					{{tuijian.title}}
				</view>
				<view class="time">
					{{tuijian.time}}
				</view>
				<view class="cate">
					<span>
						{{tuijian.label}}
					</span>
				</view>
				<view class="price">
					<span>
						￥{{tuijian.price}}
					</span>
				</view>
				
				<view class="text">
					{{tuijian.explain}}
				</view>
				<view v-for="(items,index) in tuijian.imgurl" class="img" :key='index'>
					<image :src="items.url" mode=""></image>
				</view>
				<view class="user">
					<image :src="tuijian.photourl" mode=""></image>
					<view class="user-name">
						{{tuijian.nickname}}
					</view>
					<view class="user-fensi">
						粉丝：{{tuijian.userFensi}} 关注：{{tuijian.userGanzhu}}
					</view>
				</view>
				<view class="icon">
					<view class="giveUp">
						<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
						{{tuijian.thumbs}}
					</view>
					<view class="watch">
						 <uni-icons class="watch" type="eye"></uni-icons>
						{{tuijian.see}}
					</view>
					<view class="comment">
						 <uni-icons class="comment" type="chat"></uni-icons>
						 {{tuijian.comment}}
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {time3} from '../timer/index.js' 
	import {apiUrl} from '@/aip/index.js'
	export default {
		
		data() {
			return {
				doushuma:[],
			}
		},
		mounted(){
			uni.startPullDownRefresh();
			// 页面加载完成调用获取淘货推荐接口
			this.getTaohuoshuma()
		},
		methods: {
			getTaohuoshuma(){
				uni.request({
					url:`${ apiUrl }/squaregetpanning`,
					method:"POST",
					data: {
						"label": "运动户外"
					},
					success: res => {
						this.doushuma = res.data.data
						for(let i=0;i<res.data.data.length;i++){
							res.data.data[i].time=time3(res.data.data[i].time)
						}
					},
					fail: err => {}
				})
			},
			openTaohuoInfo(e){
				let taohuoInfoid = e.currentTarget.dataset.taohuoinfoid
				uni.navigateTo({
					url: '/components/thtj-product/thtj-product?taohuoInfoid=' + taohuoInfoid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style>

.box1{
	width: 90%;
	margin: 3vh auto;
	border: 1rpx solid #FFFFFF;
	border-radius: 12px;
	box-shadow: darkgrey 0px 0px 10px 1px;
}
.title{
	width: 40vw;
	height: 5vh;
	font-size: 19px;
	font-weight:bold;
	margin-left: 2vw;
	 display:inline-block;
}
.time{
	display: inline-block;
	font-size: 10px;
	margin-left: 17vw;
	color: #999999;
}
.cate{
	width: 18vw;
	height: 3vh;
	color: #2ED8BE;
	border: 1px solid #2ED8BE;
	line-height: 3vh;
	text-align: center;
	display: inline-block;
	margin-left: 2vw;
	font-size: 12px;
}
.price{
	width: 18vw;
	height: 3vh;
	color: #FF7098;
	border: 1px solid #FF7098;
	line-height: 3vh;
	text-align: center;
	display: inline-block;
	margin-left: 1vw;
	font-size: 12px;
}
.text{
	font-size: 11px;
	margin-left: 2vw;
	color: #999999;
}
.img{
	margin-top: 1vh;
	display: inline;
}
.img image{
	width: 30%;
	height: 20vh;
	margin-left: 2vw;
}
.user{
	margin-top: 1vh;
	overflow: hidden;
}
.user image{
	border-radius: 50%;
	width: 15%;
	height: 7vh;
	margin-left: 2vw;
	float: left;
	
}
.user-name{
	margin-top: 2vw;
	font-size: 16px;
}
.user-fensi{
	font-size: 10px;
	color: #999999;
}
  .icon{
	  margin-left: 20vw;
  }
  .icon view {
     width: 0px;
     display: inline-block;
	 margin-left: 16vw;
    }
</style>
