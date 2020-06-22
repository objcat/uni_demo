import Vue from 'vue'
import Vuex from 'vuex'
import {
	storage
} from '@/js/service.js'
import {
	navi
} from '@/js/zykit.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 第一次打开应用表示 false是 true不是
		firstFlag: false,
		// 是否登陆了
		isLogin: false,
		// 用户名
		username: "123",
		// 密码
		password: "",
		// token
		token: "",
		// 用户信息
		userInfo: {},
	},
	mutations: {

		// 保存登陆状态
		xset_isLogin(state, value) {
			state.isLogin = value;
			storage.set('isLogin', value)
		},

		// 保存用户名
		xset_username(state, value) {
			state.username = value;
			storage.set('username', value);
		},
		
		// 保存token
		xset_token(state, value) {
			state.token = value;
			storage.set('token', value);
		},

		// 保存密码
		xset_password(state, value) {
			state.password = value;
			storage.set('password', value);
		},

		// 保存用户信息
		xset_userInfo(state, value) {
			state.userInfo = value;
			storage.set('userInfo', value);
		},

		xset_firstFlag(state, value) {
			state.firstFlag = value;
			storage.set('firstFlag', value);
		},

		// 第一次进入加载所有数据
		x_loadData(state) {
			// 一般情况下, 数据均为全局加载, 如果不需要全局加载就要使用忽略列表
			let ignore = []
			// 加载用户数据
			for (let i in state) {
				if (ignore.indexOf(i) != -1) continue;
				state[i] = storage.get(i);
			}
			console.log("vuex加载所有数据成功");
			console.log(state);
		}
	},
	getters: {
		x_get_isLogin: function(state) {
			return state.isLogin;
		}
	},
	actions: {
		// 登陆成功 保存状态 用户名 密码
		xact_login(context, arr) {
			// 保存登陆数据
			context.commit('xset_isLogin', arr[0]);
			context.commit('xset_username', arr[1]);
			context.commit('xset_password', arr[2]);
			context.commit('xset_token', arr[3]);
			context.commit('xset_userInfo', arr[4]);
			// 重定向到主页面
			navi.reLaunch('/pages/main/main');
		},
		// 退出登陆 抹消登陆状态 用户名 密码
		xact_logout(context) {
			context.commit('xset_isLogin', false);
			context.commit('xset_username', '');
			context.commit('xset_password', '');
			context.commit('xset_token', '');
			context.commit('xset_userInfo', {});
			// 重定向到登陆页
			navi.reLaunch("/pages/login/login");
		}
	}
})

// 全局加载数据
store.commit('x_loadData')

export default store
