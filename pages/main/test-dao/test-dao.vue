<template>
	<view class="zy-content">
		<zy-cutdown @start="start" style="width: 100px;"></zy-cutdown>
	</view>
	
</template>

<script>
	import zyCutdown from '@/pages/main/test-dao/zy-cutdown.vue'
	export default {
		components: {
			zyCutdown
		},
		methods: {
			start() {
				console.log("start");
			}
		}
	}
</script>

<style>
</style>
