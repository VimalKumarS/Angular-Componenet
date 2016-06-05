/**
 * Created by vimal on 5/15/2016.
 */


(function(){
    'use strict';
   // var module=angular.module("psMovies",["ngRoute"]);
    var module=angular.module("psMovies",["ngComponentRouter"]);
   /* module.config(function($routeProvider){
        $routeProvider.when("/list",{
            template:"<movie-list></movie-list>"
        })
            .when("/about",{
                template:"<app-about></app-about>"
            })
            .otherwise({redirectTo:"/list"});
    })*/

    module.value("$routerRootComponent","movieApp");

    module.component("appAbout",{
        template:"This is the about page"
    })
}());
