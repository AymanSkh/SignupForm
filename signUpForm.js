import { LightningElement } from 'lwc';

export default class SignUpForm extends LightningElement {

    pageOne = true;
    pageTwo = false;
    pageThree = false;

    changePageToTwo()
    {
        this.pageOne = false;
        this.pageTwo = true;
    }

    changePageToThree()
    {
        this.pageTwo = false;
        this.pageThree = true;
    }

    backToPageOne()
    {
        this.pageOne = true;
        this.pageTwo = false;
    }

    backToPageTwo()
    {
        
        this.pageThree = false;
        this.pageTwo = true;
    }

}