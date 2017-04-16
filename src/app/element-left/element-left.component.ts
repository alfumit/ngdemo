import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cities } from '../../mock-data';
import {hotels} from '../../mock-data';
import {MoscowApiService} from '../shared/services/moscow-api.service';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  public constructor(private moscowAPI: MoscowApiService) {};
  public cities: City[] = cities;
  public hotels: Hotel[] = hotels;

  @Input()
  public selectedStars: number = 0;

  @Output()
  public hotelSwitch: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public switchHotel(e: Hotel): void {
    this.hotelSwitch.emit(e);
  };


}
