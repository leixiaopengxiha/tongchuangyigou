<template>
	<view class="contents">
		<view class="search-box">
			<view class="sou-box">
				<view class="previous" @click="onPrevious"><image src="@/static/homeimg/jiantou.png" mode=""></image></view>
				<view class="input-box"><input class="input" type="text" v-model="valueText" placeholder="搜索你想要的商品" /></view>
				<view class="sousuo" @click="toSearch({})">搜索</view>
			</view>
		</view>
		<!-- 历史 -->
		<view class="historyBox" v-if="isShow">
			<text class="title">历史搜索</text>
			<view class="delete" @click="deleteHistory"><image src="@/static/img/shanchu@3x.png" mode=""></image></view>
			<view class="historyList">
				<text class="historyItem" v-for="(item, index) in historyList" :key="index" @click="toSearch({ value: item })">{{ item }}</text>
			</view>
		</view>
		<!-- 搜索列表 -->
		<view v-if="!isShow">
			<view class="searchList" v-if="searchList.length == 0">暂无数据</view>
			<view v-else class="searchList" v-for="(item, index) in searchList" :key="index" @click="onDetails(item)" >
				<view class="goodsBox">
					<view class="goodsimg">
						<image :src="item.imgurl[0].url" mode=""></image>
						<!-- <image src="https://img.alicdn.com/imgextra/i3/922860176/O1CN018h4fxE1DAeKuHe9UC_!!0-saturn_solar.jpg_220x220.jpg_.webp" mode=""></image> -->
					</view>
					<view class="goodsMessage">
						<text class="goodsTitle">{{ item.title }}</text>
						<view class="goodsLabel">{{ item.label }}</view>
						<view class="goodsPrice">￥{{ item.price }}</view>
						<view class="goodsProduce">
							<text>新品</text>
							<text>ifashion</text>
							<text>包邮</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			valueText: '',
			isShow: true,
			count: 0,
			// 历史记录
			historyList: [],
			// 搜索列表
			searchList: []
		};
	},
	onLoad() {
		this.onHistori();
	},
	computed: {
		...mapState(['admin'])
	},
	methods: {
		// 去详情
		onDetails(item){
			console.log(item)
		},
		// 返回首页
		onPrevious() {
			uni.switchTab({
				url:'/pages/homes/homes'
			});
		},
		// 获取历史记录
		onHistori() {
			uni.request({
				url: ' http://132.232.89.22:8848/obhistorical',
				method: 'post',
				data: { username: this.admin.username },
				success: res => {
					let { data } = res.data;
					if (data.length != 0) {
						this.historyList = data[0].histori;
					}
				}
			});
		},
		// 搜索事件
		toSearch(type) {
			if (type.value) {
				this.valueText = type.value;
			}
			// 搜索
			var reg = /^\s*(\S+)\s*$/;
			if (reg.test(this.valueText)) {
				//如果用户输入的内容,开头或结尾带有空格,则将空格去掉,重新赋给文本框的value属性
				this.valueText = RegExp.$1;
			} else {
				//如果用户只输入了空格,则将空格清空
				this.valueText = '';
			}

			if (this.valueText == '') {
				return;
			}
			// 隐藏历史列表
			if (this.count == 0) {
				this.count += 1;
				this.isShow = !this.isShow;
			}
			
			// 搜索
			console.log( this.valueText)
			uni.request({
				url: ' http://132.232.89.22:8848/search',
				method: 'post',
				data: { content: this.valueText },
				success: res => {
					let { data } = res.data;
					this.searchList = data;
				}
			});
			 // 添加历史记录
			      uni.request({
			        url: " http://132.232.89.22:8848/addhistorical",
			        method: "post",
			        data: { username: this.admin.username, content: this.valueText },
			        success: (res) => {
			          // console.log(res.data);
			        },
			      });
		},
		// 清除历史记录
		deleteHistory() {
			uni.request({
				url: 'http://132.232.89.22:8848/rehistorical', //仅为示例，并非真实接口地址。
				method: 'post',
				data: { username: '18710140366' },
				success: res => {}
			});
			uni.showToast({
				title: '已删除',
				duration: 2000
			});
			this.historyList = [];
		}
	}
};
</script>

<style lang="less" scoped>
	.contents{
		width: 100vw;
		overflow: hidden;
	}
.search-box {
	width: 100vw;
	padding-top: 3vh;
	background: url('@/static/homeimg/homea.png');
	
}
.sou-box {
	width: 100vw;
	box-sizing: border-box;
	display: flex;
	padding: 0.3rem 0.5rem;
	justify-content: space-between;
}
.previous {
	color: #ffffff;
	font-size: 2rem;
}

.previous image {
	width: 1rem;
	height: 3.2vh;
	display: block;
	padding-top: 0.3rem;
}
.input {
	width: 56vw;
	border: 1px solid #ffffff;
	padding: 0.3rem 0.6rem;
	border-radius: 20px;
	color: #ffffff;
}
.sousuo {
	color: #ffffff;
	font-size: 0.9rem;
	padding: 0.32rem 1rem;
	background: #ffa200;
	border-radius: 20px;
}

.historyBox {
	width: 100%;
	padding: 8px;
	color: #cccccc;
	.title {
		font-size: 20px;
		margin-bottom: 0.8rem;
	}
	.delete {
		display: inline-block;
		margin-left: 68%;
		width: 15px;
		height: 15px;
		image {
			width: 100%;
			height: 100%;
		}
	}

	.historyList {
		margin-top: 0.5rem;
		.historyItem {
			display: inline-block;
			padding: 0.2rem 0.7rem;
			margin: 0.3rem ;
			color: #aaaaaa;
			background-color: #d3d3d3;
			font-size: 13px;
			// margin-right: 10px;
			border-radius: 5px;
		}
	}
}


.searchList {
    width: 90%;
    margin: 0 auto;
	padding: 0.7rem 0;
    .goodsBox {
      width: 100%;
	  box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      box-shadow: 0 2rpx 24rpx -10rpx #ccc;
	  padding:  1rem 0px;
      .goodsimg {
        width: 110px;
        height: 110px;
        border-radius: 10px;
        image {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .goodsMessage {
        width: 50%;
        .goodsTitle {
          font-size: 10px;
        }
        .goodsLabel {
          text-align: center;
          max-width: 3rem;
          padding: 2px;
          font-size: 6px;
          color: gray;
          background-color: #cccccc;
          margin-top: 8px;
        }
        .goodsPrice {
          color: red;
          font-size: 15px;
          margin-top: 10px;
        }
        .goodsProduce {
          text {
            font-size: 6px;
            color: red;
			padding: 0.2rem 0.5rem;
			max-width: 3rem;
            text-align: center;
            border: 0.5px solid red;
            display: inline-block;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
