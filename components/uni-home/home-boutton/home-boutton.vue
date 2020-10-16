<template>
  <view class="consets">
    <!-- 没事不要瞎整 -->
    <view class="page">
      <view class="page">
        <view class="tabControl-box">
          <tabControl
            :current="contentIndex"
            :values="twoNavs"
            :scrollFlag="true"
            :isEqually="false"
            @clickItem="onClickConent"
          ></tabControl>
        </view>

        <!-- 使用 scroll-view 来滚动内容区域 -->
        <swiper class="swiper" @change="scollSwiper" :current="contentIndex">
          <swiper-item v-for="(twoNav, index) in twoNavs" :key="index">
            <scroll-view
              scroll-y="true"
              style="height: 100%"
              @scrolltolower="scroll"
            >
              <view v-if="loading">
                <view class="lodinss">
                  <view class="scrlist-box">
                    <view
                      class="content-boxs"
                      v-for="(item, index) in mockDataList"
                      :key="index"
                      @click="onThtjpro(item)"
                    >
                      <image class="img-boxs" :src="item.imgurl[0].url"></image>
                      <view class="text-title">
                        {{ item.title }}
                      </view>
                      <view class="price-box">
                        <view class="price"> ￥{{ item.price }} </view>
                        <view class="shoucang">
                          已有{{ item.fans.length }}人收藏
                        </view>
                      </view>
                      <view class="photourl-box">
                        <view class="photourl">
                          <image :src="item.photourl"></image>
                        </view>
                        <view class="shoucang">
                          <view class="nickname">
                            {{ item.nickname }}
                          </view>
                          <view class="fensi"
                            >粉丝:{{ item.fans.length }} 关注:{{
                              item.follow.length
                            }}</view
                          >
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
              <view v-else class="loading-boxsa">
                <a-loadMore
                  color="orangered"
                  padding="0 0 2rem"
                  mode="loading2"
                  :showTitle="false"
                ></a-loadMore>
              </view>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<script>
import { apiUrl } from "@/aip/index.js";
import tabControl from "@/components/tabControl-tag/tabControl-tag.vue";
import aLoadMore from "@/components/a-loadMore/a-loadMore";
export default {
  components: {
    tabControl,
    aLoadMore,
  },
  data() {
    return {
      show: true,
      jia: true,
      contentIndex: 0,
      loading: false,
      text: "上滑加载更多",
      page: 0,
      menu: "推荐",
      twoNavs: [
        "推荐",
        "最新",
        "手机数码",
        "家用电器",
        "女装",
        "生活百货",
        "运动户外",
        "乐器",
        "美妆",
        "家具/饰品",
      ],
      mockData: [],

      mockDataList: [],
    };
  },
  mounted() {
    this.onFind();
  },
  methods: {
    onThtjpro(item) {
      uni.navigateTo({
        url: `/components/thtj-product/thtj-product?taohuoInfoid=${item._id}`,
      });
    },
    scroll(e) {
      if (this.show && this.jia) {
        this.show = false;
        this.page = this.page + 1;

        this.onFind();
      }
    },
    // 选项卡02点击事件
    onClickConent(val) {
      this.contentIndex = val.currentIndex;
      this.menu = this.twoNavs[val];
      this.page = 0;
      this.jia = true;
      this.loading = false;
      this.text = "上滑加载更多";
      this.onFind();
      this.mockDataList = [];
    },
    // 选项卡02点击事件
    scollSwiper(e) {
      this.contentIndex = e.target.current;
      this.menu = this.twoNavs[e.target.current];
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
      if (this.menu == "推荐") {
        datal = {
          page: this.page,
        };
        this.getHouqu(datal);
      } else if (this.menu == "最新") {
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
.page {
  width: 100vw;
  box-sizing: border-box;
}
.swiper {
  width: 100vw;
  height: 81vh;
  margin-top: 0.5rem;
}
.tabControl-box {
  width: 100vw;
  height: 2.6rem;

  overflow: hidden;
  box-shadow: 0px 0px 0.5rem #cccccc;
  box-sizing: border-box;
}

.scrlist-box {
  width: 92vw;

  padding-bottom: 2rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.content-boxs {
  width: 45vw;
  margin: 0.5vw;
  padding: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 0.5rem #cccccc;
}
.img-boxs {
  width: 100%;
  height: 7rem;
  display: block;
  border-radius: 0.5rem 0.5rem 0 0;
}
.text-title {
  width: 100%;
  font-size: 0.9rem;
  margin: 0.3rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price-box {
  display: flex;
  justify-content: space-between;
}
.price {
  color: red;
}
.shoucang {
  font-size: 0.6rem;
  padding-top: 0.4rem;
  box-sizing: border-box;
}
.photourl-box {
  margin-top: 0.5rem;
  display: flex;
  color: #aaaaaa;
}
.photourl image {
  width: 2.5rem;
  text-align: center;
  height: 2.5rem;
  display: inline-block;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.nickname {
  width: calc(45vw - 4rem);
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.7rem;
}
.lods {
  width: 100%;
  text-align: center;
  padding-bottom: 1.5rem;
  color: rgb(212, 206, 206);
  font-size: 0.8rem;
}
.lodinss {
  width: 100%;
  min-height: 73vh;
}
.loading-boxsa {
  width: 100%;
  text-align: center;
  padding-top: 5rem;
}
</style>
