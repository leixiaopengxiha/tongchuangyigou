<template>
  <view class="taohuo_box">
    <view class="taohuo_box_nav">
      <view class="uni-padding-wrap">
        <view class="page-section swiper">
          <view class="page-section-spacing">
            <swiper
              class="swiper"
              :indicator-dots="indicatorDots"
              :autoplay="autoplay"
              :interval="interval"
              :duration="duration"
            >
              <swiper-item v-for="(item, index) in imgArr" :key="index">
                <image class="img" :src="item.url" mode=""></image>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
      <view
        class="taohuo_xiangqing"
        v-for="(details, index) in doutaotDetails"
        :key="index"
      >
        <view class="taohuo_xiangqing_tilte">
          {{ details.sort }}
        </view>
        <view class="taohuo_xiangqing_Price"> ￥{{ details.price }} </view>
        <view class="taohuo_xiangqing_time">
          {{ details.time }}
        </view>
        <view class="taohuo_xiangqing_conent">
          {{ details.explain }}
        </view>
      </view>
    </view>
    <view class="taohuo_box_center">
      <view class="taohuo_box_center_hr"></view>
      <view class="taohuo_box_center_pinglun">发布人</view>
      <view
        class="taohuo_box_center_wangyou"
        v-for="(details, index) in doutaotDetails"
        :key="index"
      >
        <view class="taohuo_box_center_wangyou_img">
          <image
            class="taohuo_box_center_wangyou_img"
            :src="details.photourl"
            mode=""
          ></image>
        </view>
        <view class="taohuo_box_center_wangyou_title">
          {{ details.title }}
        </view>
        <view class="taohuo_box_center_wangyou_fensi">
          粉丝:{{ details.fans.length }}
        </view>
        <view class="taohuo_box_center_wangyou_guanzhu">
          关注:{{ details.follow.length }}
        </view>
        <view @click="getguanzhu" class="taohuo_box_center_wangyou_jia"> 
			{{ msg ? '已关注' : '+关注' }}
		 </view>
      </view>
    </view>
    <view class="taohuo_box_footer">
      <view class="taohuo_box_footer_hr"></view>
      <view class="taohuo_box_footer_liuyan">全部留言</view>
      <view
        class="taohuo_box_footer_tucao"
        v-for="(item, index) in jiaLiuyan"
        :key="index"
      >
        <view class="taohuo_box_footer_tucao_img">
          <image
            class="taohuo_box_footer_tucao_img"
            :src="item.img"
            mode=""
          ></image>
        </view>
        <view class="taohuo_box_footer_tucao_title">
          {{ item.title }}
        </view>
        <view class="taohuo_box_footer_tucao_conent">
          {{ item.conent }}
        </view>
        <view class="taohuo_box_footer_tucao_giveUp">
          <uni-icons type="hand-thumbsup"></uni-icons>
          {{ item.giveUp }}
        </view>
        <view class="taohuo_box_footer_tucao_time">
          {{ item.time }}
        </view>
      </view>
    </view>
    <view class="taohuo_box_dibu">
      <view class="display">
        <view class="taohuo_box_dibu_dianzan">
          <uni-icons class="left" type="hand-thumbsup-filled"></uni-icons>
          <p @click="getdianzan">{{ zan ? '已点赞' : '点赞' }}</p>
        </view>
        <view class="taohuo_box_dibu_pinglun">
          <uni-icons class="left" type="chat-filled"></uni-icons>
          <p>评论</p>
        </view>
        <view class="taohuo_box_dibu_shoucang">
          <uni-icons class="left" type="star-filled"></uni-icons>
          <p>收藏</p>
        </view>
        <view class="taohuo_box_dibu_xiangyao"> 我想要 </view>
      </view>
    </view>
  </view>
</template>

