<template>
	<view>
		<view class="top">
			<scroll-view scroll-x class="top-tab">
				<block v-for="(tabBar,index) in tabBars" :key="index">
					<view class="top-tab-list" :class="{'active': tabIndex==index}" @tap="toggleTab(index)">
						{{tabBar.name}}
						<view class="top-tab-line">
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<!--内容区-->
		<view class="top">
			<swiper :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(content,index) in contentList" :key="index" >
					<view class="swiper-item">{{content}}</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
	

</template>

<script>
	export default {
			data() {
				return {
					tabIndex: 0,	//选中标签栏的序列
					contentList: [
									"淘货",
									"话题",
									"公益",
								 ],
					tabBars:[
						{
							name: '淘货',
							id: 'taohuo',
							url:'./taohu.vue',
						},
						{
							name: '话题',
							id: 'huati'
						},
						{
							name: '公益',
							id: 'gongyi'
						}
					],
					swiperHeight: 0
				
				}
			},
			components:{
				
			},
			onLoad() {
				
				
			},
			methods: {
				toggleTab(index){
					console.log(index)
					this.tabIndex = index
				},
				//滑动切换swiper
				tabChange(e){
					console.log(e.detail)
					const tabIndex = e.detail.current
					this.tabIndex = tabIndex
					
				}
			}
		}
</script>

<style>
.top-tab-list{
		color: #969696;
		font-weight: bold;
		float: left;
		width: 33%;
		text-align:center;
		
	}
	.top .active{
		color: #007AFF;
	}
	
	.active .top-tab-line{
		border-bottom: 6upx solid #007AFF;
		margin: auto;
		border-radius: 20upx;
	}
	.top-tab{
		border-bottom: 1upx solid #eeeeee;
	}
	
</style>
