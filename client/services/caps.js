angular.module('app')
.factory('Caps', function($http) {

  var STORE_URL = 'http://127.0.0.1:3000';

  const filterCaps = function(filterMethod, userId, cb) {

    $http({
      url: `${STORE_URL}/capsules/${filterMethod}`,
      method: 'GET',
      data: {userId: userId},
      contentType: 'application/json'
    })
    .then(function(res) {
      console.log('caps data is ', res.data);
      cb(null, res.data);
    })
    .catch(function(err) {
      cb(err);
    });

    // jQuery.ajax({
    //     url: "http://example.appspot.com/rest/app",
    //     type: "POST",
    //     data: JSON.stringify({"foo":"bar"}),
    //     dataType: "json",
    //     contentType: "application/json; charset=utf-8",
    //     success: function (response) {
    //         console.log("success");
    //     },
    //     error: function (response) {
    //         console.log("failed");
    //     }
    // });

  };

  const createCap = function(userId, cb) {

    $http({
      url: `${STORE_URL}/create`,
      method: 'POST',
      data: {userId: userId},
      contentType: 'application/json'
    })
    .then(function(res) {
      cb(null, res.data);
    })
    .catch(function(err) {
      cb(err);
    });

  };

  const saveCap = function(inputObj, cb) {

    $http({
      url: `${STORE_URL}/edit`,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(inputObj),
    })
    .then(function(res) {
      cb(null, res.data);
    })
    .catch(function(err) {
      cb(err);
    });

  };

  const bury = function(input, cb) {
    // Not sure if to add this on server side or Front End
    // since it's being 'buried', the inprogress property
    // needs to be set to false and a unearthed date is set
    $http({
      url: `${STORE_URL}/bury/id`,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(input),
    })
    .then(function(res) {
      cb(null, res.data);
    })
    .catch(function(err) {
      cb(err);
    });

  };
  
  return {
    filterCaps: filterCaps,
    saveCap: saveCap,
    bury: bury,
    createCap: createCap
  };
})