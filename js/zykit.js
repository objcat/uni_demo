import store from '@/store'

const ui = {
	/**
	 * 弹出toast
	 * @param title 标题
	 */
	showToast: function(title) {
		uni.showToast({
			title: title,
			duration: 2000,
			position: 'center',
			icon: "none"
		})
	},
	/**
	 * 展示loading
	 * @param title 标题
	 */
	showLoading: function() {
		uni.showLoading({
			title: "loading"
		})
	},
	/**
	 * 隐藏loading
	 * @param title 标题
	 */
	hideLoading: function() {
		uni.hideLoading()
	}
}

const storage = {
	/**
	 * 获取存储的数据
	 * @param key 键
	 */
	get: function(key) {
		return uni.getStorageSync(key);
	},
	/**
	 * 存储数据
	 * @param key 键
	 */
	set: function(key, value) {
		uni.setStorageSync(key, value);
	}
}

const str = {
	/**
	 * 判断字符串是否为null或空串
	 * @param str 字符串
	 */
	isEmpty: function(str) {
		if (str == null || str == "") {
			return true;
		} else {
			return false;
		}
	}
}

const navi = {
	/**
	 * 导航跳转页面
	 * @param url 路由地址
	 */
	navigateTo: function(url) {
		if (str.isEmpty(url)) return;
		uni.navigateTo({
			url: url
		})
	},
	/**
	 * 直接载入页面(没有返回箭头)
	 * @param url 路由地址
	 */
	reLaunch: function(url) {
		if (str.isEmpty(url)) return;
		uni.reLaunch({
			url: url
		})
	}
}


const media = {
	/**
	 * 保存图片
	 * @param url 图片的网络地址
	 */
	saveImageToPhotosAlbum: (url) => {
		uni.downloadFile({
			url: url,
			success: (res) => {
				uni.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: () => {
						ui.showToast("保存成功");
					},
					fail: (err) => {
						console.log(err);
						ui.showToast("保存失败");
					}
				})
			}
		})
	}
}


const request = function(url, data, callback, returnError, method = 'POST') {
	
	let token = store.state.token;
	
	let header = {
		// 这里进行token的封装
		"token": "6666666"
	}
	
	console.log("******** request header ********")
	console.log(header);
	
	uni.request({
		url: url,
		method: method,
		data: data,
		header: header,
		success(res) {
			callback(res, null);
		},
		fail(error) {
			if (returnError) {
				callback(null, error);
			} else {
				let errMsg = error.errMsg;
				if (errMsg.indexOf('timeout') != -1) {
					ui.showToast("网络请求超时");
				} else {
					ui.showToast(error.errMsg);
				}
			}
		}
	})
}

const req = {
	/**
	 * 封装网络请求
	 * 
	 * @param url 请求地址
	 * @param data 请求体
	 * @param callback 请求回调
	 * @param returnError 如果设置true错误手动处理 默认是封装方法进行统一处理
	 */
	get: function(url, data, callback, returnError = false) {
		request(url, data, callback, returnError, 'GET');
	},
	post: function(url, data, callback, returnError = false) {
		request(url, data, callback, returnError, 'POST');
	},
	put: function(url, data, callback, returnError = false) {
		request(url, data, callback, returnError, 'PUT');
	},
	delete: function(url, data, callback, returnError = false) {
		request(url, data, callback, returnError, 'DELETE');
	}
	
}

/**
 * api列表
 */

const host = "http://www.baidu.com";

const api = {
	// 登录接口
	login: host + ""
}

const img = {
	icon_wangye: "/static/img/user/wangye.png",
	launch_img_1: "/static/img/guide/guide.png"
}

export {
	// ui封装类
	ui,
	// 存储
	storage,
	// 字符串
	str,
	// 导航
	navi,
	// 媒体
	media,
	// 请求
	req,
	// 接口列表
	api,
	// 图片管理类
	img
}

export default {
	// ui封装类
	ui,
	// 存储
	storage,
	// 字符串
	str,
	// 导航
	navi,
	// 媒体
	media,
	// 请求
	req,
	// 接口列表
	api,
	// 图片管理类
	img
}
