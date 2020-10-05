<template>
	<view>
		首页
		{{a}}
		<button @click="btn">点击</button>
		<as></as>
		<navigator url="/pages/about/about" hover-class="navigator-hover">
		    <button type="default">跳转到新页面</button>
		</navigator>
		 <navigator url="/pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">
		     <button type="default">跳转tab页面</button>
		 </navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:0
			}
		},
		methods: {
			btn(){
				uni.showModal({
				    title: '清除launchFlag值',
				    content: '确定要清除launchFlag值，进行重启测试？',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				            // 清除缓存
				            uni.clearStorage();
				            uni.showToast({
				                icon: 'none',
				                duration:3000,
				                title: '清除成功2秒后重启'
				            });
				            // 两秒后重启
				            setTimeout(function() {
				                uni.hideToast();
				                plus.runtime.restart();
				            }, 2000);
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
			
		},
		
		
	}
</script>

<style>

</style>
