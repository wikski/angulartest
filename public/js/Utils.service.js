(function(){

    'ues strict';

    class Utils {

        constructor($state){

            this.$state = $state;            
        }

        refresh(){
            
            this.$state.reload();
        }
    }

    Utils.$inject = ['$state'];

    angular.module('angulartest').service('Utils', Utils);
})();