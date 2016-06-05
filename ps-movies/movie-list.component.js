
(function(){
  var module= angular.module("psMovies");

    function fetchMovies($http){
        return $http.get("./movies.json").then(function(response){
            return response.data;
        });
    }

    function controller($http) {
        var model = this;

        model.message = "Hello frpm a componenet controller"
        model.changeMessage = function () {
            model.message = "New message"
        }

        model.$onInit=function(){
            fetchMovies($http).then(function(movies){
                model.movies=movies;
            })
        }

        model.upRating= function(movie){
            if(movie.rating<5){
                movie.rating+=1;
            }
        }
        model.downRating= function(movie){
            if(movie.rating>1){
                movie.rating-=1;
            }
        }

        model.setRating=function(movie,newrating){
            movie.rating=newrating;
        }

        model.goTo=function (id) {
            //model.$router.navigate(["Details",{id:id}]) -- provide default component
            model.$router.navigate(["Details",{id:id},"Overview"])
        }
    }

    module.component("movieList",{
        
        templateUrl:"./ps-movies/movie-list.component.html",
        controllerAs:"model",
        controller:["$http",controller],
        bindings:{
            "$router":"<"
        }
    });
    
}());