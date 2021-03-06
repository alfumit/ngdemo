import { Component, Input } from '@angular/core';
import { cities, DEFAULT_HOTEL, hotels } from '../mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'this is internal appcomponent content!';
  public cities: City[] = cities;

  @Input()
  public selectedHotel: Hotel = DEFAULT_HOTEL ;

}
