<template>
	<view style="background-color: #F2F2F2;height: 100%;padding-top: 20px;">
		<uni-list>
			<uni-list-item :show-switch="true" @switchChange="switchChange" showArrow="false">不接受任何消息</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				title: '',
				news: false,
				AutoReply: false,
				permissions: false,
				SecurityCenter: false
			}
		},
		onReady() {
				uni.setNavigationBarTitle({
					title: '123'
				});
		},
		methods: {
			switchChange(e) {
				if (e.value) {
					console.log('选中')
				} else {
					console.log('未选中')
				}
			}
		}
	}
</script>

<style>
</style>
