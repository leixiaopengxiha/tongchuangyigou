<template>
	<view>

		<view class="back">
		  <view @click="clear">返回</view>
		  <view class="fa-box">发布话题</view>
		</view>
		
		<view class="container">
			
			<view class="loading-boxsa" v-if='publictu'>
			  <a-loadMore
			    color="orangered"
			    padding="0 0 2rem"
			    mode="loading2"
			    :showTitle="false"
			  ></a-loadMore>
			</view>
			<view class="midBox">
				<textarea :value="topicArea" placeholder="添加描述" class="more" @input="addIntro" />
				<view class="imgBox">
					<view class="smallImg" v-for='(item,index) in showImg' :key='index'>
						<image :src="item.url" mode=""></image>
					</view>
					<image src="../../static/img/fabu.png" class="fabu" mode="" @click='chooseImg'></image>
				</view>
			</view>
			<button type="default" class="btn" @click="public">确认发布</button>
		</view>
	</view>
</template>
<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import { mapState } from "vuex";
	export default {
		name: 'topic',
		components: {
			uniPopupMessage,
			uniPopup
		},
		data() {
			return {
				showImg: [],
				topicArea:'',
				publictu:false,
				succe:'success',
				messages:'ddd',
			}
		},
		computed: {
		  ...mapState(["admin"]),
		},
		methods: {
			// 提示框
			messa(succe,messages){
				this.succe=succe;
				this.messages=messages;
				this.$refs.popup.open()
			},
			// 添加标签
			addLabel(event){
				this.label= event.target.value;
			},
			// 添加描述
			addIntro(event){
				this.topicArea = event.target.value;
			},
			// 清空数组
			// 返回 清空数组
			clear() {
				uni.request({
				     url: 'http://132.232.89.22:8848/cleararray',
				     method: "POST",
				     data: {username:this.admin.username},
				     success: (res) => {
				      // console.log(res)
						}
				}),
				uni.navigateBack({
				  delta: 1,
				  animationType: "none",
				})
			},
			   // 提交
			 public(){
			   	if(this.topicArea!=''&& this.showImg.length!==0){
					this.publictu = true
					let _this = this
			   		uni.request({
			   			url:' http://132.232.89.22:8848/releasetopic',
			   			method:"POST",
			   			dataType:'JSON',
			   			data:{
			   				"explain":this.topicArea,
							"username":this.admin.username
			   			},
			   			success(res) {
			   				if(res.data.code==200){
								_this.publictu = false;
			   					uni.switchTab({
			   						url:'/pages/homes/homes'
			   					})
								
			   				}
			   			},
			   			err(err){
			   				console.log(err)
			   			}
			   		})
			   	}else{

					// this.$refs.popups.open()
					// this.succe='error';
					// this.messages='请输入描述和图片';
					// this.messa('error','请输入描述和图片')
				}
			  },
			// 添加图片
			chooseImg() {
				let _this = this;
					uni.chooseImage({
						count: 9,
						sizeType: ['compressed'],
						success: (res) => {
							let tempFilePaths = res.tempFilePaths;
							for (let i = 0; i < tempFilePaths.length; i++) {
								uni.uploadFile({
									url:" http://132.232.89.22:8848/uploadphoto",
									filePath: tempFilePaths[i],
									name:'file',
									formData:{
										username: this.admin.username,
									},
									success: (uploadFileRes) => {
										if(i == tempFilePaths.length-1){
											_this.showImg = JSON.parse(uploadFileRes.data)
										}
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
	.back {
	  width: 100vw;
	  height: 3.7rem;
	  background: #007aff;
	  padding-top: 1.9rem;
	  position: fixed;
	  z-index: 10;
	  top: 0;
	  left: 0;
	  z-index: 1000;
	  text-align: center;
	  font-size: 1rem;
	  color: #eeeeee;
	  overflow: hidden;
	  box-sizing: border-box;
	  display: flex;
	  justify-content: space-between;
	  text-align: center;
	  padding-left: 0.5rem;
	}
	.fa-box {
	  position: fixed;
	  z-index: -1;
	  width: 100vw;
	  text-align: center;
	}
	.container {
		width: 100vw;
		padding-top:4rem;
		position: relative;
	}
	.loading-boxsa{
		position: absolute;
		top:0rem;
		left: 0rem;
		width: 100vw;
		height:100vh;
		background: rgba(000,000,000,0.3);
		z-index: 20;
		padding-top: 50vh;
		box-sizing: border-box;
	}
	/* .back {
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
	} */

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
		margin:2rem auto;
		background: #F8F8F8;
		padding: 1.5rem 0;
		box-sizing: border-box;
	}

	.more {
		display: block;
		width: 90%;
		margin: 0 auto;
		padding: 0.5rem;
		font-size: 14px;
		color: #B2B2C9;
		border: 1px solid #FFFEFF;
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
		padding:4%;
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
