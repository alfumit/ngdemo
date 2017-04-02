import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
