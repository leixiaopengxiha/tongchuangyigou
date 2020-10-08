<template>
	<view>
		<view class="lch_content" v-for="item in whole">
			<view>
				<view class="lch_content_shop">
					<uni-icons type="shop" size="15"></uni-icons>
					<text>
						{{item.shopName}}
					</text>
					<uni-icons type="arrowright" size="15"></uni-icons>
					<text v-if="item.condition===1" style="float: right; color: #28D2D1;">未交易</text>
					<text v-if="item.condition===2" style="float: right; color: #28D2D1;">交易完成</text>
					<text v-if="item.condition===3" style="float: right; color: #28D2D1;">未评价</text>
					<text v-if="item.condition===4" style="float: right; color: #28D2D1;">已交易/未交易</text>
				</view>
			</view>
			<view class="lch_content_shopmain">
				<image :src='item.image'></image>
				<text style="margin-right: 15px;">{{item.name}}</text>
				<text>{{item.money}}</text>
			</view>
			<view v-if="item.condition===1" class="lch_content_Confirm">未卖出</view>
			<view v-if="item.condition===2" class="lch_content_Confirm">已卖出</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				whole: [{
					id: 1,
					shopName: '飘雪victoria',
					name: '港仔文艺男港风卫衣连帽韩版学生潮流宽松 ins秋季卫衣',
					condition: 2, // 1-未卖出 2-已卖出
					image: '/static/myimg/yifu.jpg',
					money: '￥68.00'
				}]
			};
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
