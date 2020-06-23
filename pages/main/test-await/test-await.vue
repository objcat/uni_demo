<template>
	<view class="zy-content" style="padding: 10px;">
		<u-button style="width: 100%; margin-top: 5px;" v-for="(item, index) in list" @click="click(index)">{{ item.title }}</u-button>
		
		<text style="width: 100%; margin-top: 5px;">
			这里是用 async 和 await 进行同步方法的实现, 其中第一个例子是错误的, 因为mapMutations是没有返回值的, 这导致了一个问题, 就是程序无法接收到你的Promise对象, 从而无法达到await的效果, 所以使用await首要是需要有返回值, 这里推荐使用2,3两种方法, 其中2是使用mapActions, 3是使用普通的methods
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
	
	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'

	export default {
		data() {
			return {
				list: [{
						"title": "xset_await(错误写法)"
					},
					{
						"title": "xact_await"
					},
					{
						"title": "haha"
					},
				]
			}
		},
		methods: {
			...mapMutations(['xset_await']),
			...mapActions(['xact_await']),
			click: async function(index) {

				switch (index) {
					case 0:
						console.log("开始执行xset_await");
						let a = await this.xset_await();
						console.log(a);
						ui.showToast("执行完毕, 没有任何等待效果, 所以此方法是错误的");
						break;

					case 1:
						console.log("开始执行xact_await");
						let b = await this.xact_await();
						console.log(b);
						ui.showToast("执行完毕, 用时2秒");
						break;

					case 2:
						console.log("开始执行haha");
						let c = await this.haha().then(function(res) {
							console.log(res);
						})
						
						// 也可以这么写
						// let c = await this.haha();
						// console.log(c);
						
						ui.showToast("执行完毕, 用时1秒");
						break;

				}
			},
			haha: async function() {
				let self = this;
				return new Promise(function(resolve, reject) {
					setTimeout(function() {

						resolve("result1");
					}, 1000);
				});
			}
		},
		async onLoad() {

		}
	}
</script>

<style>
</style>
