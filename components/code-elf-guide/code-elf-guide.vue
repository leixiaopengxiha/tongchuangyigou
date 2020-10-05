<template>
	<view class="content">
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:duration="duration">
			
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/img/0-2y.png" ></image></view>

				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/img/0-2y-2.png"></image></view>
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img">
						<image src="../../static/img/0-2y-3.png" ></image>
					</view>
				</view>
				<view class="experience" @tap="launchFlag()">{{experience}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {
			launchFlag: function(){
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				uni.setStorage({
						key: 'launchFlag',
						data: true,
				});
				uni.switchTab({
					url: '/pages/homes/homes'
				});
				
			}
		}
	}
</script>
<style>
	page,
	.content{
		width: 100%;
		height: 100%;
		background-size: 100% auto ;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		text-align: center;
		position: relative;
	}
	.swiper-item-img{
		width: 100vw;
		height: 100vh;
	}
	.swiper-item-img image{
		width: 100%;
		height: 100%;
	}
	
	.jump-over,.experience{
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		font-size: 32upx;
		color: #fff;
		border: 1px solid #FFF;
		z-index: 999;
	}
	.jump-over{
		right: 45upx;
		top: 125upx;
	}
	.experience{
		width: 40%;
		text-align: center;
		left: 28%;
		padding: 2px;
		margin-right: -105upx;
		background: rgb(71,183,168);
		bottom: 12%;
	}
</style>
