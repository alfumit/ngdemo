import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
/**
 * Created by Alex on 26.03.2017.
 */
export const cities: City[] = [
  {
    'name': 'Moscow',
    'airT': -5,
    'waterT': 0
  },
  {
    'name': 'Berlin',
    'airT': 10,
    'waterT': 5
  },
  {
    'name': 'Mumbai',
    'airT': 30,
    'waterT': 20
  }
];

export const hotels: Observable<Hotel[]> = Observable.of([
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

export const DEFAULT_HOTEL: Hotel = {
    'name': 'loading',
    'stars': 1,
    'description': 'loading',
    'telephone': '1111',
    'photo': 'link',
    'city': cities[0]
};
