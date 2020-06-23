<template>
	<view class="zy-content">
		<uni-list>
			<uni-list-item v-for="item in list" :title="item.title" @click="listClick(item)" :key="item.id"></uni-list-item>
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

		data() {
			return {
				list: [{
						"id": 1,
						"title": "展示登录信息"
					},
					{
						"id": 2,
						"title": "自定义导航栏"
					},
					{
						"id": 3,
						"title": "网络请求"
					},
					{
						"id": 4,
						"title": "await"
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
				}
			}
		}
	}
</script>

<style>

</style>
