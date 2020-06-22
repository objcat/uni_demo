<template>
	<view class="zy-content">

		<view class="zy-flex-column" style="padding: 15px;">
			<text v-if="isLogin">登陆成功</text>
			<text v-if="!isLogin">未登录</text>
			<text>用户名: {{ username }}</text>
			<text>密码: {{ password }}</text>
			<text>token: {{ token }}</text>
			<text>用户信息: {{ userInfo }}</text>
		</view>

		<uni-list>
			<uni-list-item v-for="item in list" :title="item.title" @click="listClick(item)" :key="item.id"></uni-list-item>
		</uni-list>

	</view>
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
			...mapState(['isLogin', 'username', 'password', 'token', 'userInfo'])
		},
		data() {
			return {
				list: [{
						"id": 1,
						"title": "原生导航栏"
					},
					{
						"id": 2,
						"title": "自定义导航栏(在微信小程序中会闪烁,不推荐使用)"
					},
					{
						"id": 3,
						"title": "网络请求"
					}
				]
			}
		},
		methods: {
			listClick(item) {

				switch (item.id) {
					case 1:
						navi.navigateTo("/pages/main/custom-navi/navi");
						break;
					case 2:
						navi.navigateTo("/pages/main/custom-navi/custom-navi");
						break;
					case 3:
						navi.navigateTo("/pages/main/request/request");
						break;
				}
			}
		}
	}
</script>

<style>

</style>
