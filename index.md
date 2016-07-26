---
---

<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.js"></script>
<link rel="stylesheet" href="https://cdn.rawgit.com/esvit/ng-table/v1.0.0/dist/ng-table.min.css">
<script src="https://cdn.rawgit.com/esvit/ng-table/v1.0.0/dist/ng-table.js"></script>

<script>

(function() {
  "use strict";

  var app = angular.module("myApp", ["ngTable", "ngTableDemos"]);

  app.controller("demoController", demoController);
  
  demoController.$inject = ["NgTableParams", "ngTableSimpleMediumList", "ngTableDemoCountries"];
  
  function demoController(NgTableParams, simpleList, countries) {
    this.countries = countries;
    this.tableParams = new NgTableParams({
      // initial filter
      filter: { name: "T" } 
    }, {
      dataset: simpleList
    });
  }
  
  
  app.controller("dynamicDemoController", dynamicDemoController);
  
  dynamicDemoController.$inject = ["NgTableParams", "ngTableSimpleMediumList", "ngTableDemoCountries"];
  
  function dynamicDemoController(NgTableParams, simpleList, countries) {
    this.cols = [
      { field: "name", title: "Name", filter: { name: "text" }, show: true },
      { field: "age", title: "Age", filter: { age: "number" }, show: true },
      { field: "money", title: "Money", show: true },
      { field: "country", title: "Country", filter: { country: "select" }, filterData: countries, show: true }
    ];
    
    this.tableParams = new NgTableParams({
      // initial filter
      filter: { country: "Ecuador" } 
    }, {
      dataset: simpleList
    });
  }
})();

(function() {
  "use strict";

  angular.module("myApp").run(setRunPhaseDefaults);
  setRunPhaseDefaults.$inject = ["ngTableDefaults"];

  function setRunPhaseDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 5;
    ngTableDefaults.settings.counts = [];
  }
})();

</script>


<div ng-app="myApp" class="container-fluid">
  <div class="row">
    <div class="col-xs-12">
      <h2 class="page-header">Filtering - basic example</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="bs-callout bs-callout-info">
            <h4>Overviews</h4>
            <p><code>ngTable</code> provides a header template that adds filtering to a html table.</p>
            <ul>
              <li>Specify which column should recieve a filter and the template that this filter should use</li>
              <li><code>ngTable</code> module supplies filter templates for common input types such as number, text, select and select-multiple</li>
              <li>Optionally supply the initial column filter <em>values</em> to the <code>NgTableParams</code> constructor call</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="bs-callout bs-callout-warning">
            <h4>Got a <code>getData</code> function?</h4>
            <p>In this case you'll need to apply the values from <code>NgTableParams.filters()</code> to the data you want to display in your table. This is typically the case when the data is being fetched from the server</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6" ng-controller="demoController as demo">
      <h3>ngTable directive</h3>
      <table ng-table="demo.tableParams" class="table table-condensed table-bordered table-striped">
        <tr ng-repeat="row in $data">
          <td data-title="'Name'" filter="{name: 'text'}">{{row.name}}</td>
          <td data-title="'Age'" filter="{age: 'number'}">{{row.age}}</td>
          <td data-title="'Money'">{{row.money}}</td>
          <td data-title="'Country'" filter="{ country: 'select'}" filter-data="demo.countries">{{row.country}}</td>
        </tr>
      </table>
    </div>
    <div class="col-md-6" ng-controller="dynamicDemoController as demo">
      <h3>ngTableDynamic directive</h3>
      <table ng-table-dynamic="demo.tableParams with demo.cols" class="table table-condensed table-bordered table-striped">
        <tr ng-repeat="row in $data">
          <td ng-repeat="col in $columns">{{row[col.field]}}</td>
        </tr>
      </table>
    </div>
  </div>
</div>
