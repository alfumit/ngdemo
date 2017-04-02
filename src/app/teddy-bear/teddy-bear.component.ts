import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent {

  @Input()
  public city: City;

}
