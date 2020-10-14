<template>
	<view>
		<view class="container">
			<view class="select">
				<text class="pre">{{label}}</text>
				<view class="jiantou">
					<image src="../../static/img/right.png" mode=""></image>
				</view>
			</view>
			<view class="midBox">
				<text class="more">走在初秋的田野上，感受着带着泥土味的凉风，听着树叶沙沙的声音，其实世界很美好!</text>
				<view class="imgBox">
					<view class="smallImg" v-for='(item,index) in showImg' :key='index'>
						<image :src="item.url" mode=""></image>
					</view>
					<image src="../../static/img/fabu.png" class="fabu" mode="" @click='chooseImg'></image>
				</view>
			</view>
			<button type="default" class="btn">确认发布</button>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'topic',
		components: {},
		data() {
			return {
				showImg: [{
						'url': '../../static/img/view.jpg',
						'id': 1
					},
					{
						'url': '../../static/img/view2.jpg',
						'id': 2
					}, {
						'url': '../../static/img/view1.jpg',
						'id': 3
					},
				],
				label: '添加标签'
			}
		},
		methods: {
			chooseImg() {
				var _this = this;
				count: 9,
					uni.chooseImage({
						success: (res) => {
							var tempFilePaths = res.tempFilePaths;
							if(tempFilePaths){
								_this.showImg=[]
							}
							// console.log(res)
							for (var i = 0; i < tempFilePaths.length; i++) {
								uni.saveFile({
									tempFilePath: tempFilePaths[i],
									success: (res) => {
										var savedFilePath = res.savedFilePath;
										_this.showImg.push({
											id: _this.showImg.length - 1,
											url: savedFilePath
										})
									}
								})
							}
						}
					});
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100vw;
	}

	.select {
		background: #F8F8F8;
		width: 90vw;
		height: 6vh;
		font-size: 20px;
		line-height: 6vh;
		position: relative;
		top: 2vh;
		left: 5vw;
	}

	.midBox {
		width: 90vw;
		position: relative;
		top: 3vh;
		left: 5vw;
		background: #F8F8F8;
	}

	.more {
		display: block;
		width: 93%;
		height: 5vh;
		font-size: 14px;
		position: relative;
		left: 5%;
		top: 1vh;
		color: #B2B2C9;
	}

	.imgBox {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 5%;
	}

	.smallImg {
		width: 30%;
		min-width: 30%;
		max-width: 30%;
		height: 15vh;
		margin-left: 2.2vw;
	}

	.smallImg>image {
		width: 100%;
		height: 14vh;
		display: block;
	}

	.fabu {
		width: 30%;
		height: 14vh;
		margin-left: 2.2vw;
	}

	.pre {
		margin-left: 5%;
		font-size: 14px;
	}

	.jiantou {
		width: 5vw;
		height: 3vh;
		position: relative; 
		left: 80vw;
		top: -6vh;
	}

	.jiantou>image {
		width: 5vw;
		height: 2vh;
	}

	.btn {
		width: 90vw;
		position: absolute;
		margin-top: 15vh;
		left: 5vw;
		text-align: center;
		background: #2ED8C4;
		color: #EEEEEE;
	}
</style>
