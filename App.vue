<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["admin"]),
  },
  onLaunch: function () {
    // console.log("App Launch");
    let _this = this;
    uni.onTabBarMidButtonTap(function (e) {
      if (_this.admin.username) {
        uni.redirectTo({
          url: "/pages/release/release",
        });
      } else {
        uni.showModal({
          content: "请先登录才能发布内容",
          success: function (res) {
            if (res.confirm) {
              uni.switchTab({
                url: "/pages/mys/mys",
              });
            } else if (res.cancel) {
            }
          },
        });
      }
    });
    this.$store.dispatch("admins");
    this.$store.dispatch("loginStates");
  },
  onShow: function () {
    // console.log("App Show");
  },
  onHide: function () {
    // console.log("App Hide");
  },
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url("/static/uni.ttf");
}
/* #endif */
</style>
