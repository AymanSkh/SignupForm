import { LightningElement, track} from 'lwc';
import pageUrl from '@salesforce/resourceUrl/recaptchaV2';
import getSignUpFormDetails from '@salesforce/apex/signUpController.getSignUpFormDetails';

export default class SignUpFormNew extends LightningElement {

    pageOne = true;
    pageTwo = false;
    pageThree = false;
    @track disableButton = true;
    @track newObj={
        fname:'',lname:'',phone:'',email:'',gender:'',edu:'',school:'',percent:'',uname:'',pw:''
    };
    
    @track navigateTo;


        
    changePageToTwo()
    {
        this.pageOne = false;
        this.pageTwo = true;
        this.newObj.fname = this.template.querySelector(".fname").value;
            this.newObj.lname = this.template.querySelector(".lname").value;
            this.newObj.phone = this.template.querySelector(".phone").value;
            this.newObj.email = this.template.querySelector(".email").value;
            this.newObj.gender = this.template.querySelector(".gender").value;
            this.newObj.dob = this.template.querySelector(".datein").value;
            console.log(this.newObj);
        
    }

    changePageToThree()
    {
        this.pageTwo = false;
        this.pageThree = true;
        this.newObj.edu = this.template.querySelector(".edu").value;
            this.newObj.school = this.template.querySelector(".school").value;
            this.newObj.percent = this.template.querySelector(".percent").value;
            console.log(this.newObj);
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

    submitHandle(event){
        event.preventDefault();
        console.log("hello");
        this.newObj.uname = this.template.querySelector(".uname").value;
        this.newObj.pw = this.template.querySelector(".pw").value;
        console.log(this.newObj);
    let sendRecords = JSON.stringify(this.newObj);
    console.log(sendRecords);
    getSignUpFormDetails({record:sendRecords});
}



    
 
    constructor(){
        super();
        this.navigateTo = pageUrl;
        window.addEventListener("message", this.listenForMessage);//add event listener for message that we post in our recaptchaV2 static resource html file.
        console.log(this.navigateTo);
        console.log( this.listenForMessage);
    }
 
    captchaLoaded(event){
        if(event.target.getAttribute('src') == pageUrl){
            console.log('Google reCAPTCHA is loaded.');
        } 
    }
 
    listenForMessage(message){
        console.log('message data : ' + message.data);
        if(message.data === "captcha success"){
            this.disableButton = false;
            console.log(this.disableButton);
        }//message.data - The object passed from the other window.
        console.log('message origin : ' + message.origin);//message.origin - The origin of the window that sent the message at the time postMessage was called.
    }


    


}