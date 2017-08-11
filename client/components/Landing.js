angular.module('app')
.controller('LandingCtrl', function($scope, Auth) {
  this.username = '';
  this.butnClicked = true;
  this.password = '';
  this.signup = true;
  this.sisu = 'Need to Sign In';

  this.getStarted = () => {
  	this.butnClicked = false;
  }

  this.handleSignUp = (username, password, email) => {
  	console.log(username, password, email, 'signed Up')
  	var obj = {username: username, password: password, email: email};
  	Auth.signup(obj, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        $scope.$ctrl.userId = res;
      	this.handleSignIn(email, password)
        // console.log('successful server response for signup');
      }
  	})
  }

  this.handleSignIn = (email, password) => {
  	var obj = {email: email, password: password};
  	Auth.signin(obj, function(err, res) {
      if (err) {
        console.error(err)
      } else {
        $scope.$ctrl.userId = res;
      	$scope.$ctrl.signedIn = true;
        $scope.$ctrl.init();
        // console.log('successful server response for signin');
      }
  	})
  }

  this.toggle = () => {
  	this.signup = !this.signup;
  	if (this.signup) {
  	  this.sisu = 'Need to Sign In';
  	} else {
  	  this.sisu = 'Create an Account';
  	}
  }

})
.component('landingPage', {
  controller: 'LandingCtrl',
  bindings: {
  	signedIn: '=',
    userId: '=',
    init: '<'
  },
  templateUrl: '../templates/landing.html'
})
