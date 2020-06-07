import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PartyService } from './party.service';

@Injectable({
  providedIn: 'root'
})
export class AllPartiesService implements Resolve<any> {
  
  constructor(
    public _PARTY:PartyService  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<any> | Promise<any> | any{    
    return this._PARTY.getPartyDetails();
  }
        
};