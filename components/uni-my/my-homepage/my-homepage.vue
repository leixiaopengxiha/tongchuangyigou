<template>
  <view class="my-homepage">
    <view class="homepage_bg">
      <!-- <image src='https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png'></image> -->
      <image :src="admin.photourl"></image>
    </view>
    <view class="homepage_news">
      <image class="homepage_img" :src="admin.photourl"></image>
      <view class="homepage_news_del">
        <text class="home_name">{{ admin.nickname }}</text>
        <view
          style="display: flex; justify-content: space-between; margin-top: 1vh"
        >
          <navigator
            url="/components/uni-my/my-follow/my-follow"
            hover-class="navigator-hover"
          >
            <text>
              <text>{{ admin.follow }}</text>
              <text class="homepage_news_personal">关注</text>
            </text>
          </navigator>
          <navigator
            url="/components/uni-my/homepage-fans/homepage-fans"
            hover-class="navigator-hover"
          >
            <text>
              <text>{{ admin.fans }}</text>
              <text class="homepage_news_personal">粉丝</text>
            </text>
          </navigator>
          <text>
            <text>{{ admin.thumbs }}</text>
            <text class="homepage_news_personal">点赞</text>
          </text>
        </view>
      </view>
      <view class="homepage_edit" @click="onedit"> 编辑资料 </view>
    </view>
    <view class="homepage_inp">
      <text>{{ admin.signature }}</text>
    </view>
    <view class="homepage_detail" style="border-top: 1px solid #eee">
      <uni-segmented-control
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        style-type="text"
        active-color="#28D2D1"
        style="border-bottom: 1px solid #eee"
      ></uni-segmented-control>
      <view class="content">
        <view class="content_my" v-if="current === 0">
          <view
            class="content_my_box"
            v-for="(item, index) in mylist"
            :key="index"
          >
            <image style="width: 40vw; height: 20vh" :src="item.image"></image>
            <text class="content_my_name">{{ item.name }}</text>
            <view class="content_my_price">
              <text style="font-size: 16px; color: #f56c6c">{{
                item.price
              }}</text>
              <text style="font-size: 12px; padding-top: 1vh; color: #999999"
                >已有{{ item.people }}人收藏</text
              >
            </view>
          </view>
        </view>
        <view class="content_my" v-if="current === 1">
          <view
            class="content_my_box"
            v-for="(item, index) in postlist"
            :key="index"
          >
            <image style="width: 40vw; height: 20vh" :src="item.image"></image>
            <view class="content_my_name">{{ item.name }}</view>

            <view class="mypeople">{{ item.people }}人点赞</view>
          </view>
        </view>
        <view class="" v-if="current === 2">
          <homepage-assess></homepage-assess>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
import HomepageAssess from "@/components/uni-my/homepage-assess/homepage-assess.vue";
export default {
  name: "MyHomepage",
  components: {
    HomepageAssess,
  },
  data() {
    return {
      items: ["我的2", "帖子4", "评价3"],
      current: 0,
      mylist: [
        {
          id: 1,
          name: "新款包包",
          price: "￥1000",
          people: 2,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602066009997&di=ece1e668c68fb35d5a92951c2d53f427&imgtype=0&src=http%3A%2F%2Fpic63.nipic.com%2Ffile%2F20150330%2F14041019_171152921000_2.jpg",
        },
        {
          id: 2,
          name: "新款包包",
          price: "￥1000",
          people: 24,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602066009997&di=ece1e668c68fb35d5a92951c2d53f427&imgtype=0&src=http%3A%2F%2Fpic63.nipic.com%2Ffile%2F20150330%2F14041019_171152921000_2.jpg",
        },
        {
          id: 3,
          name: "新款包包",
          price: "￥1000",
          people: 12,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602066009997&di=ece1e668c68fb35d5a92951c2d53f427&imgtype=0&src=http%3A%2F%2Fpic63.nipic.com%2Ffile%2F20150330%2F14041019_171152921000_2.jpg",
        },
        {
          id: 4,
          name: "新款包包",
          price: "￥1000",
          people: 65,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602066009997&di=ece1e668c68fb35d5a92951c2d53f427&imgtype=0&src=http%3A%2F%2Fpic63.nipic.com%2Ffile%2F20150330%2F14041019_171152921000_2.jpg",
        },
      ],
      postlist: [
        {
          id: 1,
          name: "当当当许愿时间到！啦啦啦",
          people: 3,
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3823498870,2984651727&fm=26&gp=0.jpg",
        },
        {
          id: 2,
          name: "当当当许愿时间到！啦啦啦",
          people: 78,
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3823498870,2984651727&fm=26&gp=0.jpg",
        },
        {
          id: 3,
          name: "当当当许愿时间到！啦啦啦",
          people: 33,
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3823498870,2984651727&fm=26&gp=0.jpg",
        },
        {
          id: 4,
          name: "当当当许愿时间到！啦啦啦",
          people: 456,
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3823498870,2984651727&fm=26&gp=0.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapState(["admin"]),
  },
  methods: {
    // 跳转到编辑资料
    onedit() {
      uni.navigateTo({
        url: "/components/uni-my/edit-meas/edit-meas",
      });
    },
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
};
</script>

<style scoped>
.my-homepage {
  width: 100vw;
  height: 100vh;
}

.my-homepage > .homepage_bg {
  height: 30vh;
  width: 100vw;
  position: relative;
  z-index: -1;
  opacity: 0.7;
}
.homepage_bg image {
  width: 100%;
  height: 100%;
}
.homepage_news {
  margin-top: -6vh;
  padding: 5vw;
  display: flex;
  padding: 0vw 3vw 0vw 3vw;
}
.homepage_news > .homepage_img {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  margin-bottom: 8px;
}

.homepage_news > .homepage_news_del {
  width: 55vw;
  margin-left: 3vw;
  padding-top: 2vh;
}

.home_name {
  margin-bottom: 5vh;
}
.homepage_news_personal {
  display: block;
  color: gray;
  font-size: 1rem;
}
.homepage_edit {
  width: 15vw;
  height: 5vw;
  font-size: 13px;
  margin-left: 1vw;
  margin-top: 7vh;
  border: 1px solid #28d2d1;
  -webkit-border-radius: 10vw;
  border-radius: 10vw;
  padding: 1vw;
}
.homepage_inp {
  background-color: #eee;
  text-align: center;
  border-radius: 5vw;
  padding: 4vw;
  margin: 5vw;
  font-size: 0.8rem;
}
.homepage_detail > .content {
  padding: 3vw;
}
.content_my {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content_my_box {
  width: 40vw;
  border: 1px solid #eee;
  margin: 0vw 3vw 8vw;
}
.content_my_name {
  font-size: 0.9rem;
  color: #969696;
  padding: 2vw;
  overflow: hidden;
  /* break-all(允许在单词内换行。) */
  word-break: break-all;
  /* 超出部分省略号 */
  text-overflow: ellipsis;
  /** 对象作为伸缩盒子模型显示 **/
  display: -webkit-box;
  /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-box-orient: vertical;
  /** 显示的行数 **/
  -webkit-line-clamp: 2;
}
.content_my_box > .content_my_price {
  padding: 2vw;
  display: flex;
  justify-content: space-between;
}
.mypeople {
  color: #969696;
  width: 100%;
  font-size: 0.7rem;
  text-align: right;
  padding: 0.6rem;
  box-sizing: border-box;
}
</style>
