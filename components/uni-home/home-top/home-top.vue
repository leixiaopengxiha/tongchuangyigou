<template>
	<view class="swipercon">
		<swiper class="swiper" :circular='true' :autoplay='true' >
		    <swiper-item v-for="item in imgUrl" :key='item.id'>
				<view class="swiper-item">
					<image :src='item.imgurl'></image>
				</view>
		    </swiper-item>
		</swiper>
		<view class="ification">
			<view class="ifibox" @click="onIfication('手机数码')"> 
				<image src='@/static/homeimg/shuma@2x.png'></image>
				手机数码
			</view>
			<view class="ifibox" @click="onIfication('图书文具')">
				<image src='@/static/homeimg/tushu@2x.png'></image>
				图书文具
			</view>
			<view class="ifibox" @click="onIfication('女装')">
				<image src='@/static/homeimg/yifu3@2x.png'></image>
				服饰鞋包
			</view>
			<view class="ifibox" @click="onIfication('美妆')">
				<image src='@/static/homeimg/gongju.png'></image>
				美妆闲置
			</view>
			<view class="ifibox" @click="onIfication('全部')">
				<image src='@/static/homeimg/quanbu.png'></image>
				全部分类
			</view>
		</view>
	</view>
</template>

<script>
	import {apiUrl} from '@/aip/index.js'
	export default {
		name:'HomeTop',
		data() {
			return {
				imgUrl:[]
			}
		},
		mounted(){
			this.onSwiper()
		},
		methods: {
			onIfication(data){
				console.log(data)
				uni.navigateTo({
				    url:`/components/uni-home-sort/uni-home-sort?id=${data}`
				});
				
				// console.log(data)
			},
			onSwiper(){
				let _this = this
				uni.request({
					url: `${apiUrl}/swiper`,
					method:"POST",
					data: {},
					success: res => {
						
					 if(res.data.code==200){
							_this.imgUrl = res.data.data
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

<style>
	
.swipercon{
	width: 100vw;
}
/* 轮播 */
.swiper{
	width: 100%;
	height: 30vh;
}
.swiper-item{
	width: 90vw;
	height: 100%;
	margin: 0 auto;
	background: #969696; 
	border-radius: 1rem;
	overflow: hidden;
}
.swiper-item image{
	width: 100%;
	height: 100%;
}
	/* 分类 */
.ification{
	width: 90%;
	display: flex;
	margin: 1rem auto;
	justify-content: center;
	border-radius: 0.4rem;
	box-shadow: 0px 2px 0.4rem #F2F6FC;
}
.ifibox{
	width: 3rem;
	font-size: 0.75rem;
	text-align: center;
	margin: 5px;
	color: #CCCCCC;
	
}
.ifibox image{

	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}
</style>
