angular.module("quoteBook").controller('mainCtrl', function($scope, mainService) {


  $scope.quotes = mainService.getQuotes()
  
  
  
  $scope.addQuote = function (newQuote) {   mainService.addData(newQuote)
  
    $scope.quoted.text = '';
   $scope.quoted.author = '';
  
  }
  $scope.deleteButton = mainService.removeData;
//   $scope.addQuote = function(){
//   var newQuote = {
//     text:$scope.newQuoteText,
//     author:$scope.newQuoteAuthor
//   }
//   if(mainService.addData(newQuote))
//   {
//     $scope.newQuoteText = '';
//     $scope.newQuoteAuthor= '';
//   }
// }


})