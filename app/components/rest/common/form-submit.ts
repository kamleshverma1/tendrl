/// <reference path="../../../../typings/tsd.d.ts" />

export class FormSubmitService {
    rest: restangular.IService;
    restFull: restangular.IService;
    static $inject: Array<string> = ['Restangular'];
    constructor(rest: restangular.ICollection) {
        this.rest = rest.withConfig((RestangularConfigurer) => {
            RestangularConfigurer.setDefaultHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
            RestangularConfigurer.setBaseUrl('http://127.0.0.1:9393/1.0/');
        });
        this.restFull = rest.withConfig((RestangularConfigurer) => {
            RestangularConfigurer.setDefaultHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
            RestangularConfigurer.setBaseUrl('http://127.0.0.1:9393/1.0/');
            RestangularConfigurer.setFullResponse(true);
        });
    }

    // **saveFormData**
    // **@returns** a promise with save form data.
    saveFormData(cluster_id, inventory, data) {
        return this.restFull.one('cluster', cluster_id).all('/' + inventory + '/create').post(data).then(function(jobObject) {
            return jobObject;
        });
    }

}
