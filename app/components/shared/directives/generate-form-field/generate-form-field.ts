/*
 * @ngdoc directive
 * @name kitoon.common:GenerateFormField
 * @scope
 * @restrict E
 *
 * @description
 * An AngularJS directive for generate the form field.
 *
 * @example
 * <generate-form-field attribute-details="attribute" field-name="key"></generate-form-field>
 *
*/

export class GenerateFormField implements ng.IDirective {
    restrict = 'E';
    scope = {
        attributeDetails: "=",
        fieldName: "@"
    };
    bindToController = true;
    controller = function() {
        if(this.attributeDetails.type === 'Brick[]') {
            this.listOptions = [{
                "name": "brick1",
                "value": "brick1"
            }, {
                "name": "brick2",
                "value": "brick2"
            }, {
                "name": "brick3",
                "value": "brick3"
            }];
        }
    };
    controllerAs = 'generateFormField';
    templateUrl = 'views/shared/directives/generate-form-field/generate-form-field-template.html';
}
