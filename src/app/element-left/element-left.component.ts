import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cities } from '../../mock-data';
import {MoscowApiService} from '../shared/services/moscow-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {
    public cities: City[] = cities;
    public hotels$: Observable<Hotel[]>;
    public apiData$: Observable<any>;

  @Input()
  public selectedStars: number = 0;

  @Output()
  public hotelSwitch: EventEmitter<Hotel> = new EventEmitter<Hotel>();

    public constructor(private moscowAPI: MoscowApiService) {
         this.hotels$ = this.moscowAPI.getData();
         this.apiData$ = this.moscowAPI.getMoscowApi();
    };

  public switchHotel(e: Hotel): void {
    this.hotelSwitch.emit(e);
  };


}
