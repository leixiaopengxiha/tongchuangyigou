<template>
  <view>
    <view class="lonve-box">
      <view class="lonve-content">
        <view class="lonve-top">
          <view class="aixing"> 广场话题</view>
          <view @click="onChankans"> 查看更多></view>
        </view>
      </view>
      <view class="hua-boxs-l">
        <scroll-view class="scroll-view_H" scroll-x="true">
          <view
            class="scroll-view-item_H"
            v-for="(item,index) in listdate"
            :key="index"
			@click="onHuati(item)"
          >
            <view class="scroll-text">
              {{ item.explain }}
            </view>
            <view class="img-box">
              <image :src="item.imgurl[0].url"></image>
            </view>
            <view class="photo-box">
              <view class="text-cont">
                <view class="photo">
                  <image :src="item.photourl"></image>
                </view>
                <view class="textas">
                  <view class="nicknames">{{ item.nickname }}</view>
                  <view>粉丝:{{ item.fans.length }} 关注:{{ item.follow.length }}</view>
                </view>
              </view>
              <view>
                <view>
                  <uni-icons type="hand-thumbsup" size="13"></uni-icons>
                  <text>{{ item.thumbs }}</text>
                </view>
                <view>
                  <uni-icons type="chat" size="13"></uni-icons>
                  <text>{{ item.comment }}</text>
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
import { apiUrl } from "@/aip/index.js";
export default {
  name: "HomeMid",
  data() {
    return {
	 listdate:[]
    };
  },
 mounted() {
    this.getHuoque();
  },
  methods: {
	 onHuati(item){
		console.log(item) 
	 },
    onChankans() {
      console.log("广场话题");
    },
    getHuoque() {

      uni.request({
        url: `${apiUrl}/squaregettopic`,
        method: "POST",
        data: {
          flag: "最热",
        },
        success: (res) => {
		  this.listdate = res.data.data
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.lonve-box {
  width: 100vw;
  margin: 1rem 0;
  box-sizing: border-box;
  .lonve-content {
    width: 90vw;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 0.4rem;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 0px 2px 0.4rem #f2f6fc;
    .lonve-top {
      display: flex;
      justify-content: space-between;
      color: #cccccc;
      font-size: 0.8rem;
      .aixing {
        font-size: 1rem;
        border-left: 0.2rem solid #67c23a;
        padding-left: 0.3rem;
        color: #000000;
      }
    }
  }
  .hua-boxs-l {
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
    box-shadow: 0px 0px 0.5rem #cccccc;
    box-sizing: border-box;
    padding: 0.3rem;
    .scroll-text {
      height: 2.7rem;
      white-space: pre-wrap;
      font-size: 0.9rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 0.3rem;
      color: #999999;
    }

    .img-box image {
      width: 100%;
      height: 8rem;
      border-radius: 0.4rem;
      display: inline-block;
    }
    .photo-box {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: #c0c0c0;
    }

    .text-cont {
      display: flex;
      .textas {
        margin-left: 0.5rem;
      }
    }
    .nicknames {
      color: #999999;
    }
    .photo image {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  .scroll-view-item_H:nth-child(1) {
    margin-left: 5vw;
  }
}
</style>
