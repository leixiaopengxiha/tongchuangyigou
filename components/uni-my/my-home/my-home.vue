<template>
	<view class="my_box">
		<view class="my_box_bop1"></view>
		<view class="my_box_top">
			我的
			<!-- <navigator url="/components/uni-my/my-setup/Setting" hover-class="navigator-hover"> -->
			<view @click="setting">
				<uni-icons class="my_box_top_icons" type="gear" size="23" color="#fff" ></uni-icons>
			</view>
			<!-- </navigator> -->
		</view>
		<view class="my_box_main">
			<image class="my_box_main_img" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png"></image>
			<text class="my_box_text">juju的小包子</text>
			<text class="my_box_text my_box_personal">君子貌少年心，有骨有相，温文尔雅</text>
			<view style="text-align: center; display: flex; justify-content: space-between">
				<text>
					<text>3</text>
					<text class="my_box_personal">关注</text>
				</text>
				<text>
					<text>300</text>
					<text class="my_box_personal">粉丝</text>
				</text>
				<text>
					<text>3</text>
					<text class="my_box_personal">点赞</text>
				</text>
			</view>
				<navigator url="/components/uni-my/my-homepage/my-homepage" hover-class="navigator-hover">
					<view class="my_box_homepage">
						个人主页>
					</view>
				</navigator>
				
			
		</view>
		<view class="my_box_main">
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#28D2D1"></uni-segmented-control>
			<view class="content">
				<view class="order" v-if="current === 0">
					<view class="order1">
						<text>购买订单</text>
						<navigator url="/components/uni-my/my-sellorder/my-sellorder" hover-class="navigator-hover">
							<text class="order-ri">查看全部></text>
						</navigator>
						
					</view>
				</view>
				<view class="order" v-if="current === 1">
					<view class="order1">
						<text>购买订单</text>
						<navigator url="/components/uni-my/my-buyorder/my-buyorder" hover-class="navigator-hover">
							<text class="order-ri">查看全部></text>
						</navigator>
					</view>
					<view class="orderbuy">
						<view class="">
							<image src='../../../static/myimg/signing.png' style="width: 30px; height: 30px;" />
							<text>订单签收</text>
						</view>
						<view class="">
							<image src='../../../static/myimg/sign.png' style="width: 30px; height: 30px;" />
							<text>已签收</text>
						</view>
						<view class="">
							<image src='../../../static/myimg/service.png' style="width: 30px; height: 30px;" />
							<text>申请/售后</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		name: 'MyHome',
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: ['我卖的', '我买的'],
				current: 0
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			setting(){
				uni.navigateTo({
					url:'/components/uni-my/my-setup/Setting'
				})
			}
		}
	}
</script>

<style scoped>
	.my_box {
		width: 100vw;
		/* height: 100vh; */
	}

	.my_box>.my_box_top {
		padding: 6vh 0;
		text-align: center;
		color: #fff;
	}

	.my_box>.my_box_bop1 {
		background: url('https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png');
		background-attachment: fixed;
		background-size: cover;
		background-position: 50% 0;
		height: 30vh;
		width: 100vw;
		position: absolute;
		top: 0;
		z-index: -1;
	}

	.my_box_top_icons {
		position: absolute;
		right: 6vw;
		top: 6vh;
	}

	.my_box_main {
		background: #fff;
		margin: 5vw;
		padding: 5vw 10vw;
		border-radius: 3vw;
		text-align: center;
		box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.3);
	}

	.my_box_main_img {
		width: 20vw;
		height: 20vw;
		border-radius: 50%;
		margin-bottom: 8px;
	}

	.my_box_text {
		display: block;
		font-size: 5vw;
		margin-bottom: 8px;
	}

	.my_box_personal {
		display: block;
		color: gray;
		font-size: 4vw;
	}

	.my_box_homepage {
		border: 1px solid #28D2D1;
		border-radius: 20vw;
		width: 30vw;
		margin: 0 auto;
		margin-top: 5vh;
	}
	.content>.order>.order1 {
		line-height: 2.5;
		border-bottom: 1px solid #eee;
		display: flex;
		justify-content: space-between;
	}

	.content .order1 .order-ri {
		font-size: 13px;
		color:#28D2D1;
		line-height: 3;
	}

	.orderbuy {
		margin-top: 2vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 13px;
		color: #999999;
	}

	.orderbuy image,
	text {
		display: block;
	}
</style>
