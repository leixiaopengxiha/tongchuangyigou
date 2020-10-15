<template>
    <view class="main">
        <code-elf-guide v-if="guidePages">
		</code-elf-guide>
    </view>
</template>
<script>
    // 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
     export default {
         data() {
             return {
                 guidePages:true
             }
         },
         onLoad(){
             this.loadExecution()
         },
         methods: {
             loadExecution: function(){
                 try {
                     // 获取本地存储中launchFlag标识
                     const value = uni.getStorageSync('launchFlag');
                     if (value) {
                         // launchFlag=true直接跳转到首页
                         uni.switchTab({
                             url: '/pages/homes/homes'
                         });
                     } else {
                         // launchFlag!=true显示引导页
                         this.guidePages = true
                     }
                 } catch(e) { 
                     // error 
                     uni.setStorage({ 
                         key: 'launchFlag', 
                         data: true, 
                         success: function () {
                             console.log('error时存储launchFlag');
                         } 
                     }); 
                     this.guidePages = true
                 }
             }
         }
     }
</script>

<style>
	 page,.main{
	        width: 100%;
	        height: 100%;
	    }
</style>