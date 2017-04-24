import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-row',
  templateUrl: './activity-row.component.html',
  styleUrls: ['./activity-row.component.css']
})
export class ActivityRowComponent {
  @Input()
  public name: string;

  @Input()
  public stars: number;

  @Input()
  public website: string;

  @Input()
  public email: string;

  @Input()
  public telephone: string;

  @Input()
  public photo: string;

}
