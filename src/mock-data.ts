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
export const hotels: Hotel[] = [
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
];
