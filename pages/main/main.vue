<template>
	<view class="zy-content">
		<uni-list>
			<uni-list-item title="自定义导航栏" @click="listClick"></uni-list-item>
		</uni-list>
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
			listClick() {
				console.log("点击");
				navi.navigateTo("/pages/main/custom-navi/custom-navi");
			}
		}
	}
</script>

<style>
	@import url("@/css/global.css");
</style>
