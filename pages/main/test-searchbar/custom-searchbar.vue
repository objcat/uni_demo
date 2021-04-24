<template>
	<view class="zy-content">
		<u-navbar back-text="返回" :background="{'background': '#007AFF'}" backIconColor="#FFFFFF" titleColor="#FFFFFF" backText=" ">
			<view class="search-wrap">
				<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
				<u-search v-model="keyword" height="56" :action-style="{color: '#fff'}" @change="change" @search="search" @custom="custom"></u-search>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	import {
		req,
		api,
		navi,
		img,
		ui 
	} from '@/components/zyui/js/zykit.js'
	export default {
		data() {
			return {
				keyword: ""
			}
		},
		methods: {
			// 文字改变
			change: function(res) {
				console.log(res);
			},
			// 点击键盘上的搜索
			search: function(res) {
				ui.showToast("搜索内容:" + res);
				console.log(res);
			},
			// 点击搜索按钮
			custom: function(res) {
				console.log(res);
			}
		}
	}
</script>

<style>
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
</style>
