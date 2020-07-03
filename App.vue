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
		onLaunch: function() {
			// 注意这里要用箭头函数 如果是一般函数需要 let self = this; self.xact_logout();
			uni.$on('emit_logout_appvue', (dic) => {
				console.log("退出登录 from App.vue");
				this.xact_logout();
			})
			
			uni.getNetworkType({
				success(res) {
					ui.showToast(res.networkType);
				}
			})

			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods: {
			...mapActions(['xact_logout'])
		}
	};
</script>

<style lang="scss">
	@import "@/components/uview-ui/index.scss";
	@import "@/css/global.css";
</style>
