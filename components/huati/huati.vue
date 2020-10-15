<template>
 <view>
   <view class="page">
    <tabControl :current="contentIndex" :values="twoNavs"  :scrollFlag="true" :isEqually="false"
          @clickItem="onClickConent"></tabControl>
     <!-- 使用 scroll-view 来滚动内容区域 -->
    <swiper class="swiper"  @change="scollSwiper" :current="contentIndex">
     <swiper-item v-for="(twoNav, index) in twoNavs" :key="index">
     
      <scroll-view scroll-y="true" style="height: 100%;">
		  <Httj v-if='contentIndex===0'></Httj>
		  <Zx v-else-if='contentIndex===1'></Zx>
		  <Zr v-else></Zr>
	  </scroll-view>
     </swiper-item>
    </swiper>
   </view>
 </view>

</template>

<script>
 import tabControl from "@/components/tabControl-tag/tabControl-tag.vue";
 import Httj from '@/components/ht-tj/ht-tj.vue';
 import Zx from '@/components/ht-zx/ht-zx.vue';
 import Zr from '@/components/ht-zr/ht-zr.vue';
 export default {
  components: {
   tabControl,
   Httj,
   Zx,
   Zr,
  },
  data() {
   return {
    contentIndex: 0,
    twoNavs: ['推荐', '最新', '最热'],
   }
  },
  methods: {
   // 选项卡02点击事件
   onClickConent(val) {
    this.contentIndex = val.currentIndex;
   },
   // 选项卡02点击事件
   scollSwiper(e) {
    this.contentIndex = e.target.current;
   },
   
   
  }
 }
</script>

<style>
.swiper{
 width: 100vw;
 height: 100vh;
 margin-top: 0.5rem;
}
.tabList{
	padding-top: 15px;
	white-space: nowrap;
	text-align: center;
}
.tabItem{
	width: 33%;
	display: inline-block;
	position: relative;
}
</style>