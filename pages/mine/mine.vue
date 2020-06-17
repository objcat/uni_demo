<template>
	<view class="zy-content">
		<button type="default" style="width: 100%;" @click="logout">退出登录</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'
	
	export default {
		methods: {
			...mapActions(['xact_logout']),
			logout() {
				let self = this;
				uni.showModal({
					content: '是否退出登陆',
					showCancel: true,
					success: (res) => {
						if (res.confirm) {
							self.xact_logout();
						}
					}
				});
			}
		}
	}
	
</script>

<style>
	@import url("@/css/global.css");
</style>
