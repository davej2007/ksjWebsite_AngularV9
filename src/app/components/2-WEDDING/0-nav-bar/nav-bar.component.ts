import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AUTHService } from '../../_AUTH-Modules/AUTH.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class WeddingNavBarComponent implements OnInit {

  constructor(public _AUTH:AUTHService) { }

  ngOnInit(): void {
  }
  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}