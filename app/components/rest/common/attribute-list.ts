/// <reference path="../../../../typings/tsd.d.ts" />

export class AttributeListService {
    rest: restangular.IService;
    restFull: restangular.IService;
    static $inject: Array<string> = ['Restangular'];
    constructor(rest: restangular.ICollection) {
        this.rest = rest.withConfig((RestangularConfigurer) => {
            RestangularConfigurer.setBaseUrl('http://127.0.0.1:9393/1.0/');
        });
        this.restFull = rest.withConfig((RestangularConfigurer) => {
            RestangularConfigurer.setBaseUrl('http://127.0.0.1:9393/1.0/');
            RestangularConfigurer.setFullResponse(true);
        });
    }

    // **getAttributeList**
    // **@returns** a promise with attribute list.
    getAttributeList(cluster_id, inventory) {
        return this.rest.one('cluster/' + cluster_id + '/' + inventory + '/attributes').get().then(function(attributeList) {
            return attributeList.plain();
        });
    }

}
