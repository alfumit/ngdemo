import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], stars: number): any {
    if (!stars) {
      return hotels;
    }
    return hotels.filter((hotel: Hotel) => {
      if (hotel.stars === stars) {
        return hotel;
      }
    });
  }

}
