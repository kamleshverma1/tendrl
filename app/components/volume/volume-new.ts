
import {AttributeListService} from '../rest/common/attribute-list';

export class VolumeNewController {

	public attributeList: any;

    static $inject: Array<string> = [
        '$location',
        'AttributeListService',
    ];

    constructor(
        private $location: ng.ILocationService,
        private attributeListService: AttributeListService) {
        	this.init();
    }

    public init(): void {
    	this.attributeListService.getAttributeList('f82409b8-b5ba-4f91-8486-e0294193268e', 'volume').then((attributeList) => {
                this.attributeList = attributeList;
        });
    }

}
