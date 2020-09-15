<template>
	<view class="zy-content">
		<view class="" @click="start" style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 40px; background-color: white;">
			<text style="color: #007AFF;">{{ getSecondText }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				second: 0,
				textCode: "获取验证码",
				timer: null
			}
		},
		props: {
			maxsecond: {
				type: Number,
				default: 60
			}
		},
		methods: {
			start() {
				if (this.second > 0) {
					return;
				}
				clearInterval(this.timer)
				this.second = this.maxsecond;
				this.timer = setInterval(() => {
					console.log(123);
					this.second--;
					if (this.second <= 0) {
						this.second = 0;
						clearInterval(this.timer)
					}
				}, 1000);
				this.$emit('start');
			}
		},
		computed: {
			getSecondText() {
				if (this.second <= 0) {
					return this.textCode;
				} else {
					if (this.second < 10) {
						return "0" + this.second;
					} else {
						return this.second;
					}
				}
			}
		},
		destroyed() {
			// 页面释放前释放timer
			clearInterval(this.timer);
		}
	}
</script>

<style>
</style>
