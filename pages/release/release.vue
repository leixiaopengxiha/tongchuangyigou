<template>
	<view class="">
		发布
	<button class="tui" @click="tuor">-</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
				
			tuor(){
				uni.switchTab({
				    url: '/pages/homes/homes'
				});
			}
		}
	}
</script>

<style>
	
.tui{
	width: 50px;
	left: 50px;
	text-align: center;
	position: fixed;
	bottom: 10px;
	left: 50%;
	margin-left: -25px;
}
</style>
