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
	//console.log(ref);

	$scope.authObj = $firebaseAuth(ref);
	var obj = $firebaseObject(ref);

	$scope.createUser = function(form) {
		console.log("Email: " + form.email);
		console.log(form.password);

		var info = {
			email: form.email,
			password: form.password
		};
		$scope.authObj.$createUser({
			email: form.email,
			password: form.password
		}).then(function(userData){

			console.log("User " + userData.uid + " created successfully");

			return $scope.authObj.$authWithPassword({
				email: form.email,
				password: form.password
			});
		}).then(function(authData){
			console.log("Logged in as ", authData.uid);
			$location.path('/dashboard');
		}).catch(function(error) {
			console.error("Error : ", error);
		});
	}


})
    