(function(){
    function app(){
        console.log("hello console");
    }
    angular.module('io.github.amitse',[])
    .controller('app',app);
}());