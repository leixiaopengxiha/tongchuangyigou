<template>
	<view>
		<view class="outbox">
			<view class="container" @click="free">
				<view class="box">
					<image src="../../static/img/commodity.png" mode=""></image>
				</view>
				<text class="public">发布闲置</text>
			</view>
			<view class="container" @click="topic">
				<view class="box">
					<image src="../../static/img/note.png" mode=""></image>
				</view>
				<text class="public">发布话题</text>
			</view>
		</view>
		<view class="back" @click="tuor">
			<image src="../../static/img/back.png" mode=""></image>
		</view>
		<!-- <text @click="fenlei">分类</text> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			tuor() {
				uni.switchTab({
					url: '/pages/homes/homes'
				});
			},
			free() {
				uni.navigateTo({
					url: '/components/uni-release-free/uni-release-free'
				})
			},
			topic() {
				uni.navigateTo({
					url: '/components/uni-release-topic/uni-release-topic'
				})
			},
			// fenlei(){
			// 	uni.navigateTo({
			// 		url: '/components/uni-home-sort/uni-home-sort'
			// 	})
			// }
		}
	}
</script>

<style scoped>
	.outbox {
		width: 76%;
		height: 20%;
		position: absolute;
		top: 62%;
		left: 12%;
		display: flex;
		justify-content: space-between;
	}

	.box {
		width: 80px;
		height: 80px;
		background: #2ED8C4;
		border-radius: 50%;

	}

	.container {
		width: 28%;
	}

	.box>image {
		width: 88%;
		height: 88%;
		position: relative;
		top: 6%;
		left: 6%;
	}

	.public {
		display: block;
		width: 80px;
		height: 64px;
		text-align: center;
		line-height: 64px;
		font-size: 18px;
	}

	.back {
		width: 15vw;
		height: 8vh;
		position: fixed;
		bottom: 3vh;
		left: 45%;
		background: #2ED8C4;
		border-radius: 50%;
	}

	.back>image {
		width: 100%;
		height: 100%;
	}
</style>
