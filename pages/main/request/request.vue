<template>

	<view class="zy-content" style="align-items: center;">
		<view style="height: 2px; background-color: white;"></view>
		<u-button v-for="(item, index) in list" :type="item.type" style="width: 90%;" class="button" @click="btnClick(index)">{{ item.title }}</u-button>
		<text v-if="value" style="background-color: #DBF1E1; word-wrap: break-word; overflow: hidden; width: 90%; padding: 10px; margin-top: 10px;">{{ value }}</text>
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
						"title": "get",
						"type": "success"
					},
					{
						"title": "post",
						"type": "info"
					},
					{
						"title": "put",
						"type": "warning"
					},
					{
						"title": "delete",
						"type": "error"
					}
				],
				value: ""
			}
		},
		methods: {
			btnClick: function(index) {
				let self = this;
				switch (index) {
					case 0:
						ui.showToast("开始进行get请求")
						req.get("https://www.baidu.com", {}, function(res) {

							let result = "";

							result = result + "********** header ********** \n \n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n \n" + res.data;

							self.value = result;

						});
						break;
					case 1:
						ui.showToast("开始进行post请求")
						req.post("https://www.baidu.com", {}, function(res) {

							let result = "";

							result = result + "********** header ********** \n \n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n \n" + res.data;

							self.value = result;

						});
						break;

					case 2:
						ui.showToast("开始进行put请求")
						req.put("https://www.baidu.com", {}, function(res) {

							let result = "";

							result = result + "********** header ********** \n \n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n \n" + res.data;

							self.value = result;

						});
						break;

					case 3:
						ui.showToast("开始进行delete请求")
						req.delete("https://www.baidu.com", {}, function(res) {

							let result = "";

							result = result + "********** header ********** \n \n";

							result = result + JSON.stringify(res.header);

							result = result + "\n \n ********** data ********** \n \n" + res.data;

							self.value = result;

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
