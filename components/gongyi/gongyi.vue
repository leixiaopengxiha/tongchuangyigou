<template>
	<view>
		<view class="gy" v-for="(gongyi,index) in gongyis" :key="index">
				<view class="img" @tap="openhuodongInfo" :data-huodongInfoid='gongyi._id'>
					<image :src="gongyi.img" mode=""></image>
				</view>
			<view class="title">
				<view class="tiao"></view>
				<view class="zi">{{gongyi.title}}</view>
			</view>
				<view class="text"  @tap="openNewsInfo" :data-newsInfoid='gongyi._id'>
					<view class="text-img">
						<image :src="gongyi.textImg" mode=""></image>
					</view>
					<view class="text-zi">
						<text class="zi-bt">{{gongyi.textBt}}</text>
						<view class="zi-nr">
							<text>{{gongyi.textNr}}</text>
						</view>
						<view class="icon">
							<view class="giveUp">
								<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
								{{gongyi.dz}}
							</view>
							<view class="watch">
								 <uni-icons class="watch" type="eye"></uni-icons>
								{{gongyi.gk}}
							</view>
							<view class="comment">
								 <uni-icons class="comment" type="chat"></uni-icons>
								 {{gongyi.ly}}
							</view>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gongyis:[
					{	
						id:'1',
						img:'../../static/image/banner3@2x.png',
						title:'公益新闻',
						textImg:'../../static/image/chanpin2@2x.png',
						textBt:'爱心捐助让闲置物品的...',
						textNr:'9月18日玉溪市中医院、玉溪市供排水有限公司、城投党委的5名在职党员带着单位爱心人士以及泷水塘社...',
						dz:'123',
						gk:'222',
						ly:'2211'
					}
				],
			}
		},
		methods: {
			openhuodongInfo(e){
				let huodongInfoid = e.currentTarget.dataset.huodongInfoid
				uni.navigateTo({
					url: '/components/gy-hd/gy-hd?huodongInfoid=' + huodongInfoid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			openNewsInfo(e){
				let newsInfoid = e.currentTarget.dataset.newsInfoid
				uni.navigateTo({
					url: '/components/gy-new/gy-new?newsInfoid=' + newsInfoid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style>
.gy{
	width: 100vw;
	overflow: hidden;
}
.img{
	width: 90%;
	margin: 2vh auto;
	height: 20vh;
}
.img image{
	width: 100%;
	height: 100%;
}
.title{
	width: 92%;
	margin: 2vh auto;
	height: 5vh;
	display: flex;
}
.tiao{
	width: 3vw;
	height: 5vh;
	background: #28D2D1;
	border-radius:25px;
	margin-left: 5vw;
}
.zi{
	font-size: 25px;
	margin-left: 2vw;
}
.text{
	width: 86%;
	margin: 2vh auto;
	height: 26vh;
	display: flex;
}
.text-img{
	width: 50%;
	height: 26vh;
}
.text-img image{
	width: 100%;
	height: 100%;
}
.text-zi{
	width: 50%;
	height: 23vh;
}
.zi-bt{
	font-size: 13px;
	font-weight: bold;
	margin-left: 10px;
}
.zi-nr{
	width: 90%;
	height: 13vh;
	margin: 1vh auto;
}
.zi-nr text{
	font-size: 12px;
}
.icon{
	display: flex;
	font-size: 13px;
	margin-left: 1vw;
	margin-left: 9vw;
	margin-top: 5vh;
  }

</style>
