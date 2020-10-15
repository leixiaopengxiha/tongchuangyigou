<template>
 <view>
  <view class="page">
   <view class="page">
    <tabControl :current="contentIndex" :values="twoNavs"  :scrollFlag="true" :isEqually="false"
          @clickItem="onClickConent"></tabControl>
     <!-- 使用 scroll-view 来滚动内容区域 -->
    <swiper class="swiper"  @change="scollSwiper" :current="contentIndex">
     <swiper-item v-for="(twoNav, index) in twoNavs" :key="index">
     
      <scroll-view scroll-y="true" style="height: 100%;">
		<Tuijian v-if='contentIndex===0'></Tuijian>
		<Zuixin v-else-if='contentIndex===1'></Zuixin>
		<Shuma v-else-if='contentIndex===2'></Shuma>
		<Tushu v-else-if='contentIndex===3'></Tushu>
		<Fushi v-else-if='contentIndex===4'></Fushi>
		<Meizhuang v-else-if='contentIndex===5'></Meizhuang>
		<Tiyu v-else></Tiyu>
	  </scroll-view>
     </swiper-item>
    </swiper>
   </view>
  </view>
 </view>

</template>

<script>
 import tabControl from "@/components/tabControl-tag/tabControl-tag.vue";
 import Tuijian from '@/components/th-tuijian/th-tuijian.vue';
 import Zuixin from '@/components/th-zuixin/th-zuixin.vue';
 import Shuma from '@/components/th-shuma/th-shuma.vue';
 import Tushu from '@/components/th-tushu/th-tushu.vue';
 import Fushi from '@/components/th-fushi/th-fushi.vue';
 import Meizhuang from '@/components/th-meizhuang/th-meizhuang.vue';
 import Tiyu from '@/components/th-tiyu/th-tiyu.vue';
 export default {
  components: {
	tabControl,
	Tuijian,
	Zuixin,
	Shuma,
	Tushu,
	Fushi,
	Meizhuang,
	Tiyu
  },
  data() {
   return {
    contentIndex: 0,
    twoNavs: ['推荐', '最新', '数码产品', '图书文具', '服饰鞋包', '美妆闲置', '体育用品'],
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
 

</style>