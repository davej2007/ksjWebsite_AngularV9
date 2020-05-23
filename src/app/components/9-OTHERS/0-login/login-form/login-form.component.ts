import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private fb:FormBuilder,
    private _ROUTER:Router) {}

  // form Get
  get teamName()          { return this.loginForm.get('teamName');   }  
  get password()          { return this.loginForm.get('password');   }

  // Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  public teamNameValid:Boolean = true;
  
  // Form Definition
  loginForm = this.fb.group({
    teamName: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })
  disableForm(){    
    this.processing = true;
    this.teamName.disable();
    this.password.disable();
  }
  enableForm(){
    this.processing = false;
    this.teamName.enable();
    this.password.enable();
  }
  submit(loginData){
    this.disableForm();
    console.log(loginData)
  }
  cancel(){
    this._ROUTER.navigateByUrl('/ksj/welcome')
  }
}
