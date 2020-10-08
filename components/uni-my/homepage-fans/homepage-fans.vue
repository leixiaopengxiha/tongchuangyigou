<template>
	<view class="follow-box">
		<view class="follow-context" v-for="item in people">
			<image :src="item.img" mode=""></image>
			<view class="follow-mess">
				<text style="font-size: 5vw;">{{item.name}}</text>
				<text class="follow-synopsis">{{item.synopsis}}</text>
				<text style="margin-top: 1vh; color: #CCCCCC;">{{item.num}}位粉丝</text>
			</view>
			<view class="follow-btn" :class="item.follow==true?'':'nofollow'" @click="onchange(item)">
				{{item.follow==true?'已关注':'+关注'}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				people: [{
						id: 1,
						img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name: '飘雪victoria',
						synopsis: '90后狮子座女生。计算机专业，喜欢摄影，喜欢看书',
						num: 50,
						follow: false
					},
					{
						id: 2,
						img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name: '飘雪victoria',
						synopsis: '90后狮子座女生。计算机专业，喜欢摄影，喜欢看书',
						num: 50,
						follow: true
					},
					{
						id: 3,
						img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name: '飘雪victoria',
						synopsis: '90后狮子座女生。计算机专业，喜欢摄影，喜欢看书',
						num: 50,
						follow: false
					},
					{
						id: 4,
						img: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name: '飘雪victoria',
						synopsis: '90后狮子座女生。计算机专业，喜欢摄影，喜欢看书',
						num: 50,
						follow: true
					}
				]
			}
		},
		methods: {
			onchange(obj) {
				obj.follow = !obj.follow
			}
		}
	}
</script>

<style scoped>
	.follow-box {
		padding: 5vw;
	}

	.follow-context {
		border: 1px solid #E1F3D8;
		border-radius: 5vw;
		display: flex;
		padding: 3vw;
		box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.1);
		margin-bottom: 3vh;
	}

	.follow-context image {
		width: 15vw;
		height: 15vw;
		flex-shrink: 0;
		border-radius: 3vw;
	}

	.follow-mess {
		margin: 0vw 7vw 0px 4vw;
	}

	.follow-mess text {
		display: block;
	}

	.follow-synopsis{
		margin-top: 1vh;
		color: #909399;
		/* padding: 1vw; */
		overflow: hidden;
		/* break-all(允许在单词内换行。) */
		word-break: break-all;
		/* 超出部分省略号 */
		text-overflow: ellipsis;
		/** 对象作为伸缩盒子模型显示 **/
		display: -webkit-box;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-box-orient: vertical;
		/** 显示的行数 **/
		-webkit-line-clamp: 2;
		font-size: 4vw;
	}

	.follow-btn {
		width: 65vw;
		height: 5vh;
		border: 1px solid #ddd;
		text-align: center;
		line-height: 2;
		border-radius: 2vw;
		margin-top: 5vh;
	}

	.nofollow {
		background-color: #28D2D1;
		color: #FFFFFF;
	}
</style>
