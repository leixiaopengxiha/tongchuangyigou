import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {apiUrl} from '@/aip/index.js'
export default new Vuex.Store({
	state: {
		admin: {}
	},
	mutations: {
		admins(state){
			const admin = uni.getStorageSync('admin');
			console.log(admin)
			if(admin){
				state.admin = admin
			}
			
		},
		loginStatesa(state, data){
			state.admin = data.data
			const admins = uni.getStorageSync('admin');
			uni.setStorage({
				key: 'admin',
				data:data.data
			});
			if(!admins){
				uni.switchTab({
				    url: '/pages/mys/mys'
				});
			}
			
			
			
		}
	},
	actions: {
		admins({commit}){
			commit('admins')
		},
		// 验证登录
		loginStates({
			commit
		}) {
			const token = uni.getStorageSync('token');
				uni.request({
					url: `${apiUrl}/getadmin`,
					method:"POST",
					data: {
						token:token
					},
					success: res => {
						if(res.data.code==200){
							 commit('loginStatesa', res.data)
						}else{
							// 清除缓存
							uni.clearStorage('token');
							uni.clearStorage('admin');
						}
						
					},
					fail: (err) => {
						console.log(err)
					}
				})
		}
	},
	modules: {}
});
