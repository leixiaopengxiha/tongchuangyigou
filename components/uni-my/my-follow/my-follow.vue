<template>
	<view class="follow-box">
		<view class="follow-context" v-for="item in people">
			<image :src="item.img" mode=""></image>
			<view class="follow-mess">
				<text style="font-size: 5vw;">{{item.name}}</text>
				<text style="margin-top: 1vh; color: #909399;">{{item.synopsis}}</text>
				<text style="margin-top: 1vh; color: #CCCCCC;">{{item.num}}位粉丝</text>
			</view>
			<view class="follow-btn">
				已关注
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				people:[
					{
						id:1,
						img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name:'飘雪victoria',
						synopsis:'90后狮子座女生。计算机专业，喜欢摄影，喜欢看书...',
						num:50
					},
					{
						id:2,
						img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name:'飘雪victoria',
						synopsis:'90后狮子座女生。计算机专业，喜欢摄影，喜欢看书...',
						num:50
					},
					{
						id:3,
						img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name:'飘雪victoria',
						synopsis:'90后狮子座女生。计算机专业，喜欢摄影，喜欢看书...',
						num:50
					},
					{
						id:4,
						img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/cat-11.png',
						name:'飘雪victoria',
						synopsis:'90后狮子座女生。计算机专业，喜欢摄影，喜欢看书...',
						num:50
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.follow-box{
	padding: 5vw;
}
.follow-context{
	border: 1px solid #E1F3D8;
	border-radius: 5vw;
	display: flex;
	padding: 3vw;
	box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.1);
	margin-bottom: 3vh;
}
.follow-context image{
	width: 15vw;
	height: 15vw;
	flex-shrink: 0;
	border-radius: 3vw;
}
.follow-mess{
	margin: 0vw 7vw 0px 4vw;
}
.follow-mess text{
	display: block;
}
.follow-btn{
	width: 65vw;
	    height: 5vh;
	    border: 1px solid #ddd;
	    text-align: center;
	    line-height: 2;
	    border-radius: 2vw;
	    margin-top: 5vh;
}
</style>
