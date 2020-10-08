<template>
	<view class="search-box">
		<view class="sou-box">
			<view class="previous" @click="onPrevious">
				<image src="@/static/homeimg/jiantou.png" mode=""></image>
			</view>
			<view class="input-box">
				<input class="input" type="text" v-model="inputevaule" placeholder="搜索你想要的商品" />
			</view>
			<view class="sousuo">搜索</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputevaule:'',
			}
		},
		methods: {
			onPrevious(){
				uni.navigateBack({
				    delta: 1,
				    animationType: 'none',
				});
			}
		}
	}
</script>

<style scoped>
.search-box{
	width: 100vw;
	padding-top: 3vh;
	background: url('@/static/homeimg/homea.png');
}
.sou-box{
	width: 100vw;
	box-sizing: border-box;
	display: flex;
	padding:0.3rem 0.5rem; 
	justify-content: space-between;

}
.previous{
	
	color: #FFFFFF;
	font-size: 2rem;
}
	
.previous image {
	width: 1rem;
	height: 3.2vh;
	display: block;
	padding-top: 0.3rem;
}
.input{
	width: 56vw;
	border: 1px solid #FFFFFF;
	padding: 0.3rem 0.6rem;
	border-radius: 20px;
	color: #FFFFFF;
}
.sousuo{
	color: #FFFFFF;
	font-size: 0.9rem;
	padding:0.32rem 1rem; 
	background: #FFA200;
	border-radius: 20px;
}
</style>
