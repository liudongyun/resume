angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '基本信息',
    lastText: '想说的,不想说的,不得不说的......',
    icon:'ion-paper-airplane'
  }, {
    id: 1,
    name: '经历与技能',
    lastText: '过去的,永远的,值得珍惜的......',
    icon:'ion-compose'
  }, {
    id: 2,
    name: '我想说...',
    lastText: '坚持的,努力的.....',
    icon:'ion-clipboard'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})





/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }

})


.factory('Infos',function(){
  var infos=[{
    id:0,
    contLeft:'88年女程序猿一枚,毕业于天津理工大学一个大家都嗤之以鼻的专业——网络营销(SEO)',
    contRight:'ps:具体原因我也不知道,只知道老师曾千叮咛万嘱咐苦口婆心告诉我们:要在简历上写自己是软件工程毕业的......'
  },{
    id:1,
    contLeft:'一个不怎么会讲天津话的天津人,来北京的原因:据说这里是中国的硅谷',
    contRight:'ps:这个我个人是没感觉啦,只觉得这是一个整天神神秘秘的城市(雾霾~)'
  },{
    id:2,
    contLeft:' 一次刻骨铭心的实习经历让我找到了自己喜爱的行业——前端 ',
    contRight:'ps:好吧,我承认刚毕业那会儿真的是出于喜爱才义无反顾的选择了这个职业,现在嘛...你懂的....'
  },{
    id:3,
    contLeft:'我不够聪明,一年级时老师给我写的第一条评语是:笨鸟先飞'
  },{
    id:3,
    contLeft:'我不够勇敢,遇到困难比林妹妹还能哭'
  },{
    id:3,
    contLeft:'我不够漂亮,所以来当码农了'
  },{
    id:3,
    contRight:'我爱辣椒,喜欢肉,爱电影,喜欢言情,爱旅游,喜欢穿帆布鞋,我爱前端,喜欢和我一样爱前端的人'
  }];
  return {
      all: function() {
        return infos;
      }
    }
})

.factory('Works',function(){
  var works=[{
    id:0,
    contLeft:'2013年的1月我以实习生的身份进入了一家建站公司——乐之网络',
    contRight:'这是我的第一份工作,也正是这份工作,让思考着"未来何去何从"的我知道了前端这个职业......'
  },{
    id:1,  
    contRight:'在这里我学会了前端的基本功——div+css布局和各个浏览器的兼容'
  },{
    id:2,
    contLeft:'因为IT行业在二线城市的局限性,最终逼迫我(真的是被逼无奈)2013年6月一个人一个行李箱来到了北京,"光荣的"加入了北漂行列',
    contRight:'直到今天我也没后悔曾经的决定.....反而庆幸当初的义无反顾.....'
  },{
    id:3,
    contLeft:'2013年7月我开始了我真正在北京工作的第一个机会——格尚科技,一个曾经给嗨淘做项目的外包公司,我主要负责当时的guang项目',
    contRight:'在这里我学到了关于jquery,javascript的基础知识,并学着写效果'
  },{
    id:3,
    contLeft:'2014年6月我进入了恒拓开源开始做国航网站的前端相关工作',
    contRight:'在毫无前途和天天改table页面的绝望中我一咬牙一跺脚毅然决然的离开了'
  },{
    id:3,
    contRight:'对于现在的自己而言,毕竟成长是第一位的,福利和待遇将来会有的......'
  },{
    id:3,
    contLeft:'2014年8月我进入了美时互动做关于owhat粉丝见面会的网页',
    contRight:'在这家公司我学到了bootstrap,angularjs,github的基本操作,并学着看英文文档研究一些以nodejs为基础的前端框架'
  }];
  return {
      all: function() {
        return works;
      }
    }
});


