<template>
	<view class="zy-content">
		<u-button type="success" @click="click1" style="margin-top: 10px;">一般 $emit</u-button>
		<u-button type="primary" @click="click2" style="margin-top: 10px;">一次性 $emit</u-button>
		<u-button type="waitting" @click="click3" style="margin-top: 10px;">vue => js中调用 $emit</u-button>
		<u-button type="error" @click="click4" style="margin-top: 10px;">跳转到nvue</u-button>
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
	
	import test from './test.js'
	
	export default {
		methods: {
			click1() {
				uni.$emit('normal_emit', {"value": "hello"});
			},
			click2() {
				uni.$emit('once_emit', {"value": "once"});
			},
			click3() {
				test.emit();
			},
			click4() {
				navi.navigateTo("/pages/main/test-emit/test-emit2");
			},
			
		},
		onLoad() {
			// 需要注意的是必须在页面结束的时候移除监听 否则会出现监听出现多次调用的问题
			uni.$on('normal_emit', function(dic) {
				ui.showToast(dic.value);
			})
			
			// 该监听只会调用一次
			uni.$once('once_emit', function(dic) {
				ui.showToast(dic.value);
			})
			
			uni.$on('normal_emit_js', function(dic) {
				ui.showToast(dic.value);
			})
		},
		onUnload() {
			console.log("页面释放, 移除所有监听");
			uni.$off('normal_emit');
			uni.$off('normal_emit_js');
		}
	}
</script>
	
<style>
	
</style>
