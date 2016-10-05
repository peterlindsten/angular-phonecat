'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', '$timeout',
      function PhoneDetailController($routeParams, Phone, $timeout) {
        var self = this;
        $timeout(function() {
          self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            self.setImage(phone.images[0]);
          });
        }, randn_bm() * 1500);

        self.setImage = function setImage(imageUrl) {
          $timeout(function() {
            self.mainImageUrl = imageUrl;
          }, Math.random() * 1000 + 1000);
        };
      }
    ]
  });

  // Standard Normal variate using Box-Muller transform.
  function randn_bm() {
      var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
      var v = 1 - Math.random();
      var r = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
      if (r < 0) {
        r = -r;
      }
      return r;
  }
