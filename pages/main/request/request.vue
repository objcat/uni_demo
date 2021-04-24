<template>

	<view class="zy-content" style="align-items: center;">
		<view style="height: 2px; background-color: white;"></view>
		<u-button v-for="(item, index) in list" :type="item.type" style="width: 90%;" class="button" @click="btnClick(index)">{{ item.title }}</u-button>
		<text v-if="value" style="background-color: #DBF1E1; word-break:break-all; overflow: hidden; width: 90%; padding: 10px; margin-top: 10px;">{{ value }}</text>
	</view>



</template>

<script>
	import {
		req,
		api,
		navi,
		img,
		ui
	} from '@/components/zyui/js/zykit.js'
	export default {
		data() {
			return {
				list: [{
						"title": "get",
						"type": "success"
					},
					{
						"title": "post",
						"type": "primary"
					},
					{
						"title": "put",
						"type": "warning"
					},
					{
						"title": "delete",
						"type": "error"
					},
					{
						"title": "队列网络请求 (log顺序 1234)",
						"type": "success"
					},
					{
						"title": "并行网络请求 (log顺序 1324 1342)",
						"type": "success"
					}
				],
				value: ""
			}
		},
		methods: {
			btnClick: async function(index) {
				let self = this;
				switch (index) {
					case 0:
						ui.showToast("开始进行get请求")

						req.get("http://www.baidu.com", {"id": "1"}).then(function(res) {
							let result = "";

							result = result + "请求类型GET \n\n";

							result = result + "********** response header ********** \n\n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n\n" + res.data;

							self.value = result;
						});



						break;
					case 1:
						ui.showToast("开始进行post请求")
						req.post("http://www.baidu.com", {"name":"张三"}).then(function(res) {
							let result = "";

							result = result + "请求类型POST \n\n";

							result = result + "********** response header ********** \n\n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n\n" + res.data;

							self.value = result;
						});
						break;

					case 2:
						ui.showToast("开始进行put请求")
						req.put("http://www.baidu.com", {}).then(function(res) {
							let result = "";

							result = result + "请求类型PUT \n\n";

							result = result + "********** response header ********** \n\n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n\n" + res.data;

							self.value = result;
						});
						break;

					case 3:
						ui.showToast("开始进行delete请求")
						req.delete("http://www.baidu.com", {}).then(function(res) {
							let result = "";

							result = result + "请求类型DELETE \n\n";

							result = result + "********** response header ********** \n\n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n\n" + res.data;

							self.value = result;
						});
						break;
					case 4:

						var result = "";
						
						self.value = result = result + "1.网络请求1开始!" + "\n";

						await req.get("https://www.baidu.com", {}).then(function(res) {
							self.value = result = result + "2.网络请求1完成!" + "\n";
						});

						self.value = result = result + "3.网络请求2开始!" + "\n";

						await req.get("https://www.baidu.com", {}).then(function(res) {
							self.value = result = result + "4.网络请求2完成!" + "\n";
						});
	
						break;
						
					case 5:

						var result = "";
						
						self.value = result = result + "1.网络请求1开始!" + "\n";
						
						req.get("https://www.baidu.com", {}).then(function(res) {
							self.value = result = result + "2.网络请求1完成!" + "\n";
						});
						
						self.value = result = result + "3.网络请求2开始!" + "\n";
						
						req.get("https://www.baidu.com", {}).then(function(res) {
							self.value = result = result + "4.网络请求2完成!" + "\n";
						});
							

						break;
				}
			}
		}
	}
</script>

<style>
	.button {
		margin-top: 5px;
	}
</style>
