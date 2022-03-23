import { LightningElement,api,wire,track } from 'lwc';
import { createRecord, getFieldValue } from 'lightning/uiRecordApi';
import { getRecord } from 'lightning/uiRecordApi';
import acc from '@salesforce/schema/Account'
import name from '@salesforce/schema/Account.Name';
import email from '@salesforce/schema/Account.Supportemail__c';

export default class CreateaccountLightDataService extends LightningElement {

    //Vishva to test git update
    @api recordId;
    @track name ;
    @track email ='';
    @api account;

    renderedCallback(){
        console.log(this.recordId+'rendered');
    }

@wire(getRecord,{ recordId : '$recordId', fields:[name, email]})
handle(result){
    console.log(JSON.stringify(result.data));
    this.name= getFieldValue(result.data, name);
    console.log(this.name +'name');
}

    handleit(e){
        if(e.target.name =='name')
          this.name = e.target.value;
          if(e.target.name =='age')
          this.age = e.target.value;
          if(e.target.name =='email')
          this.email = e.target.value;
    }

    method1(e){
        const fields = {};
        fields[name.fieldApiName] = this.name;
        fields[email.fieldApiName] = this.email;

        const recordInput = {apiName: acc.objectApiName, fields};
        createRecord(recordInput)
        .then(account =>{
            this.accountId = account.id;
            console.log(this.accountId);
        })
        .catch(error=>{
            console.log(error);
            })
    }
}