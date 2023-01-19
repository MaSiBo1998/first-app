<template>
	<view class="content">
		<view class="content-box">
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
				if (this.value == 1234) {
					this.value = ''
				} else {
					this.color = '#f56c6c'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding-top: 1.5rem;

		.content-box {
			width: 18.438rem;
			height: 14.734rem;
			margin: 0 auto;
		}
	}
</style>
