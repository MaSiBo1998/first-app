import {
	request
} from '@/util/request.js'

//手机号登录
export const mobileToLogin = (data) => request({
	url: '/user/loginByMobile',
	method: 'post',
	data: data
})
//微信登录获取openid
export const wxLoginGetOpenid = (data) => request({
	url: '/user/loginByWx',
	method: 'post',
	data: {
		wxCode:data.wxCode,
		wxAvatarUrl:data.wxAvatarUrl,
		wxNickName:data.wxNickName,
	}
})
//微信登录获取openid
export const wxLoginGetMobile = (data) => request({
	url: '/user/getMobileByWx',
	method: 'post',
	token:data.token,
	data: {
		wxCode:data.wxCode
	}
})
// 退出登录
export const loginOut = (data) => request({
	url: '/user/exit',
	method: 'post',
	token: data.token
})
//修改密码发送验证码(mobile)
export const sendMobileCode = (data) => request({
	url: '/user/sendMobileCode',
	method: 'post',
	data: data
})
// 找回密码(mobile,code,pwd)
export const editLoginPwd = (data) => request({
	url: '/user/editLoginPwd',
	method: 'post',
	data: data
})
// 修改登录密码
export const editToLoginPwd = (data) => request({
	url: '/user/updateMyPwd',
	method: 'post',
	token: data.token,
	data: {
		oldPwd:data.oldPwd,
		confirmPwd:data.confirmPwd,
		newPwd:data.newPwd
	}
})
// 修改手机号码发送验证码
export const editMobileEditPwd = (data) => request({
	url: '/user/sendMobileCode2',
	method: 'post',
	token: data.token,
	data: {
		newMobile:data.newMobile
	}
})
// 修改手机号码
export const editMobilebyCode = (data) => request({
	url: '/user/updateMobile',
	method: 'post',
	token: data.token,
	data: {
		oldMobile:data.oldMobile,
		newMobile:data.newMobile,
		code:data.code,
	}
})
//获取个人信息接口：/user/getMyInfo
export const getMyInfoData = (data) => request({
	url: '/user/getMyInfo',
	method: 'post',
	token: data.token
})
// 获取反馈类型接口：/use/listFeedback
export const getFeedbackType = (data) => request({
	url: '/use/listFeedback',
	method: 'post',
	token: data.token
})
// 单个图片上传：/common/upload/singleImg
export const uploadSingleImg = (data) => request({
	url: '/common/upload/singleImg',
	method: 'post',
	token: data.token,
	data: {
		type:data.type,
		file:data.file
	}
})
// 获取省份
export const getProvince = (data) => request({
	url: '/common/getProvinces',
	method: 'post',
	token: data.token,
	data:{
		reason:data.reason
	}
})
// 获取城市
export const getCity = (data) => request({
	url: '/common/getCitysById',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		reason:data.reason
	}
})
// 获取地区
export const getArea = (data) => request({
	url: '/common/getAreasById',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		reason:data.reason
	}
})
// 提交审核信息
export const saveExamineInfo = (data) => request({
	url: '/user/saveMyInfo',
	method: 'post',
	token: data.token,
	data: {
		workName:data.workName,
		idCard:data.idCard,
		invalidDate:data.invalidDate,
		urgentMobile:data.urgentMobile,
		idCardFront:data.idCardFront,
		idCardBack:data.idCardBack,
		idCardMiddle:data.idCardMiddle,
		province:data.province,
		city:data.city,
		areas:data.areas
	}
})
// 获取团队信息 id
export const getTeamInfoList = (data) => request({
	url: '/team/getInfo',
	method: 'post',
	token: data.token
})
// 获取一个团队信息 id
export const getOneTeamInfo = (data) => request({
	url: '/team/getOneInfo',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 获取我创建的团队列表 id
export const getMyCreateTeam = (data) => request({
	url: '/team/createList',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 获取团队派单列表 id
export const getTeamOrderList = (data) => request({
	url: '/team/orderList',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 获取某一团队下的成员的列表接口 id
export const getOneTeamUser = (data) => request({
	url: '/team/userList',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 分配订单接口
export const shareOrder = (data) => request({
	url: '/order/transfer',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,//订单id
		workId:data.workId//目标师傅id
	}
})
// 创建团队
export const createTeam = (data) => request({
	url: '/team/create',
	method: 'post',
	token: data.token,
	data:{
		name:data.name,
		profile:data.profile
	}
})
// 删除团队 id
export const deleteTeam = (data) => request({
	url: '/team/delete',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 加入团队 id
export const joinTeam = (data) => request({
	url: '/team/join',
	method: 'post',
	token: data.token,
	data:{
		code:data.code
	}
})
// 退出团队 id
export const exitTeam = (data) => request({
	url: '/team/exit',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 获取大厅订单接口
export const getDatingOrder = (data) => request({
	url: '/order/getNewList',
	method: 'post',
	token: data.token,
	data:{
		pageSize:data.pageSize,
		pageNum:data.pageNum
	}
})
// 获取大厅订单接口
export const getDatingNearbyOrder = (data) => request({
	url: '/order/getNewList',
	method: 'post',
	token: data.token,
	data:{
		pageSize:data.pageSize,
		pageNum:data.pageNum,
		area:data.area,
		city:data.city
	}
})
// 经纬度获取地址接口
export const getAddressBylat = (data) => request({
	url: '/common/getAddressByLocation',
	method: 'post',
	token: data.token,
	data:{
		lat:data.lat,
		lng:data.lng,
	}
})

// 获取订单详情
export const getOneOrderDetail = (data) => request({
	url: '/order/getInfo',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 师傅接单
export const masterToAcceptOrder = (data) => request({
	url: '/order/accept',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 师傅上门签到
export const masterToDoor = (data) => request({
	url: '/order/sign',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 签署施工协议接口
export const doorGetXieyi = (data) => request({
	url: '/order/protocol',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		extralMoney:data.extralMoney,//申请附加费用的金额
		extralRemark:data.extralRemark,//申请附加费用的备注
		extralPic:data.extralPic,//申请附加费用的凭证
		protocolPic:data.protocolPic,//施工协议图片
	}
})
// 施工图片上传
export const buildImgPost = (data) => request({
	url: '/order/build',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		numberPic:data.numberPic,//产品序列号
		beforePic1:data.beforePic1,//申请附加费用的金额
		beforePic2:data.beforePic2,//申请附加费用的备注
		afterPic1:data.afterPic1,//申请附加费用的凭证
		afterPic2:data.afterPic2,//施工协议图片
	}
})
// 我的订单
// 获取状态对应的数量接口
export const getCountByStatus = (data) => request({
	url: '/order/getCountByStatus',
	method: 'post',
	token: data.token
})
// 获取日期对应的数量接口
export const getCountByDate = (data) => request({
	url: '/order/getCountByDate',
	method: 'post',
	token: data.token,
	data:{
		startDate:data.startDate,
		endDate:data.endDate
	}
})
// 获取我的订单列表接口
export const getMyAlreadyOrderList = (data) => request({
	url: '/order/getMyList',
	method: 'post',
	token: data.token,
	data:{
		productType:data.productType?data.productType:'',
		orderStatus:data.orderStatus?data.orderStatus:'',
		searchInfo:data.searchInfo?data.searchInfo:'',
		pageSize:data.pageSize?data.pageSize:'',
		pageNum:data.pageNum?data.pageNum:'',
		isFinish:data.isFinish?data.isFinish:'',
	}
})
// 订单预约前拨打电话接口：/order/phone
export const yuyueCall = (data) => request({
	url: '/order/phone',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 拨打电话打点
export const yuyueCallPoint = (data) => request({
	url: '/order/phoneCount',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 师傅拒单
export const refuseOrder = (data) => request({
	url: '/order/refuse',
	method: 'post',
	token: data.token,
	data:{
		id:data.id
	}
})
// 订单预约时间订单预约的接口：/order/yuyue id：订单id date：预约日期 type：1：上午，2：下午
export const toYuyueTime = (data) => request({
	url: '/order/yuyue',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		date:data.date
	}
})
// 订单编辑预约时间接口 id：订单id date：预约日期 type：1：上午，2：下午
export const toEditYuyueTime = (data) => request({
	url: '/order/yuyueEdit',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		date:data.date,
	}
})
// 挂起订单
export const orderWait = (data) => request({
	url: '/order/hangup',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		reason:data.reason,
		date:data.date
	}
})
// 提交反馈
export const submitBackInof = (data) => request({
	url: '/order/saveFeedback',
	method: 'post',
	token: data.token,
	data:{
		orderId:data.id,
		uploadImgs:data.uploadImgs,
		commentInfo:data.commentInfo
	}
})
// 空跑订单提交
export const submitKongpao = (data) => request({
	url: '/order/kongpao',
	method: 'post',
	token: data.token,
	data:{
		id:data.id,
		kongpaoImg:data.kongpaoImg
	}
})