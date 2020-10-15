<template>
	<view>
	
	<view class="meas-box">
		<label>
			
			<input class="meas-inp"  type="text"  v-model="admin.nickname"/>
		</label>
		<label>
			
			<input class="meas-inp"   type="text"  v-model="admin.signature"/>
		</label>
	
		<view class="meas-btn" @click="onEdit">
			确认修改
		</view>
	</view>
</view>
</template>
<script>
	import {apiUrl} from '@/aip/index.js'
	import {mapState} from 'vuex'
	
	
	export default {
		data() {
			return {
				msg:'',
				success:'success',
			}
		},
		mounted() {
			this.onEdit()
		},
		computed: {
			...mapState(["admin"])
		},
		methods: {
			// 编辑资料
			onEdit(){
				uni.request({
						url: `${apiUrl}/editprofile`,
						method:"POST",
						data: {
							username:this.admin.username,
							nickname: this.admin.nickname,
							signature: this.admin.signature
						},
						success: res => {
							
						}
				})
						
						
						
			}
		}
	}
</script>
<style scoped>
	.meas-box{
		width: 80%;
		/* height: 200rpx; */
		margin: 10vw auto;
		background-color: #FFFFFF;
		/* hanging-punctuation: unset; */
		border-radius: 4vw;
		box-shadow: 0px 0px 0px 3px #F9F9F9;
		padding: 5vw;
		
	}
	.meas-inp{
		border-color: #878787;
		border-style: solid;
		border-top-width: 0px;
		border-right-width: 0px;
		border-bottom-width: 1px;
		border-left-width: 0px;
		margin: 23px 0px 25px 0px;
	}
	.meas-btn{
		width: 25vw;
		height: 7vh;
		background: aqua;
		text-align: center;
		line-height: 3;
		border-radius: 3vw;
		color: #fff;
		margin-left: 50vw;
	}
</style>