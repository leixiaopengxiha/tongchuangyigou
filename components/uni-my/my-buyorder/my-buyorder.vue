<template>
  <view>
    <view>
      <uni-segmented-control
        :current="tab.current"
        :values="tab.items"
        @clickItem="onClickItem"
        style-type="text"
        active-color="#28D2D1"
        style="position: fixed; z-index: 10; width: 100vw; background: #fff"
      ></uni-segmented-control>
      <view style="padding-top: 36px">
        <view
          v-for="(item, index) in tab.items"
          :key="index"
          v-if="tab.current === index"
        >
          <view
            class="lch_content"
            v-for="(item, indexs) in whole"
            :key="indexs"
          >
            <view>
              <view class="lch_content_shop">
                <uni-icons type="shop" size="15"></uni-icons>
                <text>
                  {{ item.nickname }}
                </text>
                <uni-icons type="arrowright" size="15"></uni-icons>

                <text
                  v-if="item.business === 1"
                  style="float: right; color: #28d2d1"
                  >已发货</text
                >
                <text
                  v-if="item.business === 2"
                  style="float: right; color: #28d2d1"
                  >未评价</text
                >
                <text
                  v-if="item.business === 3"
                  style="float: right; color: #28d2d1"
                  >交易完成</text
                >
              </view>
            </view>
            <view class="lch_content_shopmain">
              <image :src="item.imgurl[0]"></image>
              <text style="margin-right: 15px">{{ item.explain }}</text>
              <text>{{ item.money }}</text>
            </view>

            <view v-if="item.business === 1" class="lch_content_Confirm"
              >未签收</view
            >
            <view v-if="item.business === 2" class="lch_content_Confirm"
              >订单评价</view
            >
            <view v-if="item.business === 3" class="lch_content_Confirm_text">
              <view class="">联系客服</view>
              <view class="">查看详情</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { apiUrl } from "@/aip/index.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tab: {
        items: ["全部", "未签收", "订单评价", "申请售后"],
        current: 0,
      },
      whole: [],
    };
  },
  computed: {
    ...mapState(["admin"]),
  },
  mounted() {
    this.onOrder();
  },
  methods: {
    // 订单请求
    onOrder() {
      uni.request({
        url: `${apiUrl}/getallbuy`,
        method: "POST",
        data: { username: this.admin.username, transaction: 1 },
        success: ({ data }) => {
          // console.log(data)
          this.whole = data.data;
        },
      });
    },
    // 选项卡事件
    onClickItem(e) {
      if (this.tab.current !== e.currentIndex) {
        this.tab.current = e.currentIndex;
      }
      // console.log(e.currentIndex)
      if (this.tab.current == 0) {
        uni.request({
          url: `${apiUrl}/getallbuy`,
          method: "POST",
          data: { username: this.admin.username, transaction: 1 },
          success: ({ data }) => {
            // console.log(data)
            this.whole = data.data;
          },
        });
      } else {
        uni.request({
          url: `${apiUrl}/getallbuy`,
          method: "POST",
          data: {
            username: this.admin.username,
            transaction: 1,
            business: e.currentIndex,
          },
          success: ({ data }) => {
            // console.log(data)
            this.whole = data.data;
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.lch_content {
  background: #fff;
  padding: 10px 20px 30px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  font-size: 13px;
  position: relative;
}
.lch_content_shop {
  margin-bottom: 15px;
}
.lch_content_shop uni-text {
  margin-right: 3px;
}
.lch_content_shopmain {
  display: flex;
}
.lch_content_shopmain uni-image {
  width: 30vw;
  height: 30vw;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: 20px;
}
.lch_content_Confirm {
  width: 25vw;
  border-radius: 15px;
  padding: 10px;
  border: 1px solid #28d2d1;
}

.lch_content_Confirm_text,
.lch_content_Confirm {
  color: #28d2d1;
  position: absolute;
  bottom: 15px;
  right: 15px;
  text-align: center;
}
.lch_content_Confirm_text uni-view,
.lch_content_Confirm uni-view {
  float: right;
  padding: 10px;
  border: 1px solid #28d2d1;
  border-radius: 15px;
  margin-left: 5px;
}
</style>
