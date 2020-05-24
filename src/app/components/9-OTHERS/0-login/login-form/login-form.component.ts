import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/components/services/auth.service';

export interface ILOGINDATA {
teamName:String,
password:String
}
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private fb:FormBuilder,
    private _ROUTER:Router,
    private _AUTH:authService) {}

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
  submit(loginData:ILOGINDATA){
    this.disableForm();
    console.log(loginData)
    if(loginData.teamName[0]==='$'){
      let userID = loginData.teamName.slice(1).trim();
      let password = loginData.password.trim();
      this.successMsg = 'Attempting Operator Log In .... '+ userID;      
      console.log('Operator Log In');
      this._AUTH.operatorLogIn({userId:userID, password:password}).subscribe(
        res=>{},
        err=>{}
      )
    } else {
      this.successMsg = 'Attempting Team Log In ....';
      console.log('Team Log In')
    }
  }
  cancel(){
    this._ROUTER.navigateByUrl('/ksj/welcome')
  }
}
