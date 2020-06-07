import { Injectable } from '@angular/core';
import { authService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AUTHService {

  // Authentication Variables
  public Token : String;
  public admin : String = '0';
  public operator : {_id:String, userID:String, name:String}
  public team : {_id:String, teamName:String}
  public userName : String
  public partyID : String

  constructor(
    public _auth:authService
  ) { }

initilizeSettings(): Promise<any> {
  if(this.Token ==='false' || this.Token===null || this.Token===undefined) this.Token = localStorage.getItem('Token') || 'false';
  const AuthPromise = this._auth.decodeToken()
    .toPromise()
    .then(
      token => {
        console.log(token)
        if(!token.valid){
          this.admin = '1';
          this.operator = {_id:null, userID:null, name:null};
          this.team = {_id:null, teamName:null}
          this.userName = null
          this.partyID = null
          this.Token = null;
        } else { 
          this.admin = token.admin;
          this.operator = {_id:token.decoded.operator_id,
                            userID:token.decoded.operatorID,
                            name:token.decoded.operatorname};
          this.team = {_id:token.decoded.team_id, teamName:token.decoded.teamName}
          this.userName = token.decoded.operatorname || token.decoded.teamName;
          this.partyID = null
        }
      },
      err =>  {
          alert('Server Error : '+err.message+' If this continues Please contact Systems.');
      })
return AuthPromise;
}
  UserLoggedIn(){
    if(this.userName==null){
      return false
    } else {
      return true
    }
  }
  adminRights(e:any){
    if(!!this.admin){
      for (var i = 0; i <= e.length; i++) {
        if (i==e.length){
          return false;
        } else {
          if(this.admin[e[i]]=='1') return true;
        }
      }
    }
    return false;
  }
  storeLocalVariables(token:string){
    if (token) {
      localStorage.setItem('Token', token);
      this.Token = token;
    }
    this.initilizeSettings();
  }
  doLogOut(){
      localStorage.removeItem('Token');
      this.Token = 'false';
      this.initilizeSettings();
  };
}