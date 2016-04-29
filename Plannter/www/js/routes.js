angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  // $urlRouterProvider.when('/login', 'templates/login.html');


  $stateProvider
    // .state('login', {
    //   url:'/login',
    //   templateUrl:'templates/login.html'

    // })
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl as ctrl'
    })

    .state('signup', {
      url:'/signup',
      templateUrl:'templates/signup.html',
      controller: 'signupCtrl'

    })    
  

  .state('tabsPreLogin.about', {
    url: '/about',
    views: {
      'tab1': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsPreLogin.home', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsPreLogin.donate', {
    url: '/donate',
    views: {
      'tab3': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('tabsPostLogin.homeIn', {
    url: '/homeIn',
    views: {
      'tab9': {
        templateUrl: 'templates/homeIn.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsPostLogin.dashboard', {
    url: '/dashboard',
    views: {
      'tab7': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })     

  .state('tabsPostLogin.addcrop', {
    url: '/addcrop',
    views: {
      'tab8': {
        templateUrl: 'templates/addcrop.html',
        controller: 'addcropCtrl'
      }
    }
  }) 

  .state('tabsPostLogin.aboutIn', {
    url: '/aboutIn',
    views: {
      'tab10': {
        templateUrl: 'templates/aboutIn.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsPostLogin.donateIn', {
    url: '/donateIn',
    views: {
      'tab11': {
        templateUrl: 'templates/donateIn.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('tabsPreLogin', {
    url: '/tabsprelogin',
    templateUrl: 'templates/tabsPreLogin.html',
    abstract:true
  })

  .state('tabsPostLogin', {
    url: '/tabspostlogin',
    templateUrl: 'templates/tabsPostLogin.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/tabsprelogin/home')

  

});