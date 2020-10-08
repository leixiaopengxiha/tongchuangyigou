<template>
	<view>
		<homes></homes>
	</view>
</template>

<script>
	export default {
		name:'home',
		components:{
			
		},
		data() {
			return {

			}
		},
		methods: {
				
			btnss(){
				
			},
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
	
.fab{
/* 	position: fixed;
	left: 50%; */
	background: #007AFF;
	color: #007AFF;
}
</style>
