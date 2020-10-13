<template>
	<view class="home-box">
		<view class="topcon"></view>
		<view class="home-shou-box">
			<view class="home-shou">
				<view class="home-sinput" @click="homeShou">
					<image class="fangdajing" src="../../static/homeimg/fandajing.png"></image> 
					<text> 请输入你想要的商品名称</text>
				</view>
				<view class="home-shoues"  @click="homeShou">
					搜索
				</view>
			</view>
		</view>
		<home-top></home-top>
		<home-love></home-love>
		<home-mid></home-mid>
		<home-boutton></home-boutton>
	</view>
</template>

<script>
	import homeTop from '@/components/uni-home/home-top/home-top.vue'
	import homeLove from '@/components/uni-home/home-love/home-love.vue'
	import homeMid from '@/components/uni-home/home-mid/home-mid.vue'
	import homeBoutton from '@/components/uni-home/home-boutton/home-boutton.vue'
	export default {
		name:'homes',
		components:{
			homeTop,
			homeLove,
			homeMid,
			homeBoutton,
		},
		data() {
			return {
				
			}
		},
		methods: {
			homeShou(){
				uni.navigateTo({
				    url: '/pages/search/search',
					 animationType: 'none',
				});
			}
		}
	}
</script>

<style scoped>
	.home-box{
		width: 100vw;
		height: 100vh;
		position: relative;
		padding-top: 13vh ;
	}
.topcon{
	width: 100vw;
	height: 30vh;
	background: url('@/static/homeimg/homea.png');
	border-radius: 0 0 20% 20%;
	position: absolute;
	top:0;
	left: 0;
	z-index: -1;
}
.home-shou-box{
	width: 100vw;
	position: fixed;
	top:0;
	left: 0;
	z-index: 10;
	padding-top: 4vh;
	background: url('@/static/homeimg/homea.png');
}
.home-shou{
	width: 90vw;
	display: flex;
	margin: auto;
	justify-content:space-around;
	margin-bottom: 0.4rem;
	font-size: 0.8rem;
	
}
	
.home-sinput{
	flex: 1;
	background: rgba(255,255,255,0.5);
	color: rgba(255,255,255,1);
	padding:1vh 2vw;
	border-radius: 20px;
	text-align: center;
	margin-right:0.5rem ;
	
}
.home-sinput text{
	padding-left:1vw ;
}
.home-shoues{

	background: rgba(255,255,255,0.5);
	color: rgba(255,255,255,1);
	padding:1vh 5vw;
	border-radius: 20px;
}
.fangdajing{
	width: 0.7rem;
	height: 0.7rem;
}
</style>
