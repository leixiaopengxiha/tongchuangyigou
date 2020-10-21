<template>
	<view class="content">
		<view class="box">
			<view class="ReleaseTime">
				发布时间:{{ jiaContent.time }}
			</view>
			<view class="imgage">
				<image class="url" :src="jiaContent.imgurl" mode=""></image>
			</view>
			<view class="conent">
				{{ jiaContent.explain }}
			</view>
			<view class="hr"></view>
			<view class="dis">
				<view class="giveUp">
					<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
					{{ jiaContent.thumbs }}
				</view>
				<view class="watch">
					<uni-icons class="watch" type="eye"></uni-icons>
					{{ jiaContent.see }}
				</view>
				<view class="comment">
					<uni-icons class="comment" type="chat"></uni-icons>
					{{ jiaContent.comment }}
				</view>
			</view>
		</view>
		<view class="center">
			<view class="touxiang">
				<image class="touxiang" :src="jiaContent.photourl" mode=""></image>
			</view>
			<view class="mingzi">
				{{ jiaContent.nickname }}
			</view>
			<view class="fensi">
				粉丝:{{ jiaContent.fans }}
			</view>
			<view class="guanzhu">
				关注:{{ jiaContent.follow }}
			</view>
			<view class="jiaguanzhu" @click="getguanzhu">
				{{ msg ? '已关注' : '+关注' }}
			</view>
		</view>
		<view class="quanbu">
			<view class="quanbu_hr"></view>
			<view class="quanbu_pinglun">全部评论</view>
		</view>
		<view class="wangyou" v-for="(itemss,index) in jiashuju">
			<view class="img_touxinag">
			  <image class="img_touxinag" :src="itemss.img_touxinag" mode=""></image>
			</view>
			<view class="wangming">
			  {{ itemss.wangming }}
			</view>
			<view class="pinglun">
				{{ itemss.pinglun }}
			</view>
			<view class="giveUps">
				<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
				{{ itemss.giveUp }}
			</view>
			<view class="time">
				{{ itemss.time }}
			</view>
			<view class="wangyou_hr"></view>
		</view>
		<view class="footer">
			<view class="display">
				<view class="display_dianzan">
					<p @click="getdianzan">{{ zan ? '已点赞' : '点赞' }}</p>
					<uni-icons class="giveUp" type="hand-thumbsup"></uni-icons>
				</view>
				<view class="display_pinglun">
					<p>评论</p>
					<uni-icons class="giveUp" type="chat"></uni-icons>
				</view>
				<view class="display_shoucang">
					<p>收藏</p>
					<uni-icons class="giveUp" type="star"></uni-icons>
				</view>
				<view class="display_xiangyao">
					我想要
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { apiUrl } from '../../aip/index.js'
	import { time3 } from "../timer/index.js"
	import {mapState} from 'vuex'
	export default {
		data(){
			return {
				// 关注
				msg: false,
				// 点赞
				zan: 0,
				// 假数据01
				jiaContent:{},
				// 假数据03
				jiashuju:[
					{
						"img_touxinag":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg",
						"wangming":"滚滚长江东逝水",
						"pinglun":"可搭配不同系列堆堆袜，再配上俏皮的风格的服装或者复古简约风等等都是非常好看的",
						"giveUp": "2",
						"time":"10分钟前"
					}
				]
			}
		},
		onLoad(e){

			//获取话题详情接口
				uni.request({
					url:`${ apiUrl }/squaretopicdetails`,
					method:"POST",
					data:{
						id:e.huatiInfoid
					},
					success: (res) => {
						const admindata = uni.getStorageSync('admin')
						if(admindata){
							const flag = res.data.data.thumbsArr.includes(admindata.username)
							const flags = admindata.allfollow.includes(res.data.data.username)
							if (flag) {
								this.zan = 1
							} else {
								this.zan = 0
							}
							if(flags){
								this.msg = true
							}else{
								this.msg = false
							}
						}
						if (res.data) {
							res.data.data.imgurl = res.data.data.imgurl[0].url
							res.data.data.time = time3(res.data.data.time)
							res.data.data.fans = res.data.data.fans.length
							res.data.data.follow = res.data.data.follow.length
							this.jiaContent = res.data.data
							setTimeout(() => {
								uni.hideLoading()
							}, 2000)
						}
					},
					fail: (err) => {
					}
				})
		},
		computed:{
			...mapState(['admin'])
		},
		methods: {
			  // 加关注接口
			  getguanzhu() {
			  	if (!this.admin.username) {
			  		uni.showModal({
			  			title: "提示",
			  			content: "您还没有登录，是否去登录页",
			  			success: (res) => {
			  				if (res.confirm) {
			  					uni.navigateTo({
			  						url: "/pages/login/login"
			  					})
			  				} else if (res.cancel) {
			  					return
			  				}
			  			}
			  		})
			  	} else {
			  		uni.request({
			  			url: `${ apiUrl }/followbtn`,
			  			method: "POST",
			  			data: {
			  				"username": this.admin.username,
			  				"tousername": this.jiaContent.username
			  			},
			  			success: (res) => {
							this.$store.dispatch("loginStates");
			  			}
			  		})
			  		this.msg = 1
			  	}
			  },
			  // 点赞接口
			  getdianzan() {
			  
			  	if (!this.admin.username) {
			  		uni.showModal({
			  			title: "提示",
			  			content: "您还没有登录，是否去登录页",
			  			success: (res) => {
			  				if (res.confirm) {
			  					uni.navigateTo({
			  						url: "/pages/login/login"
			  					})
			  				} else if (res.cancel) {
			  					return
			  				}
			  			}
			  		})
			  	} else {
			  		if(this.zan){
						
			  			uni.request({
			  				url: `${ apiUrl }/squarethumbscount`,
			  				method: "POST",
			  				data: {
			  					"id": this.jiaContent._id,
			  					"username": this.admin.username,
			  					"thumbs_flag": 0
			  				},
			  				success: (res) => {
								this.$store.dispatch("loginStates");
			  					this.zan = 0
			  				}
			  			})
			  		}else{
					
			  			uni.request({
			  				url: `${ apiUrl }/squarethumbscount`,
			  				method: "POST",
			  				data: {
			  					id:  this.jiaContent._id,
			  					username: this.admin.username,
			  					thumbs_flag: 1
			  				},
			  				success: (res) => {
			  					this.zan = 1
			  				}
			  			})
			  		}
			  	}
			  }
		},
	}
