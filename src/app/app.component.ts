import { Component } from '@angular/core';
import { AUTHService } from './components/_AUTH-Modules/AUTH.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KSJ Web Site';
  constructor( public _AUTH:AUTHService ){}
}
