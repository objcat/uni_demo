<template>
	<view class="zy-content" style="padding: 10px;">

		<u-button type="primary" @click="tap">自定义搜索框</u-button>

		<text class="break-all">原生导航栏搜索框有两种搜索模式, 搜索框需要在pages.json中进行配置</text>

		<text class="break-all">一.当前页面搜索</text>

		<text class="break-all">
			当前页面搜索不需要禁用导航栏的
			"disabled": false
		</text>

		<text class="break-all">二.跳转新页面搜索</text>

		<text class="break-all">
			新页面搜索需要禁用导航栏的文字输入事件
			"disabled": true
		</text>

		<text class="break-all">详见如下网址: https://uniapp.dcloud.io/collocation/frame/lifecycle</text>
		<text style="font-size: 20px; margin-top: 10px;">搜索框中的文字</text>
		<text class="break-all" style="background-color: #18B566; margin-top: 10px; font-size: 18px;">{{ text }}</text>




	</view>
</template>

<script>
	import {
		req,
		api,
		navi,
		img,
		ui 
	} from '@/js/zykit.js'
	export default {
		methods: {
			tap() {
				console.log(123);
				navi.navigateTo("/pages/main/test-searchbar/custom-searchbar");
			}
		},
		data() {
			return {
				text: ""
			}
		},
		// 实时搜索 "disabled": false 才能生效
		onNavigationBarSearchInputChanged(res) {
			console.log(res.text);
			this.text = res.text;
		},
		// 点击键盘上的搜索按钮搜索 "disabled": false 才能生效
		onNavigationBarSearchInputConfirmed(res) {
			console.log(res.text);
		},
		// 点击搜索框 需要设置 "disabled": true 才能生效
		onNavigationBarSearchInputClicked() {
			console.log("搜索框被点击")
		}
	}
</script>

<style>
	.break-all {
		word-break: break-all;
	}
</style>
