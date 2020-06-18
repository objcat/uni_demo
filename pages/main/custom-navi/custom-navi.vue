<template>
	<view class="zy-content" v-if="hidden">
		
		<view style="width: 100px; height: 100px; background-color: red;">
			
		</view>
		<u-navbar back-text="返回" title="剑未配妥，出门已是江湖" :background="{'background': '#007AFF'}" backIconColor="#FFFFFF" titleColor="#FFFFFF" backText=""></u-navbar>
		<view class="zy-flex-column">
			
		</view>
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
	@import url("@/css/global.css");
</style>
