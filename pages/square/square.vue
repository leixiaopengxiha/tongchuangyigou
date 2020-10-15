<template>
	<view>
		<view class="tops">
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
		<view class="top-box">
						<taohuo v-if='tabIndex===0'></taohuo>
						<huati v-else-if='tabIndex===1'></huati>
						<gongyi v-else></gongyi>
		</view>
	</view>
	

</template>

<script>
	import {baseUrl} from '@/api/index.js'
	export default {
		name:'square',
			data() {
				return {
					
					tabIndex: 0,	//选中标签栏的序列
					tabBars:[
						{
							name: '淘货',
							id: 'taohuo',
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
			onPullDownRefresh() {
				setTimeout(function() {
					uni.stopPullDownRefresh()
				}, 1000);
			},
			methods: {
				toggleTab(index){
					this.tabIndex = index
				},
				//滑动切换swiper
				tabChange(e){
					const tabIndex = e.detail.current
					this.tabIndex = tabIndex
				},
			}
		}
</script>

<style scoped>
.top-tab-list{
		color: #969696;
		font-weight: bold;
		float: left;
		width: 33%;
		text-align:center;
		padding-top: 0.5rem;
		/* font-size: 36px; */
	}
	
	.tops .active{
		color: #28D2D1;
	}
	
	.active .top-tab-line{
		padding-top: 0.5rem;
		border-bottom: 6upx solid #28D2D1;
		margin: auto;
	}
	.top-tab{
		border-bottom: 1upx solid #eeeeee;
	}
		
	.top-box{
		width: 100vw;
		height: 100vh;
	}
	.swiper-box{
		width: 100%;
		height: 100%;
	}
</style>
