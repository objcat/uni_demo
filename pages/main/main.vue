<template>
	<view class="zy-content">
		<uni-list>
			<uni-list-item v-for="item in list" :title="item.title" @click="listClick(item)" :key="item.id"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni/uni-list-item/uni-list-item.vue'

	import {
		req,
		api,
		navi,
		img,
		ui
	} from '@/js/zykit.js'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				list: [{
						"id": 2,
						"title": "原生导航栏"
					},
					{
						"id": 1,
						"title": "自定义导航栏(在微信小程序中会闪烁,不推荐使用)"
					}
				]
			}
		},
		methods: {
			listClick(item) {

				switch (item.id) {
					case 1:
						navi.navigateTo("/pages/main/custom-navi/custom-navi");
						break;

					case 2:
						navi.navigateTo("/pages/main/custom-navi/navi");
						break;
				}
			}
		}
	}
</script>

<style>
	@import url("@/css/global.css");
</style>
