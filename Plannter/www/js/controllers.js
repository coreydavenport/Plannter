angular.module('app.controllers', ['firebase'])

.controller('LoginCtrl', LoginCtrl)
  
.controller('aboutCtrl', function($scope) {

})
   
.controller('homeCtrl', function($scope) {

})
   
.controller('donateCtrl', function($scope) {

})

.controller('dashboardCtrl', function($scope) {

})

.controller('addcropCtrl', function($scope, $firebaseObject, $http) {
	var ref = new Firebase("https://plannter.firebaseio.com/crops/");
	console.log(ref);

	var obj = $firebaseObject(ref);

	$scope.formModel = {};

	$scope.onSubmit = function () {
		console.log("Form Submitted!");
		console.log($scope.formModel);

		$http.post('https://plannter.firebaseio.com/crops/', $scope.formModel).success(function (data) {
				console.log("Success!");
			}).error(function (data) {
				console.log("Something went wrong :(");
			})
	};
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

function LoginCtrl(Auth, $state) {
  this.loginWithFacebook = function loginWithFacebook() {
    Auth.$authWithOAuthPopup('facebook')
      .then(function(authData) {
        $state.go('tabsPostLogin.dashboard');
      });
  };

}
LoginCtrl.$inject = ['Auth', '$state'];
    