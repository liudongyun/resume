angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.myGoBack = function($ionicNavBarDelegate) {
      $ionicNavBarDelegate.back();
      console.log($ionicNavBarDelegate)
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,Infos,Works) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.infos=Infos.all();
  $scope.works=Works.all();

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