<script>
import { time1 } from "../timer/index.js";
import { apiUrl } from "@/aip/index.js";
export default {
  data() {
    return {
		// 关注
		msg: false,
		// 点赞
		zan: 0,
      indicatorDots: true,
      autoplay: false,
      interval: 2000,
      duration: 500,
      // 轮播图假数据
      imgArr: [],
      // 轮播图下面的数据
      jiaItem: [
        {
          tilte: "透气马丁靴女",
          Price: "23",
          time: "1小时前",
          conent:
            "可搭配不同系列的堆堆袜，在配上俏皮风格的服装或者复古简约风等等都是非常好看的。",
        },
      ],
      // 发布人假数据
      jiaFabu: [
        {
          img:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
          title: "东逝水",
          fensi: "12",
          guanzhu: "15",
        },
      ],
      // 留言假数据
      jiaLiuyan: [
        {
          img:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
          title: "你咋不上天呢",
          conent:
            "可搭配不同系列的堆堆袜，再配上俏皮的风格的服装或者复古简约风等等都是非常好看的。",
          giveUp: "1",
          time: "10分钟前",
        },
      ],
      doutaotDetails: [],
    };
  },
  
  onLoad(e) {
    uni.request({
      url: `${apiUrl}/squarepanningdetails`,
      method: "POST",
      data: {
      		"id": e.taohuoInfoid
      	},
      	success: res => {
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
      			this.imgArr = res.data.data.imgurl
				this.doutaotDetails.push(res.data.data);
      			res.data.data.time = time1(res.data.data.time)
      			setTimeout(() => {
      				uni.hideLoading()
      			}, 2000)
      		}
      	},
      	fail: err => {
      	}
    });
  },
  methods: {
	  // 加关注接口
	  getguanzhu() {
	  	let a = uni.getStorageSync('admin');
	  	if (!a) {
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
	  				"username": a.username,
	  				"tousername": this.doutaotDetails[0].username
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
	  	let b = uni.getStorageSync('admin');
	  	if (!b) {
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
	  					"id": this.doutaotDetails[0]._id,
	  					"username": b.username,
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
	  					id:  this.doutaotDetails[0]._id,
	  					username: b.username,
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
};
</script>

<style lang="less" scoped>
.taohuo_box {
  width: 100vw;
  // height: 100vh;
  // background: red;

  .taohuo_box_nav {
    width: 90%;
    background: #ffffff;
    box-shadow: 0px 3px 15px #cccccc;
    margin: 20px auto;
	border-radius: 5%;
	padding: 0.5rem;
	box-sizing: border-box;
    .swiper {
      width: 100%;
      height: 34vh;

      .img {
        height: 100%;
	
      }
    }

    .taohuo_xiangqing {
      width: 100%;
      margin-top: 10px;
      position: relative;

      .taohuo_xiangqing_tilte {
        font-size: 15px;
        font-family: 微软雅黑;
        font-weight: 700;
      }

      .taohuo_xiangqing_Price {
        display: inline-block;
        color: #ff6b94;
      }

      .taohuo_xiangqing_time {
        display: inline-block;
        color: #b9b9b9;
        font-size: 12px;
        position: absolute;
        top: 20px;
        right: 10px;
      }

      .taohuo_xiangqing_conent {
        font-size: 15px;
        color: #a9a9a9;
      }
    }
  }

  .taohuo_box_center {
    width: 90%;
    // height: 100px;
    background: #ffffff;
    box-shadow: 0px 3px 15px #cccccc;
    margin: 20px auto;
	border-radius: 5%;
	padding:0.5rem;
	box-sizing: border-box;
    .taohuo_box_center_hr {
      float: left;
      width: 5px;
      height: 21px;
      border-radius: 5px;
      background: #007aff;
    }

    .taohuo_box_center_pinglun {
      margin-left: 10px;
    }

    .taohuo_box_center_wangyou {
      width: 100%;
      height: 79px;
      // background: red;
      overflow: hidden;

      .taohuo_box_center_wangyou_img {
        width: 45px;
        height: 45px;
        border-radius: 50px;
        float: left;
        margin-top: 10px;
      }

      .taohuo_box_center_wangyou_title {
        font-size: 15px;
        font-family: 微软雅黑;
        font-weight: 700;
        margin-top: 25px;
      }

      .taohuo_box_center_wangyou_fensi {
        display: inline-block;
        font-size: 12px;
        color: #9f9f9f;
      }

      .taohuo_box_center_wangyou_guanzhu {
        display: inline-block;
        font-size: 12px;
        color: #9f9f9f;
      }

      .taohuo_box_center_wangyou_jia {
        float: right;
        margin-top: -15px;
        width: 85px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
        background: #28d2d1;
      }
    }
  }
  .taohuo_box_footer {
    width: 90%;

    background: #ffffff;
    box-shadow: 0px 3px 15px #cccccc;
    margin: 20px auto;
	border-radius: 5%;
	padding:0.5rem;
	box-sizing: border-box;
    .taohuo_box_footer_hr {
      float: left;
      width: 5px;
      height: 21px;
      border-radius: 5px;
      background: #007aff;
    }
    .taohuo_box_footer_liuyan {
      margin-left: 10px;
    }
    .taohuo_box_footer_tucao_img {
      width: 45px;
      height: 45px;
      border-radius: 50px;
      float: left;
    }
    .taohuo_box_footer_tucao_title {
      font-size: 15px;
      font-family: 微软雅黑;
      font-weight: 700;
      margin-top: 25px;
    }
    .taohuo_box_footer_tucao_conent {
      font-size: 12px;
      color: #adadad;
    }
    .taohuo_box_footer_tucao_giveUp {
      float: right;
      margin-top: -60px;
    }
    .taohuo_box_footer_tucao_time {
      color: #d0d0d0;
      font-size: 12px;
      margin-left: 45px;
    }
  }
  .taohuo_box_dibu {
    width: 90%;
    height: 183px;
    margin: 0 auto;
    // background: pink;
    overflow: hidden;
    .display {
      display: flex;
      justify-content: space-around;
      margin-top: 122px;
      .taohuo_box_dibu_xiangyao {
        width: 80px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: #33dab3;
        border-radius: 25px;
        margin-top: 7px;
      }
      .left {
        margin-left: 7px;
      }
    }
  }
}
</style>
