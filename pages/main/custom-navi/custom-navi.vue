<template>
	<view class="zy-content" style="padding: 10px;">
		<u-navbar back-text="返回" title="自定义导航栏" :background="{'background': '#007AFF'}" backIconColor="#FFFFFF" titleColor="#FFFFFF" backText=" "></u-navbar>
		
		<text>自定义导航栏会有一个问题, 微信小程序下会出现闪烁, 使用真机调试后闪烁减轻, 但是官方demo的发布版本并未出现问题所以姑且认为是发布后这个现象就会消失, 待考究</text>
		
		<br>
		
		<text>与之对应的是原生导航栏并不会出现任何问题, 所以开发中还是推荐优先使用原生导航栏, 点击下面链接跳转</text>
		
		<br>
		
		<u-button @click="go" type="success" style="width: 100%;">呼出原生导航栏</u-button>
		
		<text style="margin-top: 5px;">自定义导航栏的第二个毛病就是当输入框在下面的时候导航栏会被顶飞, 请点击下方蓝色区域查看此毛病</text>
		
		<u-input type="text" placeholder="123" style="margin-top: 100px; background-color: cyan;"></u-input>
		
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
	 methods: {
		 go() {
			 navi.navigateTo("./navi");
		 }
	 }
 }
</script>

<style>
	
</style>
