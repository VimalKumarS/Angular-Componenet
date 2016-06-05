/**
 * Created by vimal on 5/18/2016.
 */

(function(){
  var module= angular.module("psMovies");

    module.component("movieDetails",{
        templateUrl:"./ps-movies/movie-details.component.html",
        controllerAs:"model",
        $routeConfig:[
            {path:"/overview",component:"movieOverView",name:"Overview"},
            {path:"/cast",component:"movieCast",name:"Cast"},
            {path:"/director",component:"movieDirector",name:"Director"}
        ],
        controller:function(){
            var model=this;
           /* $canActivate:function ($timeout) {
                return $timeout(function(){
                    return true;
                },2000);
            }*/

            // next - route going to
            // previous -- route comming from
            model.$routerOnActivate=function(next,previous){
                console.log("onactivated")
                console.log(next);
                console.log(previous);
                model.id= next.params.id;
            }
            
            
        }
    });

    module.component("movieOverView",{
        template:"this is movieOverView"
    })
    module.component("movieCast",{
        template:"this is movie cast"
    })
    module.component("movieDirector",{
        template:"this is movie director"
    })
}())