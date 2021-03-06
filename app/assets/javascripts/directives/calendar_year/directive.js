/*jslint vars: true, browser: true , nomen: true, indent: 2*/
/*global angular */

angular.module("directives.calendarYear").directive("calendarYear", function () {
  "use strict";
  return {
    restrict: "AE",
    templateUrl: "directives/calendar_year/template.html",
    controller: "calendarYearController",
    scope: {
      group: "=",
      employee: "="
    }
  };
});
