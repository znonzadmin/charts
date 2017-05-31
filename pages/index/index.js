//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
   toView: '#fff',
    scrollTop: 50,
    motto: '尹鹏孝的微信小程序',
    userInfo: {},
    text: '开始了',
    array: [{msg: '2016年11月17日'}]
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      //that.alerts("1234")
    })
  },



})

