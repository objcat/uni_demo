<template>
	<view class="zy-content">
		<swiper style="background-color: #FFFFFF;" :style="{height: swiper_height}" duration="400">
			<swiper-item style="background-color: yellow;">
				<view class="zy-flex-column swipper_item" style="align-items: center; justify-content: center; background-color: white; height: 100%;">
				</view>
			</swiper-item>
			
			<swiper-item style="background-color: yellow;">
				<view class="zy-flex-column swipper_item" style="align-items: center; justify-content: center; background-color: white; height: 100%;">
					<button  @click="start" type="default" style="position: absolute; width: 100px; background-color: red; z-index: 1000;"
					 :style="{top: safeArea.height - 100 + 'px', left: (safeArea.width - 100) / 2 + 'px'}">点击体验</button>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'
	import {
		img,
		store
	} from '@/js/zykit.js'
	export default {
		data() {
			return {
				list: [{
						"id": 1,
						"img": img.launch_img_1
					},
					{
						"id": 2,
						"img": img.launch_img_1
					}
				],
				swiper_height: 0,
				safeArea: null,
				img: img.launch_img_1
			}
		},
		computed: {
			...mapState(['isLogin'])
		},
		onLoad() {
			let self = this;
			console.log("guide");
			uni.getSystemInfo({
				success(res) {
					self.safeArea = res.safeArea;
					self.swiper_height = res.screenHeight + 'px';
				}
			})
		},
		methods: {
			...mapMutations(['xset_firstFlag']),
			start() {
				this.xset_firstFlag(true);
				if (this.isLogin) {
					uni.reLaunch({
						url: "/pages/main/main"
					})
				} else {
					uni.reLaunch({
						url: "/pages/login/login"
					})
				}
			}
		}
	}
</script>

<style>
	@import url("@/css/global.css");
	.swipper_item {
		background-image: url(/static/img/guide/guide.png);
		background-size:100% 100%;
	}
</style>
