import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  public service:number = 0;

  ngOnInit(): void {
  }

}
