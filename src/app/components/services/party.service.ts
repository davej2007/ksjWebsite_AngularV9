import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PartyService {

  constructor(public _HTTP:HttpClient) { }

  getPartyDetails(){
    return this._HTTP.get<any>(environment.apiParty+'/getAllParties');
  }
  createNewParty(data:any){
    return this._HTTP.post<any>(environment.apiParty+'/createNewParty', data);
  }
  checkParty(data:String){
    return this._HTTP.post<any>(environment.apiParty+'/checkParty', {partyID:data});
  }
  checkPartyID(data:String){
    return this._HTTP.post<any>(environment.apiParty+'/checkPartyID', {partyID:data});
  }
}