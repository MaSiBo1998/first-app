<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<u-code-input :borderColor="color" :maxlength="4" v-model="value" @finish="codeFinish"></u-code-input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				color: ''
			}
		},
		onLoad() {

		},
		methods: {
			codeFinish() {
				console.log(this.value)
				if(this.value == 1234){
					this.value = ''
				}else {
					this.color = '#f56c6c'
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
