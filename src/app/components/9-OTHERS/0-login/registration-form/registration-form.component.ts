import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/components/services/team.service';
import { PartyService } from 'src/app/components/services/party.service';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  constructor(
    private fb:FormBuilder,
    private _TEAM:TeamService,
    private _PARTY:PartyService,
    private _ROUTER:Router) {}

  // form Get
  get teamName()          { return this.registrationForm.get('teamName');   }
  get password()        { return this.registrationForm.get('password');   }
  get name()        { return this.registrationForm.get('name');   }
  get partyID()         { return this.registrationForm.get('partyID');   }
    
  // Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  public teamIDValid:Boolean = true;
  public teamMessage:String = '';
  public partyIDValid:Boolean = true;
  public partyMessage:String = '';
  
  // Form Definition
  registrationForm = this.fb.group({
    teamName: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
    partyID: [null, [Validators.required]]
  })
  disableForm(){    
    this.processing = true;
    this.teamName.disable();
    this.password.disable();
    this.partyID.disable();
  }
  enableForm(){
    this.processing = false;
    this.teamName.enable();
    this.password.enable();
    this.partyID.enable();
  }
  checkTeamIDNotInUse(){
    if(this.teamName.value != null ){
      this._TEAM.CheckTeamName(this.teamName.value).subscribe(
        res=>{
            this.teamIDValid = res.success;
            this.teamMessage = res.message;
        },
        err=>{}
      )
    }
  }
  checkPartyID(){
    if(this.partyID.value != null ){
      this._PARTY.checkPartyID(this.partyID.value).subscribe(
        res=>{
          if(res.success){
            this.partyIDValid = true;
            this.partyMessage = 'Your Have Selected : '+res.party.title
          } else {
            this.partyIDValid = false;
            this.partyMessage = 'Party ID Not Found'
          }
            
        },
        err=>{}
      )
    }
  }
  submit(registrationData){
    this.disableForm();
    console.log(registrationData)
  }
  cancel(){
    this._ROUTER.navigateByUrl('/ksj/welcome')
  }
}
