angular.module('ngHackerNews',[])
  .factory('hackerNews',function(){
    var getItem = function(itemId,cb){
      cb('foo');
    }
    return {
      getItem:getItem
    }
  })

