/*jslint vars: true, browser: true , nomen: true, indent: 2*/
/*global angular */

angular.module("directives.employeesList").controller("employeesListController", ["$scope", "employeeData", "employeeModal", "confirmModal", function ($scope, employeeData, employeeModal, confirmModal) {
  "use strict";
  $scope.employees = employeeData.all();

  $scope.setEmployee = function (employee) {
    $scope.$emit("employee-clicked", employee);
  };

  // Determine if an employee is from the currently selected group. This will
  // be used to filter the employees list.
  $scope.isFromGroup = function (employee) {
    if (!$scope.group) {
      return false;
    }
    return (employee.group_id === $scope.group.id);
  };

  $scope.newEmployee = function () {
    employeeModal.open({ title: "New person" }).then(function (attributes) {
      attributes.group_id = $scope.group.id;
      return employeeData.create(attributes);
    });
  };
}]);