</script>

<style lang="less" scoped>
.box{
	width: 90%;
	margin: 35rpx auto;
	background-color: #FFFFFF;
	border-radius: 25rpx;
	box-shadow: 0px 0px 0px 3px #F9F9F9;
	// overflow: hidden;
	padding: 0.3rem;
	box-sizing: border-box;
	.ReleaseTime{
		float: right;
		font-size: 12px;
		font-weight: 700;
		font-family: 微软雅黑;
		color: gray;
		padding: 0.5rem 1rem;
	}
	.imgage .url{
		width: 100%;
		border-radius: 25px;
		margin-top: 5px;
	}
	.conent{
		font-size: 12px;
		font-family: 微软雅黑;
		font-weight: 700;
		margin-top: 5px;
	}
	.hr {
		width: 100%;
		margin: 10px auto;
		border: 1px solid #F1F1F1;
	}
	.giveUp {
		margin-left: 10px;
	}
	.watch {
		margin-left: 55px;
	}
	.comment {
		margin-left: 80px;
	}
	.dis view {
		width: 0px;
		display: inline-block;
		margin-top: 5px;
		// font-size: 10px;
	}
}
.center{
	width: 90%;
	// height: 100rpx;
	margin: 0rpx auto;
	background-color: #FFFFFF;
	border-radius: 25rpx;
	padding: 30rpx;
	box-shadow: 0px 0px 0px 3px #F9F9F9;
	overflow: hidden;
	border-radius: 5%;
	padding: 1rem;
	box-sizing: border-box;
	.touxiang{
		width: 60px;
		height: 60px;
		border-radius: 50px;
		float: left;
		margin-right: 0.5rem;
	}
	.mingzi{
		font-size: 15px;
		font-family: 微软雅黑;
		font-weight: 700;
		margin-top: 11px;
	}
	.fensi{
		font-size: 12px;
		font-family: 微软雅黑;
		font-weight: 700;
		float: left;
		color: gray;
	}
	.guanzhu{
		font-size: 12px;
		font-family: 微软雅黑;
		font-weight: 700;
		color: gray;
	}
	.jiaguanzhu{
		width: 85px;
		height: 30px;
		background: #28D2D1;
		margin-top: -35px;
		font-size: 12px;
		font-family: 微软雅黑;
		font-weight: 700;
		float: right;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
	}
}
.quanbu{
	width: 90%;
	height: 20px;
	margin: 15px auto;
	border-radius: 5%;
	padding: 1rpx;
	.quanbu_hr{
		float: left;
		width: 5px;
		height: 21px; 
		border-radius: 5px;
		background: #007AFF;
	}
	.quanbu_pinglun{
		margin-left: 10px;
	}
}
.wangyou{
	width: 80%;
	height: 120px;
	margin: 35rpx auto;
	background-color: #FFFFFF;
	border-radius: 25rpx;
	padding: 30rpx;
	box-shadow: 0px 0px 0px 3px #F9F9F9;
	overflow: hidden;
	.img_touxinag{
		width: 45px;
		height: 45px;
		border-radius: 50px;
		float: left;
	}
	.wangming{
		font-size: 15px;
		font-weight: 700;
		font-family: 微软雅黑;
		margin-top: 11px;
	}
	.pinglun{
		margin-top: -5px;
		display: inline-block;
    margin-left: 45px;
		font-size: 13px;
		font-weight: 700;
		font-family: 微软雅黑;
		color: #C0C0C0;
	}
	.giveUps{
		float: right;
		margin-top: -85px;
	}
	.time{
		font-size: 12px;
		font-weight: 700;
		color: #C0C0C0;
		display: inline-block;
		margin-left: 43px;
	}
	.wangyou_hr{
		width: 100%;
		margin: 10px auto;
		border: 1px solid #FDFDFD;
	}
}
.footer{
	width: 80%;
	height: 100rpx;
	margin: 35rpx auto;
	background-color: #FFFFFF;
	border-radius: 25rpx;
	padding: 30rpx;
	box-shadow: 0px 0px 0px 3px #F9F9F9;
	border-radius: 5%;
	padding: 1rpx;
	overflow: hidden;
	.display{
		width: 100%;
		height: 50px;
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
		.giveUp{
			// display: inline-block;
			margin-left: 10px;
		}
		.display_xiangyao{
			width: 35%;
			height: 45px;
			border-radius: 25px;
			text-align: center;
			line-height: 45px;
			background-color: #33DBB2;
		}
	}
}
</style>
