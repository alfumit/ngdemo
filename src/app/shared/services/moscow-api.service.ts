import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {cities} from '../../../mock-data';


@Injectable()
export class MoscowApiService {

  private _apiLink: string = 'https://apidata.mos.ru/v1/datasets/2343/rows';
  private _apiImage: string = 'https://apidata.mos.ru/v1/datasets/2343/image';

  public constructor(private http: Http) { }

  public getMoscowApi(top: number = 0,
                      skip: number = 0,
                      orderBy: string = '',
                      filter: string = ''
  ): Observable<MoscowHotel[]> {
        return this.http
            .get(`${this._apiLink}?$top=${top}&$skip=${skip}&$orderBy=${orderBy}&$filter=${filter}`)
            .map((response: Response) => {
                return response.json();
            });
  }

    public getApiIcon(): Observable<any> {
        return this.http
            .get(this._apiImage)
            .map((response: Response) => {
                return response;
            });
    }

  public getData(): Observable<Hotel[]> {
    return Observable.of([
          {
              'name': '1 season',
              'stars': 1,
              'description': 'No heating',
              'telephone': '998976868686',
              'photo': 'link',
              'city': cities[0]
          },
          {
              'name': 'NoTree',
              'stars': 2,
              'description': 'Out in the field',
              'telephone': '998976868686',
              'photo': 'link',
              'city': cities[1]
          },
          {
              'name': 'Grand Spa and Gilded Chicken',
              'stars': 2,
              'description': 'Oh, we lie so sweet',
              'telephone': '998976868686',
              'photo': 'link',
              'city': cities[2]
          },
          {
              'name': '4 seasons',
              'stars': 5,
              'description': 'Right in the middle of Moscow',
              'telephone': '998976868686',
              'photo': 'link',
              'city': cities[0]
          },
          {
              'name': 'Double Tree by Hilton',
              'stars': 5,
              'description': 'Leningradka',
              'telephone': '998976868686',
              'photo': 'link',
              'city': cities[1]
          },
          {
              'name': 'Shithole',
              'stars': 3,
              'description': 'Right in the middle of Moscow',
              'telephone': '998976868686',
              'photo': 'link',
              'city': cities[2]
          }
      ]).delay(3000);
  }

}
