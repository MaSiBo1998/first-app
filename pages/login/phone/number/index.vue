<template>
	<view class="content">
		<view class="title">
			Bienvenido a Préstamo fácil
		</view>
		<view class="info">
			Obtenga su préstamo ahora
		</view>
		<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->


		<u-input placeholder="前置插槽" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #909399">

			<u--text text="http://" slot="prefix" margin="0 3px 0 0" type="tips"></u--text>

		</u-input>

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
				if (this.value == 1234) {
					this.value = ''
				} else {
					this.color = '#f56c6c'
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {

		.title {
			width: 19.357rem;
			height: 1.857rem;
			color: #333333;
			font-family: SF Pro Text;
			font-weight: 600;
			font-size: 1.429rem;
			line-height: 1.857rem;
		}
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
