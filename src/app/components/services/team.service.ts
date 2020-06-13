import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  constructor(public _HTTP:HttpClient) { }

  CheckTeamName(data:String){
    return this._HTTP.post<any>(environment.apiTeam+'/checkTeamName', {teamName:data});
  }
}