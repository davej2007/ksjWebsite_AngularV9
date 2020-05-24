import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class authService {

  constructor(public _HTTP:HttpClient) { }

  operatorLogIn(data:any){
    return this._HTTP.post<any>(environment.apiAuth+'/operatorLogIn', data);
  }
}