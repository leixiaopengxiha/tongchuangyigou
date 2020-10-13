<template>
	<view class="swipercon">
		<swiper class="swiper" :circular='true' :autoplay='true' >
		    <swiper-item v-for="item in imgUrl" :key='item.id'>
				<view class="swiper-item">
					<image :src='item.url'></image>
				</view>
		    </swiper-item>
		</swiper>
		<view class="ification">
			<view class="ifibox" @click="()=>onIfication('数码家电')"> 
				<image src='@/static/homeimg/shuma@2x.png'></image>
				数码家电
			</view>
			<view class="ifibox" @click="()=>onIfication('图书文具')">
				<image src='@/static/homeimg/tushu@2x.png'></image>
				图书文具
			</view>
			<view class="ifibox" @click="()=>onIfication('服饰鞋包')">
				<image src='@/static/homeimg/yifu3@2x.png'></image>
				服饰鞋包
			</view>
			<view class="ifibox" @click="()=>onIfication('美妆闲置')">
				<image src='@/static/homeimg/gongju.png'></image>
				美妆闲置
			</view>
			<view class="ifibox" @click="()=>onIfication('全部分类')">
				<image src='@/static/homeimg/quanbu.png'></image>
				全部分类
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'HomeTop',
		data() {
			return {
				imgUrl:[
					{
						id:1,
						url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601985094125&di=9a95c249ccbd5e59e5baf6c4eeff8c8b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
					},
					{
						id:2,
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
					}
				]
			}
		},
		methods: {
			onIfication(data){
				console.log(data)
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
