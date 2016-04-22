angular.module('app.controllers', [])
  
.controller('aboutCtrl', function($scope) {

})
   
.controller('homeCtrl', function($scope) {

})
   
.controller('donateCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, $firebaseAuth, $firebaseObject) {

})

.controller('signupCtrl', function($scope, $firebaseAuth, $firebaseObject, $location) {
	var ref = new Firebase("https://plannter.firebaseio.com");
	console.log(ref);

	$scope.authObj = $firebaseAuth(ref);
	var obj = $firebaseObject(ref);



})
    