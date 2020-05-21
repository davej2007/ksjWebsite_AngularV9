import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class WeddingNavBarComponent implements OnInit {

  constructor(public _AUTH:AuthenticationService) { }

  ngOnInit(): void {
  }
  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}