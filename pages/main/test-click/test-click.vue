<template>

	<view class="zy-content" style="padding: 10px;">
		<u-cell-group>

			<u-cell-item :center="true">
				<view class="zy-flex-row" @click="click1">
					<button @click.native.stop="click2">@click.native.stop</button>
				</view>
			</u-cell-item>

			<u-cell-item :center="true">
				<view class="zy-flex-row" @click="click1">
					<button @click="click2">@click</button>
				</view>
			</u-cell-item>

		</u-cell-group>

		<text style="word-break: break-all; margin-top: 10px;">
			我们发现点第一个按钮会打印点击按钮, 而点第二个按钮会打印点击cell, 这里是用了 @click.native.stop 来阻止事件的传递, 如果使用的是@click则会出现按钮下层的cell也被点击,
		</text>

		<text style="word-break: break-all; margin-top: 10px; color: red;">
			u-button已经提前做好了机制处理, 所以使用u-button是没有问题的
		</text>


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
			click1() {
				console.log(1);
				ui.showToast("点击cell");
			},
			click2() {
				console.log(2);
				ui.showToast("点击按钮");
			}
		}
	}
</script>

<style>
</style>
