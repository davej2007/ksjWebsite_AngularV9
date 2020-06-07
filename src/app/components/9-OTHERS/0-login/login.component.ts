import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  // @Input() data:any
  
  constructor(public route: ActivatedRoute) {}
  
  ngOnInit() {
    let data = this.route.snapshot.paramMap.get('page');
    console.log(data)

  }
  public service:boolean = true;


}
