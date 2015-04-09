var app = angular.module("my-app", ['ngRoute', 'firebase']);



	app.directive('ngDirLoading', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/partials/ngDirLoading.html' //loading status
		}
	});
	app.directive('ngDirFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/partials/ngDirFooter.html' //loading status
		}
	});
	app.directive('myNav', function() {
		return {
			restrict: 'A',
			templateUrl: 'components/partials/ngDirNav.html' //loading status
		}
	});
	app.directive('ngDirSignform', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/partials/ngDirSignform.html' //sign up form
		}
	});
	app.directive('ngDirLoginform', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/partials/ngDirLoginform.html' //sign up form
		}
	});
	app.controller('mainCTRL', function($scope, $firebaseObject) {
		$scope.loading = true;
		var ref = new Firebase("https://symu.firebaseio.com/");
		// download the data into a local object
		var fireObj = $firebaseObject(ref);

		fireObj.$loaded().then(function(){
			$scope.objects = fireObj;
			$scope.loading = false;
		})
		$scope.loginPop = false;
		$scope.signPop = false;



		$scope.logged = true;
		$scope.username = "Kowalski";
		$scope.userId = '52323';
		$scope.pId = '42u2jhc';
		$scope.pIdName = 'So awesome project';
		$scope.commentText = "Lorem dolorem ipsum isnt so bad...";
		$scope.commentScore = '6';
		$scope.statusClick = false;
		$scope.score = 5;
		$scope.statusClickS = function() {
			if ($scope.statusClick === false) {
				$scope.score = $scope.score + 1;
				$scope.statusClick = true;
			}
		};

		

		// var postsRef = ref.child("posts");
		// new pushing ( child - {} )

		//
		//
		//
		//
		//
		//
		//

	});

	app.controller('FormCtrl', function($scope) {
		$scope.$watch('loginPop', function(){
			$scope.loginPop ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
		});
		$scope.$watch('signPop', function(){
			$scope.signPop ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
		});




		//pushowanie form do tablicy 
		$scope.list = ['zz', 'dd'];
		$scope.text = "zzz";
		$scope.submit = function() {
			if ($scope.text) {
				$scope.list.push(this.text);
				$scope.text = '';
			}
		}
		// $scope.$watch('list', function() {
		// 	  console.log($scope.list);
		// })


	});


	app.config(['$routeProvider', function($routeProvider) {
	    $routeProvider
	        .when('/', {
	            templateUrl : 'index.html'
	        })
	        .when('/about', {
	            templateUrl : 'about.html'
	        })
	        .when('/contact', {
	            templateUrl : 'contact.html'
	        })
	        .when('404', {
	        	templateUrl : '404.html'
	        })
	        .when('/user/:userId', {
	        	templateUrl : 'user.html'
	        })
	        .when('/user/:userId/:pId', {
	        	templateUrl : 'project.html'
	        })
	        .otherwise({
	            redirectTo : '404',
	            templateUrl : '404.html'
	        });


	        // link - / = # (anchor) 
	        // konstrukcja:
	        // '/folder/:id' ,  '/contact'
	}]);



 
