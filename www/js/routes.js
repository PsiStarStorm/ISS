angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.clocks', {
      url: '/page2',
      views: {
        'tab3': {
          templateUrl: 'templates/clocks.html',
          controller: 'clocksCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.worldMap', {
      url: '/page3',
      views: {
        'tab5': {
          templateUrl: 'templates/worldMap.html',
          controller: 'worldMapCtrl'
        }
      }
    })
        
      
    
      
        
    .state('welcome', {
      url: '/page5',
      templateUrl: 'templates/welcome.html',
      controller: 'welcomeCtrl'
    })
        
      
    
      
    .state('tabsController', {
      url: '/page6',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.settings', {
      url: '/page15',
      views: {
        'tab9': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.alarms', {
      url: '/page16',
      views: {
        'tab4': {
          templateUrl: 'templates/alarms.html',
          controller: 'alarmsCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page6/page2');

});