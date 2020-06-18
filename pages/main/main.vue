<template>
	<view class="zy-content">
		<uni-list>
			<uni-list-item v-for="item in list" :title="item.title" @click="listClick(item)" :key="item.id"></uni-list-item>
		</uni-list>
		
		<view style="display: flex; flex-direction: column;">
			<view v-for="(item,index) in list2" :key="index">
				<view style="background-color: red; width: 100px; height: 100px;"></view>
				<view style="background-color: green; width: 10px; height: 10px; position: relative; top: -50px;"></view>
			</view>
		</view>
		
		
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
						"title": "原生导航栏(正常)"
					},

					{
						"id": 2,
						"title": "自定义导航栏"
					}
				],
				list2: [
					1,2
				]
			}
		},
		methods: {
			listClick(item) {

				switch (item.id) {
					case 1:
						{
							navi.navigateTo("/pages/main/custom-navi/navi");
							break;
						}
					case 2:
						{
							navi.navigateTo("/pages/main/custom-navi/custom-navi");
							break;
						}
				}
			}
		}
	}
</script>

<style>
	@import url("@/css/global.css");
</style>
