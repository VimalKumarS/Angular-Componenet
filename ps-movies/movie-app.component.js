/**
 * Created by vimal on 5/18/2016.
 */
(function(){
    var module= angular.module("psMovies");
    module.component("movieApp",{
        templateUrl:"./ps-movies/movie-app.component.html",
        $routeConfig:[
            {path:"/list",component:"movieList",name:"List"},
            {path:"/about",component:"appAbout",name:"About"},
            {path:"/detail/:id/...",component:"movieDetails",name:"Details"},
            {path:"/**",redirectTo:["List"]}
        ]
    })
}())

// ... provide additional configuration