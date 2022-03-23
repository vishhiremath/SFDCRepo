import { LightningElement,api,wire,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
 import { getRecord } from 'lightning/uiRecordApi';
import acc from '@salesforce/schema/Account';
import name from '@salesforce/schema/Account.Name';
import email from '@salesforce/schema/Account.Supportemail__c';

export default class Accountopeningform extends LightningElement {
@api recordId;
@api name = 'Naren';
@track email ='';
    
    renderedCallback(){
        console.log(this.recordId+'remdered');

    }

}