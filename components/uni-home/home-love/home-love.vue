<template>
	<view class="lonve-box">
		<view class="lonve-content" v-for="item in lovelist" :key='item.id'>
			 <view class="lonve-top">
				<view class="aixing"> {{item.title}}</view>
				<view @click="onChankan"> 查看更多></view>
			 </view>
			<view @click="onGongyi">
				 <view class="img-box">
					 <image :src="item.url"></image>
				 </view>
				 <view class="love-pin">
					<view class="love-title"> <image class="imgs" src="@/static/homeimg/aixin@3x.png"></image> {{item.texttitle}}</view>
					<view class="love-bottom">
						<view >
							{{item.text}}
						</view>
						<view class="texta">
							<uni-icons type="hand-thumbsup" size="13"></uni-icons>
							<text>{{item.dianzan}}</text>
							<uni-icons type="eye" size="13"></uni-icons>
							<text>{{item.guankan}}</text>
							<uni-icons type="chat" size="13"></uni-icons>
							<text>{{item.comment}}</text>
						</view>
					</view>
				 </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'HomeLove',
		data() {
			return {
					
				lovelist:[
					{
						id:1,
						title:'爱心公益',
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
						texttitle:'爱回收绿色公益',
						text:'捐赠你的一份爱心 换来他人的一封温暖!',
						dianzan:123,
						guankan:123,
						comment:123,
					}
				]
			};
		},
		methods:{
			onChankan(){
				this.$store.dispatch('squareid',2)
				uni.switchTab({
					url:  `/pages/square/square`
				})
			},
			onGongyi(){
				uni.navigateTo({
				  url: `/components/gy-hd/gy-hd`
				});
			},
		}
	}
</script>

<style lang="less" scoped>
.lonve-box{
	width: 100vw;
	.lonve-content{
		width: 90vw;
		margin: auto;
		border-radius: 0.4rem;
		padding: 0.5rem;
		box-sizing: border-box;
		box-shadow: 0px 2px 0.4rem #F2F6FC;
		.lonve-top{
			display: flex;
			justify-content: space-between;
			color: #CCCCCC;
			font-size: 0.8rem;
			margin-bottom:0.7rem;
			.aixing{
				font-size: 1rem;
				border-left:0.2rem solid #67C23A ;
				padding-left:0.3rem;
				color: #000000;
			}
		}
		.img-box image{
			width: 100%;
			height: 9rem;
			border-radius: 0.5rem;
		}
		
		.love-title{
			.imgs{
				width: 0.8rem;
				height: 0.8rem;
				padding-right: 0.2rem;
			}
			color: #F56C6C;
		}
		
			
		.love-bottom{
			margin: 0.5rem 0;
			display: flex;
			justify-content: space-between;
			font-size: 0.6rem;
			color: #C0C0C0;
			text{
				font-size: 0.63rem;
				padding: 0 0.1rem;
			}
		}
		
	}
}
</style>
