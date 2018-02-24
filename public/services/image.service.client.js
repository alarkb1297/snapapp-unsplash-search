
(function () {
    angular
        .module("SnapApp")
        .factory("imageService", imageService);

    function imageService($http) {

        var applicationID = "3e4cc2c8e416cb3eb64505e78fb7f584284b1dced28e4c7d58f09327775a4bbc";

        var api = {
            "searchImages": searchImages,
            "randomImages": randomImages
        };
        return api;

        function searchImages(query) {

            var url = "https://api.unsplash.com/search/photos?per_page=25&query=" + query + "&client_id=" + applicationID;
            return $http.get(url)
                .then(function (response) {
                    //console.log(response.data);
                    return response.data;
                })

        }

        function randomImages() {

            var url = "https://api.unsplash.com/photos/random?count=25&client_id=" + applicationID;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }
    }
})();
