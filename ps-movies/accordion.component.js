/**
 * Created by vimal on 6/5/2016.
 */
(function(){


    var module= angular.module("psMovies");

    module.component("accordion",{
       transclude:true,
        template:"<div class='panel-group' ng-transclude></div>",
        controller:function(){
            var model=this;
            var panels=[];
            model.addPannel=function(panel){
                panels.push(panel);
                if(panels.length>0){
                    panels[0].turnOn();
                }
            }

            model.selectPanel=function(panel){
                for(var i in panels){
                    if(panel==panels[i]){
                        panels[i].turnOn();
                    }
                    else{
                        panels[i].turnOff();
                    }
                }
            }
        }
    });

    module.component("accordionPannel",{
        transclude:true,
        bindings:{
          "heading":"@"
        },
        require:{
            parent:"^accordion"
        },
        controller:function(){
            var model= this;
            model.selected=false;
            model.$onInit=function(){
                model.parent.addPannel(model);
            }
            model.turnOn=function () {
                model.selected=true;
            }

            model.turnOff=function () {
                model.selected=false;
            }
            model.select=function () {
                model.parent.selectPanel(model);
            }
        },
        controllerAs:"model",
        template:"<div class='pannel pannel-default'>"+
            "<div class='pannel-heading' ng-click='model.select()'>"+
        "<h4 class='pannel-title'>{{model.heading}}</h4>"+
        "</div>"+
            "<div ng-if='model.selected' class='pannel-body' ng-transclude></div>"+
        "</div>"

    })

}())