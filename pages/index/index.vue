<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<u-button class="btn" type="primary" text="去登录" @click="toLogin"></u-button>
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
			},
			toLogin(){
				console.log(123)
				uni.navigateTo({
					url:'/pages/login/phone/number/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}
		.btn {
			width: 8rem;
		}
	}
</style>
