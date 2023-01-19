<template>
	<view class="content">
		<view class="content-box">
			<view class="title">
				Bienvenido a Préstamo fácil
			</view>
			<view class="info">
				Obtenga su préstamo ahora
			</view>
			<u-input placeholder="+52" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #909399"></u-input>
			<u-radio-group style="margin: 3rem 0 1.5rem;" v-model="radiovalue1" placement="column">
				<u-radio activeColor="#1cba3b" :customStyle="{marginBottom: '8px'}"
					label="He leido y aceptado estos términos, condiciones y Politica de privacidad" name="1">
				</u-radio>
			</u-radio-group>
			<u-button @click="toPhoneCode" class="btn" :class="[radiovalue1 == 1?'confirm':''] " text="Confirmar"></u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				radiovalue1: '',
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
			},
			toPhoneCode(){
				uni.navigateTo({
					url:'/pages/login/phone/code/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-top: 2rem;

		.content-box {
			width: 18.438rem;
			height: 19.125rem;
			margin: 0 auto;

			.title {
				height: 1.625rem;
				color: #333333;
				font-weight: 600;
				font-size: 1.25rem;
				line-height: 1.625rem;
			}

			.info {
				margin: .75rem 0 3rem;
				height: 1.25rem;
				color: #656565;
				font-size: 0.875rem;
				line-height: 1.25rem;
			}

			.btn {
				width: 18.438rem;
				height: 3rem;
				line-height: 3rem;
				text-align: center;
				border-radius: 0.5rem;
				background: #d9d9d9;
				color: #ffffff;
				font-size: 1.063rem;
			}
			.confirm {
				 background: linear-gradient(236.79deg, #58d129 0%, #03b041 100.62%);
			}
		}
	}
</style>
