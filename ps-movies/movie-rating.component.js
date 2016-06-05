/**
 * Created by vimal on 5/18/2016.
 */
(function(){
    var module= angular.module("psMovies");

    var buildEntries=function(value,max){
        var entries=[];
        for(var i=1;i<=max;i++){
            var icon= i<=value ?"glyphicon-star":"glyphicon-star-empty";
            entries.push(icon);
        }
        return entries;
    }

    module.component("movieRating",{
        templateUrl:"./ps-movies/movie-rating.component.html",
        bindings:{
            value:"<",
            max:"<",
            setRating:"&"
        },
        //transclude:true,
        controllerAs:"model",
        controller:function(){
            var model= this;
            model.$onInit=function(){
               // model.entries= new Array(model.value);
                model.entries=buildEntries(model.value,model.max);
                    //new Array(model.max);
            }


            model.$onChanges= function(){
                //model.entries= new Array(model.value);
                model.entries= buildEntries(model.value,model.max);
                    //new Array(model.max);
            }
        }
    })
}())