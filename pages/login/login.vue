<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable v-model="username" placeholder="请输入账号" :disabled="loading"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码" :disabled="loading"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" :loading="loading" :disabled="loading" @click="onLogin" style="background-color: #2979ff;">登录</button>
		</view>

	</view>
</template>

<script>

	import {
		req,
		api,
		navi,
		img,
		ui,
		str
	} from '@/js/zykit.js'

	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'

	import mInput from '@/components/custom/m-input/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				username: 'root',
				password: '123456',
				loading: false
			}
		},
		methods: {
			...mapActions(['xact_login']),
			onLogin() {

				// console.log(isLogin);

				let self = this;

				if (str.isEmpty(self.username)) {
					ui.showToast("用户名不能为空");
					return;
				}

				if (str.isEmpty(self.password)) {
					ui.showToast("密码不能为空");
					return;
				}

				// 按钮进入加载状态 不可点击状态 输入框进入不可输入状态
				self.loading = true;

				setTimeout(()=>{
					// 模拟登录
					console.log("模拟登录成功!")
					self.loading = false;
					self.xact_login([true, self.username, self.password, "token=666666", {"name": "root", "age": "666", "id": "1"}]);
				}, 3000)

			}
		},
		onReady() {

		},
		onLoad() {

		}
	}
</script>

<style scoped>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
		/* background-color: red; */
		padding: 10px;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 72px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 10px;
	}

	button.primary {
		background-color: #0faeff;
	}
</style>
