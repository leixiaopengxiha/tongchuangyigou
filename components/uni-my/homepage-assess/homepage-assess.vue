<template>
  <view>
    <view class="nav-boxs">
      <view
        class="nav-assess"
        v-for="(item, index) in items"
        :key="index"
        @click="navbtn(index)"
        :class="current == index ? 'active' : ''"
      >
        {{ item }}
      </view>
    </view>
    <view class="ass-content" style="padding: 7vw 0vw 0vw 7vw">
      <view
        v-if="current === 0"
        v-for="(item, index) in assesslist"
        :key="index"
      >
        <view class="assess-box">
          <image class="ass-pic" :src="item.img" mode=""></image>
          <view class="ass-text">
            <text class="ass-name">{{ item.name }}</text>
            <text class="ass-sentence">{{ item.sentence }}</text>
            <text class="ass-time">{{ item.time }}</text>
          </view>
        </view>
      </view>
      <view
        v-if="current === 1"
        v-for="(item, index) in assesslist"
        :key="index"
      >
        <view class="assess-box" v-if="item.num == 1">
          <image class="ass-pic" :src="item.img" mode=""></image>
          <view class="ass-text">
            <text class="ass-name">{{ item.name }}</text>
            <text class="ass-sentence">{{ item.sentence }}</text>
            <text class="ass-time">{{ item.time }}</text>
          </view>
        </view>
      </view>
      <view
        v-if="current === 2"
        v-for="(item, index) in assesslist"
        :key="index"
      >
        <view class="assess-box" v-if="item.num == 2">
          <image class="ass-pic" :src="item.img" mode=""></image>
          <view class="ass-text">
            <text class="ass-name">{{ item.name }}</text>
            <text class="ass-sentence">{{ item.sentence }}</text>
            <text class="ass-time">{{ item.time }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HomepageAssess",
  data() {
    return {
      items: ["全部3", "好评3", "有图0"],
      current: 0,
      assesslist: [
        {
          id: 1,
          img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png",
          name: "来自天蓬元帅的买家",
          sentence: "货真价实！已经来了好几次了",
          time: "2019-09-22 15:17:20",
          num: 1,
        },
        {
          id: 2,
          img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png",
          name: "来自琪琪的买家",
          sentence: "货真价实！质量很好",
          time: "2019-09-22 15:17:20",
          num: 2,
        },
        {
          id: 3,
          img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png",
          name: "来自天使的买家",
          sentence: "质量挺好下次再来",
          time: "2019-09-22 15:17:20",
          num: 1,
        },
      ],
    };
  },
  methods: {
    navbtn(index) {
      if (this.current !== index) {
        this.current = index;
      }
    },
  },
};
</script>

<style scoped>
.nav-boxs {
  width: 100vw;
  display: flex;
}
.nav-assess {
  width: 20%;
  text-align: center;
  border: 1px solid #eeeeee;
  padding: 0.3rem;
  margin-right: 0.5rem;
  border-radius: 20vw;
}

.active {
  background: #28d2d1;
  color: #ffffff;
}
.segmented-control > uni-view {
  background-color: #28d2d1;
}
.assess-box {
  display: flex;
  border-bottom: 1px solid #969696;
  margin-bottom: 2vh;
}
.assess-box > .ass-pic {
  width: 10vw;
  height: 10vw;
  border-radius: 3vw;
  flex-shrink: 0;
}
.ass-text {
  margin-left: 4vw;
}
.ass-text > text {
  display: block;
  padding-top: 1vh;
}
.ass-text > .ass-name {
  padding-top: 1vh;
  color: #969696;
}
.ass-text > .ass-time {
  padding: 2vh 0;
}
</style>
