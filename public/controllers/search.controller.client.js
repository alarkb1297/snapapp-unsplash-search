(function () {
    angular
        .module("SnapApp")
        .controller("searchController", searchController);

    function searchController(imageService, $routeParams, $location) {

        var model = this;

        model.searchImage = searchImage;

        model.searchQuery = $routeParams.searchQuery;
        model.searchResultDisplayText = model.searchQuery;


        function init() {
            if (model.searchQuery) {
                searchImage(model.searchQuery);
            } else {
                imageService
                    .randomImages()
                    .then(function (images) {
                        model.randomImages = images;
                    });
            }
        }

        init();


        function searchImage(query) {

            if (query) {
                model.searchQuery = query;
                $location.url("/search/image/" + model.searchQuery);
                model.errorMessage = null;
                imageService
                    .searchImages(model.searchQuery)
                    .then(function (response) {
                        var images = response;
                        if (images.results.length === 0) {
                            model.errorMessage = "No results found";
                        } else {
                            model.images = images.results;
                        }
                    });
            } else {
                model.errorMessage = "Please enter a query value";
            }
        }
    }

})();
