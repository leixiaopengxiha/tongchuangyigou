<template>
	<view class="outBox">
		<view class="chatBox">
			<view class="leftBox">
				
			</view>
			<view class="rightBox">
				
			</view>
		</view>
		<view class="sendBox">
			<image src="../../static/img/vocie.png" mode="" class="voice"></image>
			<textarea :value="message" @input="onKeyInput" placeholder="12W" class="textArea"/>
			<image src="../../static/img/emjoy.png" mode="" class="emjoy"></image>
			<image src="../../static/img/more.png" mode="" class="more"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				message:'',
			}
		},
		methods:{
			onKeyInput(event){
				this.message = event.target.value;
			}
		}
	}
</script>

<style scoped>
	.outBox{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.chatBox{
		width: 90%;
		height: 85vh;
		background: #007AFF;
		position: relative;
		top: 0vh;
		left: 5%;
	}
	.sendBox{
		width: 100%;
		height: 10vh;
		position: fixed;
		bottom: 0vh;
		background: #EBEBEB;
	}
	.sendBox>image{
		width: 2rem;
		height: 2rem;
	}
	.voice{
		position: relative;
		top: 2vh;
		left: 3%;
	}
	.emjoy{
		position: relative;
		left: 78%;
		top: -7.5vh;
	}
	.more{
		position: relative;
		left: 80%;
		top: -7.5vh;
	}
	.textArea{
		width:60%;
		height: 5vh;
		background: #FFFEFF;
		border-radius: 10px;
		position: relative;
		left: 15%;
		top: -3vh;
		line-height: 5vh;
	}
</style>
