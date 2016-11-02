/*
 * @ngdoc directive
 * @name kitoon.common:GenerateForm
 * @scope
 * @restrict E
 *
 * @description
 * An AngularJS directive for generate the form in generic way.
 *
 * @example
 * <generate-form form-attributes="attributeList" submit-btn-name="Create Volume"></generate-form>
 *
*/

import {FormSubmitService} from '../../../rest/common/form-submit';

export class GenerateForm implements ng.IDirective {
    restrict = 'E';
    scope = {
        formAttributes: "=",
        submitBtnName: "@"
    };
    bindToController = true;
    controller = function(FormSubmitService) {

        this.performAction = function() {
            var requestData = this.manipulateData(this.formAttributes);
            FormSubmitService.saveFormData('f82409b8-b5ba-4f91-8486-e0294193268e', 'volume', requestData).then((jobObject) => {
                   alert("Volume is created successfully. and JOB-ID is - " + jobObject.data.job_id + "And Volume creation is in " + jobObject.data.status);
            });
        };

        this.manipulateData = function(formAttributes) {
            var keys = Object.keys(formAttributes),
                len = keys.length,
                i;
            var requestData = {}
            for (i = 0; i < len; i++) {
                requestData[keys[i]] = formAttributes[keys[i]].value;
            }
            return requestData;
        }

    };
    controllerAs = 'generateForm';
    templateUrl = 'views/shared/directives/generate-form/generate-form-template.html';
}
