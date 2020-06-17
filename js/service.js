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

export {
	storage
}