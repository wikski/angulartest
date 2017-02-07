(function(){

    'use strict';

    class homeController {        

        constructor(Countries, API, Utils){

            this.API        = API;
            this.Countries  = Countries;
            this.items      = this.Countries.items;
            this.loader     = true;
            this.models     = {
                age: '',
                country: '',
                name: '',
                sex: null
            };           
            this.submitted  = false;
            this.Utils      = Utils;

            this.fetchCountries();                      
        }

        fetchCountries(){

            if(!this.Countries.items.length){

                this.Countries.fetch().then((res) => {

                    this.items = this.Countries.items = res;

                }, null).finally(() => {

                    this.loader = false;
                });    

            } else {

                this.loader = false;
            }  
        }

        handleForm(formObj){
            
            if(formObj.$valid){

                this.loader = true;

                this.API.save(this.models).then((res) => {
                    
                    if(res.status === 200){
                        
                        this.submitted = true;
                    }

                }, null).finally(() => {
                    this.loader = false;
                });
            }
        }       

        refresh(){
            this.Utils.refresh();
        } 
    }

    homeController.$inject = ['Countries', 'API', 'Utils'];

    angular.module('angulartest').controller('homeController', homeController);

})();