<template>
  <view class="container">
    <view class="nav-boxs">
      <view class="nav">
        <view
          class="box"
          :class="{ selector: item.title == menu }"
          v-for="(item, index) in navLeft"
          :key="index"
          @click="addSelect(item.title)"
          >{{ item.name }}</view
        >
      </view>
    </view>
    <view class="showBox">
      <view class="introduction">{{ menu }}</view>
      <view v-if="!loading" class="loading-boxsa">
        <a-loadMore
          color="orangered"
          padding="0 0 2rem"
          mode="loading2"
          :showTitle="false"
        ></a-loadMore>
      </view>
      <view v-else-if="mockDataList.length == 0">暂无数据</view>
      <view v-else>
        <view class="lodinss">
          <view class="mock">
            <view
              class="flex"
              v-for="(item, index) in mockDataList"
              :key="index"
              @click="onThtjpro(item)"
            >
              <image :src="item.imgurl[0].url" mode=""></image>
              <text class="shop">{{ item.title }}</text>
              <view class="borderBox">
                <text style="font-size: 10px; color: #ff779d">￥</text>
                <text style="font-size: 12px; color: #ff779d">{{
                  item.price
                }}</text>
                <text style="float: right; font-size: 10px; margin-top: 0.5vh"
                  >已有{{ item.follow.length }}人收藏</text
                >
              </view>
              <view class="user">
                <image :src="item.photourl" class="userIcon" mode=""></image>
                <view class="userInfo">
                  <text class="userName">{{ item.nickname }}</text>
                  <view class="fansBox">
                    <text class="fans">粉丝:{{ item.fans.length }}</text>
                    <text class="collect">关注:{{ item.follow.length }}</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="lods">
          <view v-if="show">
            {{ text }}
          </view>
          <a-loadMore
            v-else
            color="orangered"
            padding="0 0 2.4rem"
            mode="loading2"
            :showTitle="false"
          ></a-loadMore>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { apiUrl } from "@/aip/index.js";
export default {
  data() {
    return {
      menu: "全部",
      navLeft: [
        {
          num: 0,
          name: "全部",
          title: "全部",
        },
        {
          num: 1,
          name: "热门推荐",
          title: "推荐",
        },
        {
          num: 2,
          name: "手机数码",
          title: "手机数码",
        },
        {
          num: 3,
          name: "家用电器",
          title: "家用电器",
        },
        {
          num: 4,
          name: "女装",
          title: "女装",
        },
        {
          num: 5,
          name: "生活百货",
          title: "生活百货",
        },
        {
          num: 6,
          name: "运动户外",
          title: "运动户外",
        },
        {
          num: 7,
          name: "乐器",
          title: "乐器",
        },
        {
          num: 8,
          name: "美妆",
          title: "美妆",
        },
        {
          num: 9,
          name: "家具/饰品",
          title: "家具/饰品",
        },
        {
          num: 10,
          name: "图书文具",
          title: "图书文具",
        },
      ],
      show: true,
      jia: true,
      loading: false,
      text: "上滑加载更多",
      page: 0,
      mockData: [],
      mockDataList: [],
    };
  },
  onLoad: function (option) {
    this.menu = option.id;
    this.onFind();
  },
  onReachBottom() {
    console.log("页面到底了");
    if (this.show && this.jia) {
      this.show = false;
      this.page = this.page + 1;
      this.onFind();
    }
  },
  methods: {
    onThtjpro(item) {
      console.log(item._id);
      uni.navigateTo({
        url: `/components/thtj-product/thtj-product?taohuoInfoid=${item._id}`,
      });
    },
    addSelect(content) {
      if (this.menu == content) return;
      this.menu = content;
      this.page = 0;
      this.jia = true;
      this.loading = false;
      this.text = "上滑加载更多";
      this.onFind();
      this.mockDataList = [];
    },

    onFind() {
      if (!this.menu) return;
      let datal = {};
      if (this.menu == "全部") {
        datal = {
          page: this.page,
        };
        this.getHouqu(datal);
      } else if (this.menu == "推荐") {
        datal = {
          page: this.page,
        };
        this.getHouqu(datal);
      } else {
        datal = {
          label: this.menu,
          page: this.page,
        };
        this.getHouqu(datal);
      }
    },
    getHouqu(datal) {
      uni.request({
        url: `${apiUrl}/squaregetpanning`,
        method: "POST",
        data: datal,
        success: (res) => {
          if (res.data.code == 201) {
            this.text = "没有更多了";
            this.show = true;
            this.jia = false;
            this.loading = true;
          }

          if (res.data.code == 200) {
            if (res.data.data.length == 10) {
              this.mockDataList = [...this.mockDataList, ...res.data.data];
              this.show = true;
              this.loading = true;
            } else {
              this.mockDataList = [...this.mockDataList, ...res.data.data];
              this.text = "没有更多了";
              this.show = true;
              this.jia = false;
              this.loading = true;
            }
          }
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 20%;
  color: #b2b2c9;
}

.userIcon {
  float: left;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  margin: 4%;
}
.userInfo {
  width: 55%;
  height: 80%;
  margin-top: 2%;
  margin-right: 10%;
  float: right;
}
.userName {
  display: block;
  height: 2vh;
  line-height: 2vh;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fansBox {
  width: 100%;
  margin-left: 3%;
}
.fans {
  float: left;
  font-size: 4px;
}
.collect {
  font-size: 4px;
}
.fans,
.collect {
  font-size: 6px;
  display: block;
  margin-left: 0;
}
.container {
  width: 100vw;
  height: 94.5vh;
}

.nav-boxs {
  width: 20%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.selector {
  width: 100%;
  height: 3vh;
  background: #28d2d1;
  text-align: center;
  line-height: 3vh;
  color: #ffffff !important;
  font-size: 14px;
}

.box {
  width: 100%;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  color: #b2b2c9;
  font-size: 14px;
}

.showBox {
  width: 80%;
  padding-bottom: 1rem;
  float: right;
}

.introduction {
  width: 95%;
  height: 3vh;
  line-height: 3vh;
  padding-left: 5%;
  color: #b2b2c9;
  font-size: 14px;
}

.mock {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex {
  width: 42%;
  height: 25vh;
  margin-left: 5%;
  margin-top: 3%;
  border-radius: 8%;
  padding-bottom: 0.2rem;
  overflow: hidden;
  box-shadow: 1px 1px 1px 1px #b2b2c9;
}

.flex > image {
  width: 100%;
  height: 60%;
}

.shop {
  display: block;
  width: 95%;
  height: 1.8vh;
  margin-left: 5%;
  line-height: 1.5vh;
  font-size: 12px;
  color: #b2b2c9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.borderBox {
  width: 90%;
  height: 2.5vh;
  line-height: 2.5vh;
  color: #b2b2c9;
  border-bottom: 0.5px solid #b2b2c9;
  margin-left: 5%;
}
.lods {
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  color: rgb(212, 206, 206);
  font-size: 0.8rem;
}
.lodinss {
  width: 100%;
  min-height: 88vh;
}
.loading-boxsa {
  width: 100%;
  text-align: center;
  padding-top: 5rem;
}
</style>
