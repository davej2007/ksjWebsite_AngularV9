import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  adminRights(admin:Array<Number>){
    console.log(admin);
    return true
  }

}
