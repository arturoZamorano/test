function PbButtonCtrl($scope, $http, $location, $log, $window, localStorageService, modalService) {
    'use strict';
    var vm = this;
    this.action = function action() {
        window.print();
    };
}
