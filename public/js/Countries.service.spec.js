(function(){

    'use strict';

    let $httpBackend, Countries, Utils;

    beforeEach(angular.mock.module('angulartest'));

    beforeEach(inject(function(_$httpBackend_, _Countries_, _Utils_){
        $httpBackend = _$httpBackend_;
        Countries    = _Countries_;
        Utils        = _Utils_;
    }));

    describe('the Countries service', function(){

        it('should exist', function(){

            expect(Countries).toBeDefined();            
        });

        it('should have an empty items array', function(){

            expect(Countries.items.length).toBe(0)
        })

        it('should fetch all countries', function(done){

            $httpBackend.expectGET('https://restcountries.eu/rest/v1/region/Europe').respond(200, [{promise:'ok'}]);            
            
            Countries.fetch().then(function(res){
                
                expect(res[0].promise).toEqual('ok');

            }).catch(function(res){
                
                expect(thisHasNotBeenDeclared).toBeUndefined();

            }).finally(done);

            $httpBackend.flush();
        });        
    });
})();