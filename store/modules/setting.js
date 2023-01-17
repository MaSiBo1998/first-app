export default {
	namespaced: true,
	state: {
		rootFontSize:''
	},
	mutations: {
		// 用户姓名
		setFontSize(state, val) {
			state.rootFontSize = val
		},
	}
}
