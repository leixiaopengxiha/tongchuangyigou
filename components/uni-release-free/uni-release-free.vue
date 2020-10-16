<template>
	<view class="container">
		<view v-if="show">
			<view class="back" @click="fanhui">返回</view>
			<text class="sell">请选择你要售卖的宝贝分类</text>
			<view class="ullist">
				<view class='list' v-for="(item,index) in shopType" :key='index' @click="back(item.text)">
					<view class="item">
						<image :src='item.url' mode=""></image>
					</view>
					<text class="text">{{item.text}}</text>
				</view>
			</view>
		</view>
		<view class="" v-if='!show'>
			<view class="back" @click="clear">返回</view>
			<view class="select" @click="addTitle">
				<text class="pre">添加标签</text>
				<view class="jiantou">
					<image src="../../static/img/right.png" mode=""></image>
				</view>
				<text class="label">{{label}}</text>
			</view>
			<view class="midBox">
				<input type="text" placeholder="添加标题" :value="addText" class="add" @input="addIntro" /></br>
				<textarea :value="contentVal" placeholder="照片越详细越容易被人光顾呦~" @input="addcontentVal" class="more" />
				<view class="imgBox">
					<view class="smallImg" v-for='(item,index) in showImg' :key='index'>
						<image :src="item.url" mode=""></image>
					</view>
					<image src="../../static/img/fabu.png" class="fabu" @click="chooseImg"></image>
				</view>
			</view>
			<view class="price">
				<text class="pre" style="float: left;">预计价格</text>
				<input class="money" style="float: right;margin-top:2vh;" type="text" :value="this.price" placeholder="$" @input="addMoney"/>
			</view>
			<button type="default" class="btn" @click="public">提交</button>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'topic',
		components: {},
		data() {
			return {
				price:'',
				showImg: [],
				label: '无',
				show: false,
				contentVal:'',
				addText:'',
				shopType: [{
					'url': '../../static/img/gongjv@3x.png',
					'text': '生活百货'
				}, {
					'url': '../../static/img/huabna@3x.png',
					'text': '运动户外'
				}, {
					'url': '../../static/img/jiajv@3x.png',
					'text': '家具/饰品'
				}, {
					'url': '../../static/img/jita42@3x.png',
					'text': '乐器'
				}, {
					'url': '../../static/img/kouhong@3x.png',
					'text': '美妆'
				}, {
					'url': '../../static/img/shouji2@3x.png',
					'text': '手机数码'
				}, {
					'url': '../../static/img/xiyiji@3x.png',
					'text': '家用电器'
				}, {
					'url': '../../static/img/yifu 39@3x.png',
					'text': '女装'
				}]
			}
		},
		methods: {
			// 添加标题
			addIntro(event){
				this.addText= event.target.value;
			},
			// 添加价格
			addMoney(event){
				this.price= event.target.value;
			},
			// 添加描述
			addcontentVal(event){
				this.contentVal= event.target.value;
			},
			// 显示发布页面
			fanhui() {
				this.show = !this.show;
			},
			// 返回 清空数组
			clear() {
				uni.request({
				     url: 'http://132.232.89.22:8848/cleararray',
				     method: "POST",
				     data: {username:'18911613884'},
				     success: (res) => {
				      console.log(res)
						}
				}),
				uni.navigateTo({
					url: '/pages/release/release',
				})
			},
			addTitle() {
				this.show = !this.show;
			},
			back(content) {
				this.show = !this.show;
				this.label = content;
			},
			chooseImg() {
				var _this = this;
					uni.chooseImage({
						count: 9,
						sizeType:['compressed'],
						success: (res) => {
							var tempFilePaths = res.tempFilePaths;
							for (let i = 0; i < tempFilePaths.length; i++) {
								uni.uploadFile({
									url:" http://132.232.89.22:8848/uploadphoto",
									filePath: tempFilePaths[i],
									name:'file',
									formData:{
										username:'18911613884',
									},
									success: (uploadFileRes) => {
										if(i == tempFilePaths.length - 1){
											_this.showImg = JSON.parse(uploadFileRes.data)
										}
									}
								})
							}
						}
					});
			},
			   // 提交
			public(){
				if(this.label != ''&&this.price!=''&&this.addText!=''&&this.contentVal!=''){
					uni.request({
						url:'http://132.232.89.22:8848/releaseaside',
						method:"POST",
						dataType:'JSON',
						data:{
							"label":this.label,
							"username":'18911613884',
							"inputVal":this.price,
							"typeInputVal": this.addText,
							"explainInputVal":this.contentVal,
						},
						success(res) {
							console.log(res.data)
							if(res.data.code==200){
								alert(res.data.msg)
								uni.navigateTo({
									url:'/pages/release/release'
								})
							}
						},
						err(err){
							console.log(err)
						}
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.back {
		height: 3vh;
		background: #007AFF;
		width: 10vw;
		position: fixed;
		z-index: 100;
		left: 0;
		z-index: 1000;
		text-align: center;
		font-size: 14px;
		color: #EEEEEE;
		line-height: 3vh;
	}

	.container {
		width: 100vw;
	}

	.select {
		background: #F8F8F8;
		width: 90vw;
		font-size: 20px;
		position: relative;
		top: 3vh;
		left: 5vw;
		height: 9vh;
	}

	.jiantou {
		width: 5vw;
		height: 3vh;
		position: absolute;
		top: 1.5vh;
		left: 90%;
	}

	.jiantou>image {
		width: 5vw;
		height: 2vh;
	}

	.midBox {
		width: 90vw;
		position: relative;
		top: 5vh;
		left: 5vw;
		background: #F8F8F8;
	}

	.add {
		font-size: 14px;
		margin-left: 5%;
		padding-top: 3%;
		height: 3vh;
		line-height: 3vh;
	}

	.more {
		font-size: 12px;
		margin-left: 5%;
		color: #B2B2C9;
		display: block;
		height: 5vh;
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

	.price {
		background: #F8F8F8;
		width: 90vw;
		height: 6vh;
		font-size: 16px;
		line-height: 6vh;
		position: relative;
		top: 8vh;
		left: 5vw;
	}

	.pre {
		line-height: 6vh;
		margin-left: 5%;
		font-size: 14px;
	}

	.money {
		position: absolute;
		font-size: 14px;
		right: 3%;
		display: block;
	}

	.btn {
		width: 90vw;
		margin-top: 40%;
		text-align: center;
		margin-left: 5vw;
	}

	.label {
		display: block;
		width: 100%;
		height: 2vh;
		line-height: 2vh;
		font-size: 12px;
		margin-left: 5%;
		color: #B2B2C9;
	}

	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.sell {
		color: #B2B2C9;
		background: none;
		display: block;
		width: 100vw;
		height: 5vh;
		text-align: center;
		font-size: 14px;
		line-height: 5vh;
	}

	.ullist {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 3%;
		text-align: center;
	}

	.list {
		background: #F8F8F8;
		width: 40%;
		height: 24vh;
		margin-top: 2vh;
	}

	.item {
		width: 80%;
		height: 75%;
		margin-left: 10%;
		margin-top: 5%;
		border-radius: 50%;
		background: #EDEDED;
	}

	.item>image {
		width: 70%;
		height: 85%;
		margin: 5%;
	}

	.text {
		font-size: 14px;
		height: 6vh;
		line-height: 6vh;
	}
</style>
