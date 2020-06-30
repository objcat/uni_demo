<template>
	<view class="zy-content">
		<u-cell-group>
			<u-cell-item v-for="item in list" :title="item.title" @click="listClick(item)" :key="item.id">{{ item.file }}</u-cell-item>
		</u-cell-group>

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

		data() {
			return {
				list: [{
						"id": 1,
						"title": "展示登录信息",
						"file": "show-info"
					},
					{
						"id": 2,
						"title": "自定义导航栏",
						"file": "custom-navi"
					},
					{
						"id": 3,
						"title": "网络请求",
						"file": "request"
					},
					{
						"id": 4,
						"title": "await",
						"file": "test-await"
					},
					{
						"id": 5,
						"title": "搜索框",
						"file": "test-searchbar"
					},
					{
						"id": 6,
						"title": "箭头函数测试",
						"file": "test-arrow-function"
					},
					{
						"id": 7,
						"title": "阻止点击事件冒泡",
						"file": "test-click"
					},
					{
						"id": 8,
						"title": "全局通知",
						"file": "test-emit"
					}
					
				]
			}
		},
		methods: {
			listClick(item) {
				switch (item.id) {
					case 1:
						navi.navigateTo("/pages/main/show-info/show-info");
						break;
					case 2:
						navi.navigateTo("/pages/main/custom-navi/custom-navi");
						break;
					case 3:
						navi.navigateTo("/pages/main/request/request");
						break;
					case 4:
						navi.navigateTo("/pages/main/test-await/test-await");
						break;
					case 5:
						navi.navigateTo("/pages/main/test-searchbar/test-searchbar");
						break;
					case 6:
						navi.navigateTo("/pages/main/test-arrow-function/test-arrow-function");
						break;
					case 7:
						navi.navigateTo("/pages/main/test-click/test-click");
						break;
					case 8:
						navi.navigateTo("/pages/main/test-emit/test-emit");
						break;
				}
			}
		}
	}
</script>

<style>

</style>
