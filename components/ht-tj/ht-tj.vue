<template>
	<view>
			<view class="ht-tj" v-for="(tuijian,index) in tuijians" :key="index" @tap="openHuatiInfo" :data-huatiInfoid='tuijian._id'>
			<view class="user">
				<image src="../../static/image/touxiang@2x.png" mode=""></image>
				<view class="user-name">
					{{tuijian.userName}}
				</view>
				<view class="user-fensi">
					粉丝：{{tuijian.userFensi}} 关注：{{tuijian.userGanzhu}}
				</view>
			</view>
			<view class="time">
				{{tuijian.time}}
			</view>
			<view class="img">
				<image :src="tuijian.img" mode=""></image>
			</view>
			<view class="text">
				{{tuijian.text}}
			</view>
			<view class="dis">
				<view class="giveUp">
					<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
					{{ tuijian.dz }}
				</view>
				<view class="watch">
					 <uni-icons class="watch" type="eye"></uni-icons>
					 {{ tuijian.gk }}
				</view>
				<view class="comment">
					 <uni-icons class="comment" type="chat"></uni-icons>
					 {{ tuijian.ly }}
				</view>
		   </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tuijians:[
					{	
						id:'1',
						userName:'你的支棱起来啊',
						userFensi:'98',
						userGanzhu:'26',
						time:'发布时间：2019.8.20',
						img:'../../static/image/huatitu@2x.png',
						cate:'图书文具',
						price:'￥123',
						text:'余光中先生说：“月色与雪色之间，你是第三种绝色。”..',
						
						
						dz:'123',
						gk:'222',
						ly:'2211'
					}
				],
			}
		},
		methods: {
			openHuatiInfo(e){
				let huatiInfoid = e.currentTarget.dataset.huatiInfoid
				uni.navigateTo({
					url: '/components/httj-img/httj-img?huatiInfoid=' + huatiInfoid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style>
.ht-tj{
	width: 90%;
	margin: 1vh auto;
	border: 1rpx solid #FFFFFF;
	border-radius: 12px;
	box-shadow: darkgrey 0px 0px 10px 1px;
}
.user{
	width: 48vw;
	height: 5vh;
	font-size: 21px;
	font-weight:bold;
	margin-left: 2vw;
	margin-top: 1vh;
	 display:inline-block;
}
.user image{
	width: 27%;
	height: 8vh;
	margin-left: 2vw;
	float: left;
	
}
.user-name{
	margin-top: 2vw;
	font-size: 16px;
}
.user-fensi{
	font-size: 10px;
	color: #999999;
}
.time{
	display: inline-block;
	font-size: 10px;
	color: #999999;
}
.img{
	margin-left: 2vw;
	margin-top: 3vh;
}
.img image{
	height: 25vh;
}
.text{
	font-size: 12px;
	margin-left: 3vw;
}
.dis view {
	margin-left: 11vw;
	margin-top: 2vh;
	width: 60px;
	display: inline-block;
  }
</style>
