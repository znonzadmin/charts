Page({
  data: {
    array: [
      {
      id:1,
      type:"new_friends",
      name: '新朋友',
      link:'pages/new_friends/new_friends'

    }, {
      id:2,
      name: '朋友',
      type:"new_friends",
      link:"pages/friend/friend"
    }
    ,
    {
      id:3,
      name: '阿雷',
      type:"friend",
      link:"pages/friend/friend"
    },
    {
      id:4,
      name: '小花',
      type:"group_chat",
       link:"pages/group_chat/group_chat"
    },
    {
      id:5,
      name: '小牛',
      type:"enterprize",
      link:"pages/enterprize/enterprize"
    }
    ]
    },
    add :function(){
        console.log("1122");
    },
    tapName: function(event) {
    console.log(event);
    
  }
})