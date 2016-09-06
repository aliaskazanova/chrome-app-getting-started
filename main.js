var todoapp = angular.module('todoapp',[]);
todoapp.controller('todoctrl',function($scope){
    $scope.listItems = [
        "item1",
        "item2",
        "item3"
    ];
    
    $scope.add = function(){
        $scope.state=  "";
        if(!$scope.Items){
           $scope.state= "no item";
           return;
        }
        if($scope.listItems.indexOf($scope.Items)== -1){
            $scope.listItems.push($scope.Items);
            $scope.state="item added";
            $scope.Items="";
        }else{
            $scope.state="The item is already in your shopping list.";
        }
        if($scope.listItems.length > 5){
                $scope.state="maximum item";
                $scope.listItems.splice(5,3);
            }
        
    };
    $scope.remove=function(index){
        $scope.listItems.splice(index,1);
        $scope.state="removed";
    }
})
document.querySelector('button').addEventListener('click',function(){
    
})