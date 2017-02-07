(function(){

    'ues strict';

    class API {

        constructor($window, $resource, $q){

            this.$q         = $q;
            this.$resource  = $resource;
            this.$window    = $window;
            this.url        = `${this.$window.location.protocol}//${this.$window.location.host}/api/users`
        }

        save(payload){
            
            let defer = this.$q.defer();

            return this.$resource(this.url).save(payload).$promise.then(function(res){

                defer.resolve(res)
                return defer.promise;

            }, (res) => {

                console.log( 'Error saving user', res)
                defer.reject(res);
                return defer.promise;
            })
        }
    }

    API.$inject = ['$window', '$resource', '$q'];

    angular.module('angulartest').service('API', API);

})();