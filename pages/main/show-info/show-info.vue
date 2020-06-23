<template>
	<view class="zy-flex-column" style="padding: 15px;">
		<text v-if="isLogin">登陆成功</text>
		<text v-if="!isLogin">未登录</text>
		<text>用户名: {{ username }}</text>
		<text>密码: {{ password }}</text>
		<text>token: {{ token }}</text>
		<text style="word-break:break-all;">用户信息: {{ "\n" + str_userInfo }}</text>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'
	
	export default {
		computed: {
			...mapState(['isLogin', 'username', 'password', 'token', 'userInfo']),
			str_userInfo() {
				return JSON.stringify(this.userInfo);
			}
		}
	}
</script>

<style>
</style>
