<template>
	<view>
		<view class="lch_content" v-for="(item,index) in whole" :key='index'>
			<view>
				<view class="lch_content_shop">
					<uni-icons type="shop" size="15"></uni-icons>
					<text>
						{{item.nickname}}
					</text>
					<uni-icons type="arrowright" size="15"></uni-icons>
					
					<text v-if="item.business===1" style="float: right; color: #28D2D1;">未发货</text>
					<text v-if="item.business===2" style="float: right; color: #28D2D1;">未评价</text>
					<text v-if="item.business===3" style="float: right; color: #28D2D1;">已交易</text>
				</view>
			</view>
			<view class="lch_content_shopmain">
				<image :src='item.imgurl[0].url'></image>
				<text style="margin-right: 15px;">{{item.explain}}</text>
				<text>{{item.money}}</text>
			</view>
			<view v-if="item.business===1" class="lch_content_Confirm">未卖出</view>
			<view v-if="item.business===2||item.business===3" class="lch_content_Confirm">已卖出</view>
		</view>
	</view>
</template>

<script>
	import {apiUrl} from '@/aip/index.js'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				whole: []
			};
		},
		computed:{
			...mapState(['admin'])
		},
		mounted() {
			this.onOrder()
		},
		methods:{
			// 订单请求
			onOrder(){
				uni.request({
					url:`${apiUrl}/getallbuy`,
					method:"POST",
					data:{username:this.admin.username,
					transaction:2},
					success:({data})=>{
						console.log(data.data)
						this.whole = data.data
					}
				})
			}
		}
	}
</script>

<style scoped>
	.lch_content {
		background: #fff;
		padding: 10px 20px 30px;
		margin: 15px;
		border-radius: 10px;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		font-size: 13px;
		position: relative;

		
	}
.lch_content_shop {
			margin-bottom: 15px;
		
		}
		.lch_content_shop uni-text {
			margin-right: 3px;
		}
	.lch_content_shopmain {
		display: flex;	
	}
.lch_content_shopmain uni-image {
			width: 30vw;
			height: 30vw;
			flex-shrink: 0;
			border-radius: 10px;
			margin-right: 20px;
		}
	.lch_content_Confirm {
		width: 25vw;
		border-radius: 15px;
		padding: 10px;
		border: 1px solid #28D2D1;
	}

	.lch_content_Confirm_text,
	.lch_content_Confirm {
		color: #28D2D1;
		position: absolute;
		bottom: 15px;
		right: 15px;
		text-align: center;

		
	}
	.lch_content_Confirm_text uni-view,
	.lch_content_Confirm uni-view {
		float: right;
		padding: 10px;
		border: 1px solid #28D2D1;
		border-radius: 15px;
		margin-left: 5px;
	}
</style>
