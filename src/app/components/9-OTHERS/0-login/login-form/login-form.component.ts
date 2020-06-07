import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/components/services/auth.service';
import { AUTHService } from 'src/app/components/_AUTH-Modules/AUTH.service';

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
    private _Auth:authService,
    private _AUTH:AUTHService) {}

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
    if(loginData.teamName[0]==='$'){
      let userID = loginData.teamName.slice(1).trim();
      let password = loginData.password.trim();
      this.successMsg = 'Attempting Operator Log In .... '+ userID;
      this._Auth.operatorLogIn({userID:userID, password:password}).subscribe(
        res=>{
          if(!res.success){
            this.successMsg = null;
            this.errorMsg = res.message;
            setTimeout(()=>{
              this.errorMsg = '';
              this.enableForm();
            }, 2000);
          } else {
            this.successMsg = 'Welcome '+res.operator;
            console.log(res)
            setTimeout(()=>{
              this.successMsg = '';
              this._AUTH.storeLocalVariables(res.token);
              this._ROUTER.navigateByUrl('/')
            }, 2000);
          }
          
        },
        err => {
          alert('Server Error : '+err.message+' If this continues Please contact Systems.');
          this.enableForm();
        }
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
