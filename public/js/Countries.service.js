(function(){

    'ues strict';

    class Countries {

        constructor($resource, $q){

            this.$q = $q;
            this.$resource = $resource;
            this.url = 'https://restcountries.eu/rest/v1/region/Europe';
            this.items = [];
        }

        fetch(){
            
            let defer = this.$q.defer();

            return this.$resource(this.url).query().$promise.then(function(res){

                defer.resolve(res)
                return defer.promise;

            }, (res) => {

                console.log( 'Error fetching countries', res)
                defer.reject(res);
                return defer.promise;
            })
        }
    }

    Countries.$inject = ['$resource', '$q'];

    angular.module('angulartest').service('Countries', Countries);

})();