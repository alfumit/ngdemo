import { Component, OnInit } from '@angular/core';
import { cities } from '../../mock-data';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {
  public cities: City[] = cities;
  /*public data: [string] = [{
    name:  'xxx',
    address: 'yyy',
    phone: 'zzz'
  }]*/
}
