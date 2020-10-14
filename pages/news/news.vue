<template>
 <view class="newsye">
  <view class="back-box">
   <view id="scrollView" class="back-box2" :style="isTop == 10 ? 'position:fixed;background:#FFFFFF;z-index:9;top:45px' :''">
    <view class="item1"></view>
    <view class="item1" @tap='toActivity'>
     <image class="huodongNewsImg" src="../../static/img/1.png" mode=""></image>
     <p>活动消息</p >
    </view>
    <view class="item1"></view>
    <view class="item1" @tap='toSquarenews'>
     <image class="guangchangNewsImg" src="../../static/img/2.png" mode=""></image>
     <p>广场消息</p >
    </view>
    <view class="item1"></view>
   </view>
   <view class="Chatbox">
    <view class="Chatlist" v-for="(item, index) in listdata" :key="index" @tap='toChatpage(item)'>
     <view class="headportrait">
      <image :src="item.url" mode=""></image>
     </view>
     <view class="textbox" >
      <view class="textname">
       {{item.textname}}
      </view>
      <view class="redtext">
       {{item.redtext}}
      </view>
     </view>
     <view class="graytext">
      {{item.graytext}}
     </view>
    </view>
    
   </view>
  </view>
 </view>
</template>

<script>
 export default {
  data() {
   return {
    isTop: 0,
    listdata:[
     {
      "url":"../../static/img/555.jpg",
      "textname":"王思聪",
      "redtext":"交易成功",
      "graytext":"[系统] 买家确认收货,钱已到账."
     },{
      "url":"../../static/img/touxiang3@2x.jpg",
      "textname":"王健林",
      "redtext":"交易成功",
      "graytext":"[系统] 买家确认收货,钱已到账."
     },{
      "url":"../../static/img/touxiang3@2x.jpg",
      "textname":"马云",
      "redtext":"交易成功",
      "graytext":"[系统] 买家确认收货,钱已到账."
     }
     
    ]
   }
  },
  methods: {
    toActivity (){
                   uni.navigateTo({
                       url:"./move",
                       success:res =>{},
                       fail:() =>{},
                       complete:() => {}
                   });
               },
   toSquarenews(){
                   uni.navigateTo({
                       url:"./square",
                       success:res =>{},
                       fail:() =>{},
                       complete:() => {}
                   });
               },
   toChatpage(e){
    uni.navigateTo({
        url:"./Chatpage/Chatpage?name="+e.textname,
        success:res =>{
      console.log(e.url)
     },
        fail:() =>{},
        complete:() => {}
    });
   }
  },
  mounted() {

   const query = uni.createSelectorQuery().in(this);
   query.select('#scrollView').boundingClientRect(data => {
    this.myScroll = data.top
   }).exec();
  },
  onPageScroll: function(e) {
   if (e.scrollTop > this.myScroll) {
    this.isTop = 10
   } else {
    this.isTop = 0
   }
  },
 }
</script>

<style>
.newsye{
 position: relative;
}
.back-box{
 width: 100vw;
 height: 120px;
 background: #34DCAA;
 position: absolute;
 border-radius:0px 0px 25px 25px;
 top: 0;
 left: 0;
}
.back-box2{
 width: 80%;
 height: 90px;
 background: white;
 position: absolute;
 top: 65px;
 border-radius: 15px;
 box-shadow: 0px 2px 2px 1px #F4F4F3;
 left: 10%;
}
.item1{
 width: 20%;
 height: 90%;
 margin: 2% 0 2% 0;
 /* padding-top: 10px; */
 float: left;
}
.item1 p{
 text-align: center;
 padding: 0;
 font-size: 12px;
 margin: 0 0 0 0; 
 vertical-align:middle;
}
.huodongNewsImg,.guangchangNewsImg{
 width: 100%;
 height: 50px;
 margin: 5px auto;
 margin-bottom: 4px;
 display: inline-block;
 vertical-align:middle;
}
.Chatbox{
 width: 100%;
 height: 1000px;
 position: absolute;
 top: 160px;
 overflow: hidden;
 /* border-top: 2px solid red; */
}
.Chatlist{
 width: 100%;
 height: 76px; 
 border-bottom: 1px solid #F4F4F3;
}
.headportrait{
 width: 55px;
 height: 55px;
 margin: 10px 10px 5px 20px;
 border-radius: 50%;
 overflow: hidden;
 float: left;
}
.headportrait image{
 width: 100%;
 height: 100%;
 float: left;
}
.textbox{
 width: 100%-55px;
 heihgt:50px;
 margin-top: 5px;
 float: left;
}
.textname{
 /* width: 80px; */
 float: left;
 margin:15px 10px 0px 0px;
}
.redtext{
 width: 80px;
 float: left;
 font-size: 10px;
 color: red;
 margin:20px 0px 0px 0px;
}
.graytext{
 float:left;
 font-size: 13px;
 color: #AAAAAA;
 margin-top: 0px;
}
</style>