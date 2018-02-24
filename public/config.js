(function () {
    angular
        .module("SnapApp")
        .config(configuration);

    function configuration($routeProvider) {

        $routeProvider
        //search routes
            .when("/", {
                templateUrl: "./views/search.view.client.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/search/image/:searchQuery", {
                templateUrl: "./views/search.view.client.html",
                controller: "searchController",
                controllerAs: "model"
            })
    }
})();