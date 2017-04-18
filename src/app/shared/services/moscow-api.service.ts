import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MoscowApiService {

  private _apiLink: string = 'https://apidata.mos.ru/v1/datasets/655/version';

  public constructor(private http: Http) { }

  public getData(): string {
    return 'test';
  }

}
