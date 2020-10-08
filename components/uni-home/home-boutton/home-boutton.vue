<template>
	<view>
		<!-- 没事不要瞎整 -->
		<view class="page">
			<view class="page">
				<view class="tabControl-box">
					<tabControl :current="contentIndex" :values="twoNavs"  :scrollFlag="true" :isEqually="false"
										 @clickItem="onClickConent"></tabControl>
				</view>
				
					<!-- 使用 scroll-view 来滚动内容区域 -->
				<swiper class="swiper"  @change="scollSwiper" :current="contentIndex">
					<swiper-item v-for="(twoNav, index) in twoNavs" :key="index">
						<scroll-view scroll-y="true" style="height: 100%;">
							<view class="scrlist-box">
								<view class="content-boxs" v-for="item in productlist" :key='item.id'>
									<image class="img-boxs" :src='item.url'></image>
									<view class="text-title">
										{{item.title}}
									</view>
									<view class="price-box">
										<view class="price">
											￥{{item.price}}
										</view>
										<view class="shoucang">
											已有{{item.shoucang}}人收藏
										</view>
									</view>
									<view class="photourl-box">
										<view class="photourl">
											<image :src="item.photourl"></image>
										</view>
										<view class="shoucang">
											<view class="nickname">
												{{item.nickname}}
											</view>

											<view class="fensi">粉丝:{{item.fensi}} 关注:{{item.guanzhu}}</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>

</template>

<script>
	import tabControl from "@/components/tabControl-tag/tabControl-tag.vue"
	export default {
		components: {
			tabControl,
		},
		data() {
			return {
				contentIndex: 0,
				
				twoNavs: ['推荐', '最新', '数码产品', '图书文具', '服饰鞋包', '美妆闲置', '体育用品', '服饰鞋包', '美妆闲置'],
				productlist:[
					{
						id:1,
						title:'卡通金属文具',
						url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
						price: 23,
						shoucang:2,
						fensi:98,
						guanzhu:26,
						nickname:'你得支凌起来啊',
						photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
					},
					{
						id:2,
						title:'卡通金属文具',
						url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
						price: 23,
						shoucang:2,
						fensi:98,
						guanzhu:26,
						nickname:'你得支凌起来啊',
						photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
					},
					{
						id:3,
						title:'卡通金属文具',
						url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
						price: 23,
						shoucang:2,
						fensi:98,
						guanzhu:26,
						nickname:'你得支凌起来啊',
						photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
					},
					{
						id:4,
						title:'卡通金属文具',
						url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
						price: 23,
						shoucang:3,
						fensi:98,
						guanzhu:26,
						nickname:'你得支凌起来啊',
						photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
					},
					{
						id:5,
						title:'卡通金属文具',
						url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
						price: 23,
						shoucang:2,
						fensi:98,
						guanzhu:26,
						nickname:'你得支凌起来啊',
						photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
					},
					{
						id:6,
						title:'卡通金属文具',
						url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
						price: 23,
						shoucang:2,
						fensi:98,
						guanzhu:26,
						nickname:'你得支凌起来啊',
						photourl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602060770161&di=8050d46aeca4bcd2acf1f26fe42449e7&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F29%2F20200829124825_CMhuS.thumb.400_0.jpeg",
					}
				]
			}
		},
		methods: {
			// 选项卡02点击事件
			onClickConent(val) {
				this.contentIndex = val.currentIndex;
			},
			// 选项卡02点击事件
			scollSwiper(e) {
				this.contentIndex = e.target.current;
			},
		}
	}
</script>

<style scoped>
	.page{
		width: 100vw;
		box-sizing: border-box;
	}
.swiper{
	width: 100vw;
	height: 81vh;
	margin-top: 0.5rem;
}
.tabControl-box{
	width: 100vw;
	height: 2.6rem;
	
	overflow: hidden;
	box-shadow: 0px 0px 0.5rem #CCCCCC;
	box-sizing: border-box;
}
	
.scrlist-box{
	width: 92vw;
	padding-bottom: 2rem;
	margin: auto;
	display: flex;
	flex-wrap:wrap;
}
.content-boxs{
	width: 45vw;
	margin: 0.5vw;
	padding: 0.3rem;
	box-sizing: border-box;
	box-shadow: 0px 0px 0.5rem #CCCCCC;
}
.img-boxs{
	width: 100%;
	height: 7rem;
	display: block;
	border-radius:0.5rem 0.5rem 0 0;
}
.text-title{
	width: 100%;
	font-size: 0.9rem;
	margin: 0.3rem 0;
	overflow:hidden;
	text-overflow:ellipsis;
	 white-space:nowrap;
}
.price-box{
	display: flex;
	justify-content: space-between;
}
.price{
	color: red;
}
.shoucang{
	font-size: 0.6rem;
	padding-top: 0.4rem;
	box-sizing: border-box;
}
.photourl-box{
	margin-top: 0.5rem;
	display: flex;
	color: #AAAAAA;
}
.photourl image{
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	padding-right: 0.3rem;
}
.nickname{
	width: calc(45vw - 3rem);
	color: #333333;
	overflow:hidden; 
	text-overflow:ellipsis;
	 white-space:nowrap;
	font-size: 0.7rem;
}
</style>
