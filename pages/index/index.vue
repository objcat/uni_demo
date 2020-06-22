<template>

</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'

	import {
		req,
		api,
		navi,
		img,
		ui
	} from '@/js/zykit.js'

	export default {
		computed: {
			...mapState(['isLogin', 'firstFlag'])
		},
		onLoad() {

			/**
			 * index是一个跳转页, 用于跳转到其他页面
			 */


			// 判断是否为第一次进入App
			if (!this.firstFlag) {
				// 启动引导页
				navi.reLaunch("/pages/guide/guide");
				return;
			}

			// 判断是否登陆
			if (!this.isLogin) {
				// 如果没登陆, 跳转登陆页面
				navi.reLaunch("/pages/login/login");
			} else {
				// 如果已登陆, 跳转主页面
				navi.reLaunch("/pages/main/main");
			}

		}
	}
</script>

<style>
</style>
