import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  constructor(
    private fb:FormBuilder) {}

  // form Get
  get userID()          { return this.registrationForm.get('userID');   }
    
  // Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  public userIDValid:Boolean = true;
  
  // Form Definition
  registrationForm = this.fb.group({
    userID: [null, [Validators.required]]
  })
  disableForm(){    
    this.processing = true;
    this.userID.disable();
  }
  enableForm(){
    this.processing = false;
    this.userID.enable();
  }
  submit(registrationData){
    this.disableForm();
    console.log(registrationData)
  }
  

}
