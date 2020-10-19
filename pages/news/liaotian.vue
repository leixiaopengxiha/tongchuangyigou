<template>
	<view class="outBox">
		<view class="chatBox">
			<view class="leftBox">
				<image src="../../static/img/555.jpg" mode=""></image>
				<text class="chat">快递大概什么时候送过来</text>
			</view>
			<view class="rightBox">
				<text class="chat">我明天中午给你送过去</text>
				<image src="../../static/img/newicon.jpg" mode=""></image>
			</view>
			<view class="leftBox">
				<image src="../../static/img/555.jpg" mode=""></image>
				<text class="chat">可以，不着急</text>
			</view>
			<view class="rightBox">
				<text class="chat">好的，到时候联系你</text>
				<image src="../../static/img/newicon.jpg" mode=""></image>
			</view>
			<view class="leftBox">
				<text class="chat">好的</text>
				<image src="../../static/img/555.jpg" mode=""></image>
			</view>
		</view>
		<view class="sendBox">
			<image src="../../static/img/vocie.png" mode="" class="voice"></image>
			<textarea :value="message" @input="onKeyInput" placeholder="" class="textArea" />
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
	.leftBox{
		width: 100%;
		height: 8vh;
		padding: 0.5rem;
	}
	.leftBox>.chat,.rightBox>.chat{
		padding: 0.8rem;
		border-radius: 10px;
		font-size: 16px;
	}
	.leftBox>.chat{
		border: 1px #B2B2C9 solid;
		position: absolute;
		left: 23%;
		margin-top: 3%;
	}
	.leftBox>image{
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		position: absolute;
	}
	.rightBox{
		width: 100%;
		height: 8vh;
		padding: 0.5rem;
	}
	.rightBox>image{
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		position: absolute;
		right: 2%;
	}
	.rightBox>.chat{
		background: #28D2D1;
		position: absolute;
		right: 25%;
		margin-top: 3%;
	}
</style>
