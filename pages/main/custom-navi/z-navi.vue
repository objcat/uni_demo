<template>
	<view class="zy-content">
		<view class="status-bar"></view>
		<view class="navi-bar zy-flex-row">
			<text @click="back">标题</text>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			back() {
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	@import url("@/css/global.css");
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #007AFF;
	}
	.navi-bar {
		height: 44px;
		width: 100%;
		background-color: #007AFF;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
</style>
