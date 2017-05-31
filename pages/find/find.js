var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
Page({
  data:{
    // text:"这是一个页面"
    list:[],
     dd:'',
     hidden:false,
     page: 1,
     size: 20,
     hasMore:true,
     hasRefesh:false,

     //轮播图数据：
     imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //轮播图事件-start
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //轮播图事件-end


  onLoad:function(options){
    var that = this;
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
       list:res.data.result.list,
       hidden: true,
    });
    },function(res){
     console.log(res);
 });
  },
  onReady:function(){
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
  },
   //点击事件处理
  bindViewTap: function(e) {
    console.log(e.currentTarget.dataset.title);
  },
  //加载更多
  loadMore: function(e) {
     var that = this;
    that.setData({
    hasRefesh:true,});
    if (!this.data.hasMore) return
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno='+(++that.data.page)+'&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
       list: that.data.list.concat(res.data.result.list),
       hidden: true,
       hasRefesh:false,
    });
    },function(res){
     console.log(res);
  })
},
//刷新处理
refesh: function(e) {
 var that = this;
 that.setData({
    hasRefesh:true,
 });
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
      list:res.data.result.list,
       hidden: true,
       page:1,
       hasRefesh:false,
    });
    },function(res){
     console.log(res);
 })
},
})
1
2