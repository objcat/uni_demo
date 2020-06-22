<template>
	<view class="zy-content" v-if="hidden">
		<u-navbar back-text="返回" title="自定义导航栏" :background="{'background': '#007AFF'}" backIconColor="#FFFFFF" titleColor="#FFFFFF" backText=""></u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hidden: false
			}
		},
		onLoad() {
			let self = this;
			setTimeout(function(){
				self.hidden = true;
			}, 50)
			
		}
	}
</script>

<style>
	
</style>
