<template>
	<view class="zy-content" style="padding: 10px;">
		<u-button @click="hello">箭头函数</u-button>
		<u-button @click="hello2">普通函数</u-button>
		<u-button @click="hello3">括号函数</u-button>
		
		<text style="word-break: break-all;">
			我们可以发现, 点击箭头函数的按钮是无法打印出this.value这个变量的, 而其他两种写法是可以的
			所以说箭头函数是存在毛病的, 具体解决方案我也不知道
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "hello"
			}
		},
		methods: {
			hello: () => {
				console.log(this.value);
			},
			hello2: function() {
				console.log(this.value);
			},
			hello3() {
				console.log(this.value);
			}
		}
	}
</script>

<style>
</style>
