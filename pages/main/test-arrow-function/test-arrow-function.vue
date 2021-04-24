<template>
	<view class="zy-content" style="padding: 10px;">
		<u-button @click="hello" type="error">es6箭头函数 () => {}</u-button>
		<u-button @click="hello2" type="success">es5写法 function() {}</u-button>
		<u-button @click="hello3" type="success">简便写法 hello()</u-button>
		
		<text style="word-break: break-all; margin-top: 10px;">
			我们可以发现, 点击箭头函数的按钮没有任何提示, 因为它报错了, 而其他两种写法是可以的
			所以说箭头函数是存在毛病的, 别问, 问就是使用后两种方法
		</text>
		
		<text style="word-break: break-all; margin-top: 10px;">
			经过咨询群里得到了答案, 我们来看vue官方的说法
		</text>
		
		<u-image :src="img" mode="widthFix" style="width: 100%; margin-top: 10px;" :showLoading="false" :showError="false" @click="preview"></u-image>
		
		<u-link href="https://cn.vuejs.org/v2/api/#methods">打开官方文档</u-link>

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
				value: "hello",
				img: img.vue_img_1
			}
		},
		methods: {
			hello: () => {
				ui.showToast("es6箭头函数 () => {} value的值是: " + this.value)
			},
			hello2: function() {
				ui.showToast("es5写法 function() {} value的值是: " + this.value)
			},
			hello3() {
				ui.showToast("简便写法 hello() {} value的值是:  " + this.value)
			},
			preview() {
				uni.previewImage({
					current:this.img,
					urls:[
						this.img
					]
				})
			}
		}
	}
</script>

<style>
	button {
		margin-top: 10px;
	}
</style>
