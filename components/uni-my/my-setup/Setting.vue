<template>
  <view style="background-color: #f2f2f2; height: 100%; padding-top: 20px">
    <uni-list>
      <uni-list-item @click="Setting_news('消息设置')">消息设置</uni-list-item>
      <uni-list-item @click="Setting_news('自动回复')">自动回复</uni-list-item>
      <uni-list-item @click="Setting_news('系统权限')">系统权限</uni-list-item>
      <uni-list-item @click="Setting_news('安全中心')">安全中心</uni-list-item>
    </uni-list>
    <uni-list style="margin-top: 20px">
      <uni-list-item @click="btn">清理缓存</uni-list-item>
      <uni-popup ref="popup" type="dialog">
        <uni-popup-dialog
          type="warn"
          :duration="0"
          :before-close="true"
          @close="close"
          @confirm="confirm"
          mode="base"
          title="清除缓存"
          content="确定要清除缓存吗？"
        ></uni-popup-dialog>
      </uni-popup>
    </uni-list>
    <button type="default" class="signOut" @click="signOut">退出登录</button>
  </view>
</template>



<script>
import uniPopup from "@/components/uni-popup/uni-popup.vue";
import uniPopupMessage from "@/components/uni-popup/uni-popup-message.vue";
import uniPopupDialog from "@/components/uni-popup/uni-popup-dialog.vue";
export default {
  components: {
    uniPopup,
    uniPopupMessage,
    uniPopupDialog,
  },
  data() {
    return {};
  },
  methods: {
    btn() {
      this.$refs.popup.open();
    },
    // 消息设置的按钮
    Setting_news(data) {
      uni.navigateTo({
        url: "/components/uni-my/my-setup/Setting_news",
      });
    },
    // 点击取消按钮触发
    close(done) {
      done();
    },
    // 点击确认按钮触发
    confirm(done) {
      uni.clearStorage("FirstLogin");
      setTimeout(() => {
        uni.hideToast();
        plus.runtime.restart();
      }, 2000);
      done();
    },
    // 退出登录的按钮
    signOut() {
      // 清除缓存
      uni.clearStorage("token");
      uni.clearStorage("admin");
      this.$store.dispatch("tologin");
      // this.$store.dispatch('loginStates')

      uni.redirectTo({
        url: "/pages/login/login",
      });

      console.log("退出登录");
    },
  },
};
</script>


<style  scoped>
.signOut {
  background: red;
  color: #ffffff;
  margin: 10px;
}
</style>
