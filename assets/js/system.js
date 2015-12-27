var app = angular.module("yoursearch", []);
app.controller("core", function ($scope, $http) {

    var urls = [];
    var title = [];
    var dis = [];
    var source = [];
    $scope.init = function () {
        //  runApis("nfl");

    };

    $scope.checkIfEnterKeyWasPressed = function ($event, myValue) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            runApis(myValue);

        }

    };

    function runApis(myValue) {
        var google_url = 'http://ajax.googleapis.com/ajax/services/search/web?callback=JSON_CALLBACK&v=1.0&q=' + myValue;
        var duckduckgo_url = 'http://api.duckduckgo.com/?callback=JSON_CALLBACK&q=' + myValue + '&format=json';
        //    var rottenTomatoes = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=3wu47t4b7vkjx2q4qq3hzwxg&q=' + encodeURI(myValue) + '&page_limit=1';

        fetch(duckduckgo_url, 'duck');
        fetch(google_url, 'google');


    }


    function fetch(apiUrl, engine) {

        $http.jsonp(apiUrl).success(function (data) {
            if (engine === 'duck') {
                title.push(data.Heading);
                urls.push(data.RelatedTopics[1].FirstURL);
                dis.push(data.RelatedTopics[1].Text);
                source.push("DuckDuckGo");
            } else if (engine === 'movies') {
                title.push(data.movies.title);
                urls.push(data.RelatedTopics[1].FirstURL);
                dis.push(data.RelatedTopics[1].Text);
                source.push("Google");

            } else if (engine === 'google') {
                title.push(data.responseData.results[1].title);
                urls.push(data.responseData.results[1].unescapedUrl);
                dis.push(data.responseData.results[1].content);
                source.push("Google");
            }
            displayResults();


        });


    }





    function displayResults() {
        $("#result").empty();
        var final = '';
        for (i = 0; i < urls.length; i++) {

            final += "<div class='panel panel-warning'><div class='panel-heading'><h3 class='panel-title'><a href='" + urls[i] +
                "'>" + title[i] +
                "</a></h3></div><div class='panel-body'><h6><a href='" + urls[0] +
                "'>" + urls[i] +
                "</a></h6><p>" + dis[i] +
                "</p><span class='label label-warning'>" + source[i] + "</span></div></div>";

        }

        $("#result").append(final); // Result

    }





});
