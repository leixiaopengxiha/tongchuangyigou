<template>
	<view>
			<view class="ht-tj" v-for="(item,index) in jiaItem" @tap="openHuatiInfo(item)" :data-huatiInfoid='jiaItem._id'>
			<view class="user">
				<image class="image" :src="item.photourl" mode=""></image>
				<view class="user-name">
					{{item.nickname}}
				</view>
				<view class="user-fensi">
					粉丝：{{item.fans.length}} 关注：{{item.follow.length}}
				</view>
			</view>
			<view class="time">
				{{item.time}}
			</view>
			<view class="img">
				<image :src="item.imgurl.url" mode=""></image>
			</view>
			<view class="text">
				{{item.explain}}
			</view>
			<view class="dis">
				<view class="giveUp">
					<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
					{{ item.thumbs }}
				</view>
				<view class="watch">
					 <uni-icons class="watch" type="eye"></uni-icons>
					 {{ item.see }}
				</view>
				<view class="comment">
					 <uni-icons class="comment" type="chat"></uni-icons>
					 {{ item.comment }}
				</view>
		   </view>
		</view>
	</view>
</template>

<script>
	import {time3} from '../timer/index.js'
	import {apiUrl} from '@/aip/index.js'
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
				jiaItem:[]
			}
		},
		mounted() {
			// 页面加载完成调用获取话题接口
			this.gethuati()
		},
		methods: {
			gethuati(){
				uni.request({
				     url:`${ apiUrl }/squaregettopic`,
				     method: "POST",
				     success: res => {
				      for(let i = 0; i<res.data.data.length; i++){
				       res.data.data[i].time = time3(res.data.data[i].time)
				       res.data.data[i].imgurl = res.data.data[i].imgurl[0]
				      }
				      this.jiaItem = res.data.data
					  console.log(this.jiaItem)
				     },
				     fail: err => {
				      console.log(err)
				     }
				    })
			},
			openHuatiInfo(item){
				uni.navigateTo({
					url: '/components/httj-img/httj-img?huatiInfoid=' + item._id,
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
.image{
	border-radius: 50%;
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
