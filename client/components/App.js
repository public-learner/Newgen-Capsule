angular.module('app', [])
.controller('AppCtrl', function($scope, Caps) {
  this.signedIn = false;
  this.userId = '';
  this.initialData = [];
  this.first = true;
  this.email = '';

  this.init = (id) => {

    Caps.filterCaps('all', id, (err, allCaps) => {
  	  if (err) {
  	    throw new Error(err);
  	  } else {
        this.initialData = allCaps;
      }
    });

  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html'
})
