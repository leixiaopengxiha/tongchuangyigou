<template>
  <view class="follow-box">
    <view class="follow-context" v-for="(item, index) in people" :key="index">
      <image :src="item.photourl" mode=""></image>
      <view class="follow-mess">
        <text style="font-size: 5vw">{{ item.nickname }}</text>
        <view class="follow-synopsis">{{ item.signature }}</view>
        <!-- <text style="margin-top: 1vh; color: #909399;">{{item.synopsis}}</text> -->
        <text style="margin-top: 1vh; color: #cccccc"
          >{{ item.fans }}位粉丝</text
        >
      </view>
      <view class="follow-btn"> 已关注 </view>
    </view>
  </view>
</template>

<script>
import { apiUrl } from "@/aip/index.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    this.qingqiu();
  },
  computed: {
    ...mapState(["admin"]),
  },
  methods: {
    // 关注的人请求接口
    qingqiu() {
      uni.request({
        url: `${apiUrl}/allfollow`,
        method: "POST",
        data: { username: this.admin.username },
        success: ({ data }) => {
          // console.log(data)
          this.people = data.data;
        },
      });
    },
  },
};
</script>

<style scoped>
.follow-box {
  padding: 5vw;
}
.follow-context {
  border: 1px solid #e1f3d8;
  border-radius: 5vw;
  display: flex;
  padding: 3vw;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 3vh;
}
.follow-context image {
  width: 15vw;
  height: 15vw;
  flex-shrink: 0;
  border-radius: 3vw;
}
.follow-synopsis {
  margin-top: 1vh;
  color: #909399;
  /* padding: 1vw; */
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
  font-size: 4vw;
}

.follow-mess {
  width: 30vw;
  margin: 0vw 7vw 0px 4vw;
}
.follow-mess text {
  display: block;
}
.follow-btn {
  width: 20vw;
  height: 5vh;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 2;
  border-radius: 2vw;
  margin-top: 5vh;
}
</style>
