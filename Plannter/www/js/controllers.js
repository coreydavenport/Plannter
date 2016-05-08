angular.module('app.controllers', ['firebase'])

.controller('LoginCtrl', LoginCtrl)
  
.controller('aboutCtrl', function($scope) {

})
   
.controller('homeCtrl', function($scope) {

})
   
.controller('donateCtrl', function($scope) {

})

.controller('dashboardCtrl', function($scope, $firebaseArray, $http, $compile, uiCalendarConfig) {
	var ref = new Firebase("https://plannter.firebaseio.com/crops");
	console.log("Firebase connected!", ref);

	$scope.crops = $firebaseArray(ref);

	console.log($scope.crops);


	$scope.calendarDate = [
		{
			events: [

			],
		}
	];

	$scope.uiConfig = {
	      calendar:{
	        height: 450,
	        editable: true,
	        header:{
	          left: 'title',
	          center: '',
	          right: 'today,prev,next'
	        },
	        dayClick: $scope.setCalDate,
	        eventDrop: $scope.alertOnDrop,
	        eventResize: $scope.alertOnResize
	      }
	    };


	$scope.rend = function (crop){
		console.log($scope);
		$scope.calendarDate.fullCalendar('render');

	}
	ref.on("value", function(result) {
	
		$scope.crops = $firebaseArray(ref);

	}, function (error) {
		console.log("the read failed" +  error.code);
	});

	$scope.toggleCrop = function(crop) {
    if ($scope.isCropShown(crop)) {
      
      $scope.shownCrop = null;
    } else {
      $scope.shownCrop = crop;
    }
  };
  $scope.isCropShown = function(crop) {
    return $scope.shownCrop === crop;
  };

})

.controller('addcropCtrl', function($scope, $firebaseObject, $http) {
	var ref = new Firebase("https://plannter.firebaseio.com/crops");
	console.log(ref);

	$scope.obj = $firebaseObject(ref);

	$scope.formModel = {};

	$scope.onSubmit = function () {
		console.log("Form Submitted!");
		console.log($scope.formModel);




		ref.push({ name: $scope.formModel.name,
				  startDate: $scope.formModel.startDate,
				  gens: $scope.formModel.gens,
				  plantPeriod: $scope.formModel.plantPeriod,
				  transplantPeriod: $scope.formModel.transplantPeriod
		});
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
    