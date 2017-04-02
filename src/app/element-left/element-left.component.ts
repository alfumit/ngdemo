import { Component, EventEmitter, Output } from '@angular/core';
import { cities } from '../../mock-data';
import {hotels} from '../../mock-data';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {
  public cities: City[] = cities;
  public hotels: Hotel[] = hotels;

  @Output()
  public hotelSwitch: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public switchHotel(e: Hotel): void {
    this.hotelSwitch.emit(e);
  };


}
