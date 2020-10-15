<template>
	<view>
		<view class="container">
			<view class="select">
				<input type="text" :value="label" class="pre" placeholder="添加标签" @input="addLabel" />
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
	export default {
		name: 'topic',
		components: {},
		data() {
			return {
				showImg: [],
				label: '',
				topicArea:''
			}
		},
		methods: {
			// 添加标签
			addLabel(event){
				this.label= event.target.value;
			},
			// 添加描述
			addIntro(event){
				this.topicArea = event.target.value;
			},
			// 清空数组
			onReady() {
			    uni.request({
					 url: 'http://132.232.89.22:8848/cleararray',
					 method: "POST",
					 data: {username:'18501991901'},
					 success: (res) => {
					  console.log(res)
					}
			    })
			 },
			   // 提交
			 public(){
			   	if(this.label!=''&&this.topicArea!=''){
			   		uni.request({
			   			url:' http://132.232.89.22:8848/releasetopic',
			   			method:"POST",
			   			dataType:'JSON',
			   			data:{
			   				"explain":this.topicArea
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
								// console.log(tempFilePaths)
								uni.uploadFile({
									url:" http://132.232.89.22:8848/uploadphoto",
									filePath: tempFilePaths[i],
									name:'file',
									formData:{
										username:'18911613884',
									},
									success: (uploadFileRes) => {
										console.log(i,tempFilePaths.length)
										if(i == tempFilePaths.length-1){
											_this.showImg = JSON.parse(uploadFileRes.data)
										}else{
										// console.log(_this.showImg)
										}
									}
								})
							}
						}
					});
				// var _this = this;
				//     uni.chooseImage({
				//      count: 9,
				//      sizeType: ['compressed'],
				//      success: function(res) {
				//       var tempFilePaths = res.tempFilePaths;
				//       for (let i = -1; i < tempFilePaths.length; i++) {
				//        uni.uploadFile({
				//         url: 'http://132.232.89.22:8848/uploadphoto',
				//         filePath: tempFilePaths[i],
				//         name: 'file',
				//         formData: {
				//          username: '18911613884'
				//         },
				//         success: (uploadFileRes) => {
				//          console.log(i,tempFilePaths.length)
				//          if (i == tempFilePaths.length - 1) {
				//           _this.showImg = JSON.parse(uploadFileRes.data)
				//          }
				//         }
				//        });
				//       }
				//      }
				//     });
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
