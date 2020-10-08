<template>
	<view>
		
	<view class="lonve-box">
		<view class="lonve-content" >
			 <view class="lonve-top">
				<view class="aixing"> {{squaretopic.title}}</view>
				<view @click="onChankans"> 查看更多></view>
			 </view>
		</view>
		<view class="hua-boxs-l">
		  <scroll-view class="scroll-view_H"  scroll-x="true">
		       <view  class="scroll-view-item_H " v-for="item in squaretopic.list" :key='item.id'>
				   <view class="scroll-text">
					 {{item.text}}
				   </view>
					<view class="img-box">
						<image :src='item.url'></image>
					</view>
					<view class="photo-box">
						<view class="text-cont">
							<view class="photo">
								<image :src='item.photourl'></image>
							</view>
							<view class="textas">
								<view class="nicknames">{{item.nickname}}</view>
								<view>粉丝:{{item.fensi}} 关注:{{item.guanzhu}}</view>
							</view>
						</view>
						<view>
							<view>
								<uni-icons type="hand-thumbsup" size="13"></uni-icons>
								<text>{{item.dianzan}}</text>
							</view>
							<view>
								<uni-icons type="chat" size="13"></uni-icons>
								<text>{{item.comment}}</text>
							</view>
						</view>
					</view>
			   </view>
		   
		   </scroll-view>
		</view>
	</view>
	</view>
</template>

<script>

	export default {
		name:'HomeMid',
		data() {
			return {
				
				squaretopic:{
					title:'广场话题',
					list:[
						{
							id:1,
							url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
							text:'余光中先生说:“月色与血色之间，你是第三种绝色。”',
							fensi:98,
							guanzhu:26,
							nickname:'你得支凌起来啊',
							photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
							dianzan:1827,
							comment:289,
						},
						{
							id:2,
							url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
							text:'余光中先生说:“月色与血色之间，你是第三种绝色。”',
							fensi:98,
							guanzhu:26,
							nickname:'你得支凌起来啊',
							photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
							dianzan:1827,
							comment:289,
						}
					]
				}
			}
		},
		methods: {
			onChankans(){
				console.log('广场话题')
			},
		
		}
	}
</script>

<style lang="less" scoped>
.lonve-box{
	width: 100vw;
	margin: 1rem 0;
	box-sizing: border-box;
	.lonve-content{
		width: 90vw;
		margin: auto;
		margin-bottom: 1rem;
		border-radius: 0.4rem;
		padding: 1rem;
		box-sizing: border-box;
		box-shadow: 0px 2px 0.4rem #F2F6FC;
		.lonve-top{
			display: flex;
			justify-content: space-between;
			color: #CCCCCC;
			font-size: 0.8rem;
			.aixing{
				font-size: 1rem;
				border-left:0.2rem solid #67C23A ;
				padding-left:0.3rem;
				color: #000000;
			}
		}
	}
	.hua-boxs-l{
		width: 100vw;
		height: 15.2rem;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 1rem;
	}
	.scroll-view_H {
			white-space: nowrap;
			width: 100%;
		}
		.scroll-view-item_H {
			display: inline-block;
			width: 80%;
			overflow: hidden;
			height: 15rem;
			
			margin: 0% 2%;
			margin-bottom: 1rem;
			border-radius: 0.4rem;
			box-shadow: 0px 0px 0.5rem #CCCCCC;
			box-sizing: border-box;
			padding: 0.3rem;
			.scroll-text{
				height: 2.7rem;
				white-space:pre-wrap;
				font-size: 0.9rem;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				margin-bottom: 0.3rem;
				color: #999999;
			}

			.img-box image{
				width: 100%;
				height: 8rem;
				border-radius: 0.4rem;
				display: inline-block;
			}
			.photo-box{
				display: flex;
				justify-content: space-between;
				font-size: 0.9rem;
				color: #C0C0C0;
			}
				
			.text-cont{
				display: flex;
				.textas{
					margin-left: 0.5rem;
				}
				
			}
			.nicknames{
				color: #999999;
			}
			.photo image{
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
			}
			
		}
		
		.scroll-view-item_H:nth-child(1){
			margin-left: 5vw;
		}
		
}
</style>
