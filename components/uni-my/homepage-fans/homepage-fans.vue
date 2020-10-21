<template>
	<view class="follow-box">
		<view class="follow-context" v-for="(item,index) in people">
			<image :src="item.photourl" mode=""></image>
			<view class="follow-mess">
				<text style="font-size: 5vw;">{{item.nickname}}</text>
				<view class="follow-synopsis">{{item.signature}}</view>
				<text style="margin-top: 1vh; color: #CCCCCC;">{{item.fans}}位粉丝</text>
			</view>
			<!-- <view class="follow-btn" @click="follow()">+关注</view> -->
			<view class="follow-btn" :class="item.flag==true?'':'nofollow'" @click="follow(index)">
				{{item.flag==true?'已关注':'+关注'}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		apiUrl
	} from '@/aip/index.js'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				people: [],
			}
		},
		computed: {
			...mapState(['admin'])
		},
		mounted() {
			this.qingqiu();
		},
		methods: {
			// 粉丝请求接口
			qingqiu() {
				uni.request({
					url: `${apiUrl}/allfans`,
					method: "POST",
					data: {
						username: this.admin.username
					},
					success: ({
						data
					}) => {
						this.people = data.data
						const adminuserdata = uni.getStorageSync('admin');
						for(let i=0;i<this.people.length;i++){
							const flag = adminuserdata.allfollow.includes(this.people[i].username)
							this.people[i].flag = flag
						}
					}
				})
			},
			// 点击关注按钮
			follow(index) {
				console.log(index)
				console.log(this.people)
				uni.request({
					url: `${apiUrl}/followbtn`,
					method: "POST",
					data: {
						username: this.admin.username,
						"tousername": this.people[index].username
					},
					success: ({
						data
					}) => {
						if (data.code == 200 || data.code == 400) {
							this.people[index].flag = true
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.follow-box {
		padding: 5vw;
	}

	.follow-context {
		border: 1px solid #E1F3D8;
		border-radius: 5vw;
		display: flex;
		padding: 3vw;
		box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.1);
		margin-bottom: 3vh;
	}

	.follow-context image {
		width: 15vw;
		height: 15vw;
		flex-shrink: 0;
		border-radius: 3vw;
	}

	.follow-mess {
		width: 30vw;
		margin: 0vw 7vw 0px 4vw;
	}

	.follow-mess text {
		display: block;
	}

	.follow-synopsis {
		margin-top: 1vh;
		color: #909399;
		/* padding: 1vw; */
		overflow: hidden;
		/* break-all(允许在单词内换行。) */
		word-break: break-all;
		/* 超出部分省略号 */
		text-overflow: ellipsis;
		/** 对象作为伸缩盒子模型显示 **/
		display: -webkit-box;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-box-orient: vertical;
		/** 显示的行数 **/
		-webkit-line-clamp: 2;
		font-size: 4vw;
	}

	.follow-btn {
		width: 20vw;
		height: 5vh;
		border: 1px solid #ddd;
		text-align: center;
		line-height: 2;
		border-radius: 2vw;
		margin-top: 5vh;
	}

	.nofollow {
		background-color: #28D2D1;
		color: #FFFFFF;
	}
</style>
