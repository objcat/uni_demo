<template>
	<view class="zy-content">
		<swiper style="background-color: #FFFFFF;" :style="{height: swiper_height}" duration="400" >
			<swiper-item v-for="item in list" style="background-color: yellow;">
				<view class="swiper-item zy-flex-column" style="align-items: center; justify-content: center; background-color: yellow; height: 100%;">
					<image :src="item.img" mode="widthFix" style="width: 100%;" ondragstart="return false"></image>
					<button v-if="item.id == 2" @click="start" type="default" style="position: absolute; width: 100px;" :style="{top: safeArea.height - 100 + 'px', left: (safeArea.width - 100) / 2 + 'px'}">点击体验</button>
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
				safeArea: null
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
	
</style>
