
import {ActionListService} from '../rest/common/action-list';

export class VolumeController {

	public volumeList: Array<any>;
	public actionList: Array<any>;

    static $inject: Array<string> = [
        '$location',
        'ActionListService',
    ];

    constructor(
        private $location: ng.ILocationService,
        private actionListService: ActionListService) {
        	this.volumeList = [
        		{volname: "vol1", state: 2, status: 0, cluster_name: "Gluster1"},
        		{volname: "vol2", state: 2, status: 0, cluster_name: "Gluster1"}
        	];
        	this.init();
    }

    public init(): void {
    	this.actionListService.getActionList('f82409b8-b5ba-4f91-8486-e0294193268e', 'volume').then((actionList) => {
                this.actionList = actionList;
        });
    }

    public performAction(action): void {
    	if(action === 'create') {
    		this.$location.path('/volume/new');
    	}
    }

}
