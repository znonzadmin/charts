// pages/new_friends.js
Page({
  data:{
      lists:[
          {
           id:1,
           name:"小何",
           niktype:"遁地小牛",
           status:"已申请",
           src:"icon/init_sd.png",
           status_type:0
          },
          {
           id:2,
           name:"海",
           niktype:"虎辣",
           status:"已添加",
           src:"icon/init_sd.png",
           status_type:1,
          },
          {
           id:3,
           name:"big_dog",
           niktype:"汪汪汪",
           status:"已拒绝",
           src:"icon/init_sd.png",
           status_type:0,
          }
      ],
      mobilesrc:"icon/init_sd.png",
      boundmobileStatus:0,
      boundmobileStatus:1,
      boundmobilelink:"1111"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
      console.log(111);
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})