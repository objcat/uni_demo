<template>
	<view class="m-input-view">
		<input :focus="focus" :type="inputType" :value="value" @input="onInput" class="m-input-input" :placeholder="placeholder"
		 :password="type==='password'&&!showPassword" @focus="onFocus" @blur="onBlur" :disabled="disabled" />
		 <view style="width: 10px;"></view>
		<!-- 优先显示密码可见按钮 -->
		<view v-if="clearable&&!displayable&&value.length" class="m-input-icon">
			<m-icon color="#666666" type="clear" @click="clear"></m-icon>
		</view>
		
		<view v-if="displayable" class="m-input-icon">
			<m-icon :style="{color:showPassword?'#666666':'#cccccc'}" type="eye" @click="display"></m-icon>
		</view>
		<view style="width: 10px;"></view>
	</view>
</template>

<script>
	import mIcon from '@/components/custom/m-input/m-icon.vue'

	export default {
		components: {
			mIcon
		},
		props: {
			/**
			 * 输入类型
			 */
			type: String,
			/**
			 * 值
			 */
			value: String,
			/**
			 * 占位符
			 */
			placeholder: String,
			/**
			 * 是否显示清除按钮
			 */
			clearable: {
				type: [Boolean, String],
				default: false
			},
			/**
			 * 是否显示密码可见按钮
			 */
			displayable: {
				type: [Boolean, String],
				default: false
			},
			/**
			 * 自动获取焦点
			 */
			focus: {
				type: [Boolean, String],
				default: false
			},
			disabled: {
				type: [Boolean, String],
				default: false
			}
		},
		model: {
			prop: 'value',
			event: 'input'
		},
		data() {
			return {
				/**
				 * 显示密码明文
				 */
				showPassword: false,
				/**
				 * 是否获取焦点
				 */
				isFocus: false
			}
		},
		computed: {
			inputType() {
				const type = this.type
				return type === 'password' ? 'text' : type
			}
		},
		methods: {
			clear() {
				this.$emit('input', '')
			},
			display() {
				this.showPassword = !this.showPassword
			},
			onFocus() {
				this.isFocus = true
			},
			onBlur() {
				this.$nextTick(() => {
					this.isFocus = false
				})
			},
			onInput(e) {
				this.$emit('input', e.detail.value)
			}
		}
	}
</script>

<style>
	
	.m-input-view {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		/* background-color: yellow; */
	}

	.m-input-input {
		flex: 1;
		width: 100%;
		min-height: 100%;
		/* line-height: inherit; */
		background-color: rgba(0, 0, 0, 0);
		/* background-color: green; */
	}

	.m-input-icon {
		/* width: 30px; */
		/* background-color: red; */
		/* width: 20px; */
		/* font-size: 20px; */
		/* line-height: 20px; */
		color: #666666;
		/* background-color: red; */
	}
	
	
</style>
