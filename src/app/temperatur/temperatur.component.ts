import { Component, Input } from '@angular/core';

@Component({
  selector: 'temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent {

  @Input()
  public city: City;

  public input(): void {}

}
